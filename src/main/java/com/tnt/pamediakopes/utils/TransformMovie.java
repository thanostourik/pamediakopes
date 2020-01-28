package com.tnt.pamediakopes.utils;

import com.tnt.pamediakopes.dto.MovieDto;
import com.tnt.pamediakopes.models.Movie;

public class TransformMovie {

	/**
	 *
	 * @param movie
	 * @return
	 */
	public static MovieDto toDtoMin(Movie movie) {
		MovieDto dto = new MovieDto();
		dto.setId(movie.getId());
		dto.setTitle(movie.getTitle());
		dto.setYear(movie.getYear());
		return dto;
	}

	/**
	 *
	 * @param movie
	 * @return
	 */
	public static MovieDto toDto(Movie movie) {
		MovieDto dto = toDtoMin(movie);
		dto.setDirector(movie.getDirector());
		dto.setDescription(movie.getDescription());
		return dto;
	}

	/**
	 *
	 * @param dto
	 * @return
	 */
	public static Movie fromDto(MovieDto dto) {
		Movie movie = new Movie();
		movie.setId(dto.getId());
		movie.setTitle(dto.getTitle());
		movie.setDirector(dto.getDirector());
		movie.setYear(dto.getYear());
		movie.setDescription(dto.getDescription());
		return movie;
	}
}
