package com.tnt.pamediakopes;

import com.tnt.pamediakopes.dto.MovieDto;
import com.tnt.pamediakopes.utils.MovieDtoBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertFalse;

public class MovieValidationTest {

	private Validator validator;

	@BeforeEach
	public void setUpClass() {
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}

	@Test
	public void nullTitle() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setTitle(null);

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void shortTitle() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setTitle("A");

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void nullDirector() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setDirector(null);

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void shortDirector() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setDirector("A");

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void nullYear() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setYear(null);

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void wrongYear() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setYear(500);

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void futureYear() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setYear(2025);

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void nullDescription() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setDescription(null);

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}

	@Test
	public void shortDescription() {
		MovieDto dto = MovieDtoBuilder.build();
		dto.setDescription("A");

		Set<ConstraintViolation<MovieDto>> violations = validator.validate(dto);
		assertFalse(violations.isEmpty());
	}
}
