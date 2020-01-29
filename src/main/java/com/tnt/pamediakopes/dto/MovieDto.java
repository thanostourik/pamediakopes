package com.tnt.pamediakopes.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.tnt.pamediakopes.validation.PastYear;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class MovieDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@NotEmpty(message = "{validation.error.title.required}")
	@Length(min = 2, message = "{validation.error.title.short}")
	private String title;

	@NotEmpty(message = "{validation.error.director.required}")
	@Length(min = 2, message = "{validation.error.director.short}")
	private String director;

	@NotNull(message = "{validation.error.year.required}")
	@Min(value = 1700, message = "{validation.error.year.wrong}")
	@PastYear(message = "{validation.error.year.wrong}")
	private Integer year;

	@NotEmpty(message = "{validation.error.description.required}")
	@Length(min = 50, message = "{validation.error.description.short}")
	private String description;
}
