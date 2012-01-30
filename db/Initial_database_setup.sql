DROP DATABASE IF EXISTS rake;

CREATE DATABASE rake OWNER rake_user;

\connect rake

DROP SEQUENCE IF EXISTS notes_identity_seq;

CREATE SEQUENCE notes_identity_seq;

DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
	id				INTEGER DEFAULT nextval('notes_identity_seq') PRIMARY KEY,
	title 			VARCHAR(512) NOT NULL,
	content 		TEXT,
	created_date 	TIMESTAMP,
	modified_date 	TIMESTAMP
);