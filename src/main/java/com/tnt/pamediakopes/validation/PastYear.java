package com.tnt.pamediakopes.validation;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented
@Target({ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PastYearImpl.class)
public @interface PastYear {
	String message() default "com.tnt.pamediakopes.validation.PastYear.message";
	Class<?>[] groups() default {};
	Class<? extends Payload>[] payload() default {};
}