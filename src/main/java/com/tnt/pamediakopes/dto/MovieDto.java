package com.tnt.pamediakopes.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class MovieDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String title;
	private String director;
	private Integer year;
	private String description;
}
