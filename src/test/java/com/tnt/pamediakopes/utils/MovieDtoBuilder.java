package com.tnt.pamediakopes.utils;

import com.tnt.pamediakopes.dto.MovieDto;

public class MovieDtoBuilder {

	/**
	 * Private constructor to hide implicit one
	 */
	private MovieDtoBuilder() {}

	/**
	 * Build a dummy MovieDto object
	 *
	 * @return
	 */
	public static MovieDto build() {
		MovieDto dto = new MovieDto();
		dto.setTitle("Harry Potter and the Sorcerer's Stone");
		dto.setDirector("Chris Columbus");
		dto.setYear(2001);
		dto.setDescription("An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.");
		return dto;
	}
}
