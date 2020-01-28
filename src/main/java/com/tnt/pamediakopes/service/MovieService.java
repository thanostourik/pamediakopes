package com.tnt.pamediakopes.service;

import com.tnt.pamediakopes.models.Movie;
import com.tnt.pamediakopes.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service(MovieService.SPRING_KEY)
public class MovieService {
	public static final String SPRING_KEY = "com.tnt.pamediakopes.service.MovieService";

	private MovieRepository movieRepository;

	/**
	 * Constructor
	 *
	 * @param movieRepository
	 */
	@Autowired
	public MovieService(MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}

	/**
	 *
	 * @return
	 */
	public Iterable<Movie> findAll() {
		return movieRepository.findAll();
	}

	/**
	 *
	 * @param id
	 * @return
	 */
	public Optional<Movie> findById(Long id) {
		return movieRepository.findById(id);
	}

	/**
	 *
	 * @param movie
	 * @return
	 */
	public Movie save(Movie movie) {
		return movieRepository.save(movie);
	}
}
