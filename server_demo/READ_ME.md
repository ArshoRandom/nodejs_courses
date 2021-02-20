create .env and set property
USER_DATA_PATH=<path to JSON file where can be saved user data>
PORT=<port number>

                                      ENDPOINTS

/users - get all users {HTTP-GET}
*************************
/user/add - add new user {HTTP-POST}
format example
{       
"id":411,
"name": "Andranik",
"surname": "Vanoyan",
"email": "vanoyan@mail.ru",
"password":"pass12345"
}
*************************
/user?name=<name> - search by name {HTTP-GET}
*************************
/user/<id> - get by id {HTTP-GET}
*************************
/user?search=<search_chunk> - search by name and surname partial matching {HTTP-GET}
*************************
/user/delete/<id> - delete user by id {HTTP-DELETE}
*************************
/user/update - update user by id {HTTP-PUT}
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

