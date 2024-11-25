CREATE TABLE roles (
	id SERIAL PRIMARY KEY,
	Role VARCHAR(50)
)

CREATE TABLE users (
	id SERIAL PRIMARY KEY, 
	user_Name VARCHAR(50),
	password VARCHAR(200),
	role_id int,
	FOREIGN KEY (role_id) REFERENCES Roles(id)	
)