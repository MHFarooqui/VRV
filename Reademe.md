### How to run the project

  
 To run the project follow below steps.

- First install all the dependencies
  

```shell

npm  install

```
- Fill env file with appropriate values.
- Use sql file under `SQLFiles/` to create the DB schema.
- 
- Once above steps are done, run the following command to start the project

  

```shell

npm  run  serve

```

  

### Sample curl requests to create the users.

  

- API

```http

http://localhost:5000/api/auth/register

```

  

- Register User with 'Admin' Role

        curl  -X POST \
      'http://localhost:5000/api/auth/register' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "userName": "Demi01",
      "Password": "admin",
      "Role_id" : 3
	  }'
   

  

- Register User with 'Moderator' Role

    curl  -X POST \
      'http://localhost:5000/api/auth/register' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "userName": "Demi01",
      "Password": "admin",
      "Role_id" : 3
    }'
 
- Register User with 'User' Role

    curl  -X POST \
      'http://localhost:5000/api/auth/register' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Content-Type: application/json' \
      --data-raw '{
      "userName": "Demi02",
      "Password": "admin",
      "Role_id" : 3
    }'

  

### Testing user accessibility

- Moderator accessibility test

	**Moderator**
    curl  -X GET \
      'http://localhost:5000/api/users/moderator' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGUiOjMsImlhdCI6MTczMjU0MzA4OX0.bGNnwsccj1FcpoOpEm1-FJMn_Z5CFDWwnIw9gZidVGE'

	**Admin**
	    curl  -X GET \
      'http://localhost:5000/api/users/admin' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGUiOjMsImlhdCI6MTczMjU0MzA4OX0.bGNnwsccj1FcpoOpEm1-FJMn_Z5CFDWwnIw9gZidVGE'

	**User**
	    curl  -X GET \
      'http://localhost:5000/api/users/user' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInJvbGUiOjMsImlhdCI6MTczMjU0MzA4OX0.bGNnwsccj1FcpoOpEm1-FJMn_Z5CFDWwnIw9gZidVGE'

- **Admin accessibility test**

	    curl  -X GET \
      'http://localhost:5000/api/users/Admin' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6MSwiaWF0IjoxNzMyNTQ1MDMwfQ.GSvkvvzpMjPjUcGi4MqISY50DnarKqxU29ubFO7NwiI'

- **User accessibility test** 
	    curl  -X GET \
      'http://localhost:5000/api/users/user' \
      --header 'Accept: */*' \
      --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
      --header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwicm9sZSI6MiwiaWF0IjoxNzMyNTQ0NzM3fQ.BtYfC-T80KaGaFC8K7yRWUXOdyt701_Pw9JAOuBEWvg'