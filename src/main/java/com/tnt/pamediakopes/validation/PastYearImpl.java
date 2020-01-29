package com.tnt.pamediakopes.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;

class PastYearImpl implements ConstraintValidator<PastYear, Integer> {

	@Override
	public void initialize(PastYear constraintAnnotation) {
	}

	@Override
	public boolean isValid(Integer year, ConstraintValidatorContext context) {
		if ( year == null ) return true;
		return year <= LocalDate.now().getYear();
	}
}