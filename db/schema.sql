CREATE DATABASE movie_finder_api;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    profile_path TEXT
);