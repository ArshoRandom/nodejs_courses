create .env and set property
USER_DATA_PATH=<path to JSON file where can be saved user data>
PORT=<port number>

                                      ENDPOINTS

/api/v1/users - get all users {HTTP-GET}
*************************
/api/v1/users/add - add new user {HTTP-POST}
format example
{       
"id":411,
"name": "Andranik",
"surname": "Vanoyan",
"email": "vanoyan@mail.ru",
"password":"pass12345"
}
*************************
/api/v1/users?name=<name> - search by name {HTTP-GET}
*************************
/api/v1/users/<id> - get by id {HTTP-GET}
*************************
/api/v1/users?search=<search_chunk> - search by name and surname partial matching {HTTP-GET}
*************************
/api/v1/users/delete/<id> - delete user by id {HTTP-DELETE}
*************************
/api/v1/users/update - update user by id {HTTP-PUT}
updated data format
{       
"id":411,
"name": "Andranik",
"surname": "Vanoyan",
"email": "vanoyan@mail.ru",
"password":"pass12345"
}
*************************
/ - welcome page {HTTP-GET}

