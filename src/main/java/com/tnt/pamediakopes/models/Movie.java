package com.tnt.pamediakopes.models;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Data
@Entity
@EntityListeners(AuditingEntityListener.class)
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

	@CreatedDate
	@Column(name = "inserted_at", nullable = false, updatable = false)
	private ZonedDateTime insertedAt;

	@LastModifiedDate
	private ZonedDateTime updatedAt;
}
