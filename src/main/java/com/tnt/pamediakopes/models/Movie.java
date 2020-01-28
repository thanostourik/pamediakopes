package com.tnt.pamediakopes.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "title")
	private String title;

	@Column(name = "director")
	private String director;

	@Column(name = "year")
	private Integer year;

	@Column(name = "description", columnDefinition="TEXT")
	private String description;
}
