package com.tnt.pamediakopes.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PastYearImpl.class)
public @interface PastYear {
	String message() default "com.tnt.pamediakopes.validation.PastYear.message";
	Class<?>[] groups() default {};
	Class<? extends Payload>[] payload() default {};
}