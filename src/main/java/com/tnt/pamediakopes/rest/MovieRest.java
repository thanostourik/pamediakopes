package com.tnt.pamediakopes.rest;

import com.tnt.pamediakopes.dto.MovieDto;
import com.tnt.pamediakopes.models.Movie;
import com.tnt.pamediakopes.service.MovieService;
import com.tnt.pamediakopes.utils.TransformMovie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/movies")
public class MovieRest {

	private MovieService movieService;

	/**
	 * Constructor
	 *
	 * @param movieService
	 */
	@Autowired
	public MovieRest(MovieService movieService) {
		this.movieService = movieService;
	}

	@GetMapping
	public ResponseEntity<List<MovieDto>> get() {
		List<MovieDto> dtos = StreamSupport.stream(movieService.findAll().spliterator(), false)
				.map(TransformMovie::toDtoMin)
				.collect(Collectors.toList());

		return ResponseEntity.ok(dtos);
	}

	@GetMapping("/{id}")
	public ResponseEntity<MovieDto> get(@PathVariable Long id) {
		return movieService.findById(id)
				.map(TransformMovie::toDto)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<MovieDto> post(@Valid @RequestBody MovieDto dto) {
		Movie movie = TransformMovie.fromDto(dto);
		movie = movieService.save(movie);
		MovieDto created = TransformMovie.toDto(movie);
		return ResponseEntity.ok(created);
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		return errors;
	}
}
