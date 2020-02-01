create table movie
(
    id bigint not null constraint movie_pkey primary key,
    title varchar(255),
    director varchar(255),
    year integer,
    description text,
    inserted_at timestamp not null,
    updated_at timestamp
);

create sequence hibernate_sequence;