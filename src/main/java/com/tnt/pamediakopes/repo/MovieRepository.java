package com.tnt.pamediakopes.repo;

import com.tnt.pamediakopes.models.Movie;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends PagingAndSortingRepository<Movie, Long> {
}
