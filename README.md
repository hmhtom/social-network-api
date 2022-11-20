# Social Network Api

## Description

- This is an express server apis for social media networks. It allows users to interact with each other by sharing thoughts, comment on thoughts and adding friends.

- Project is developed with ExpressJS and MongoDB

## Installation

1. Clone the repository with following command in your BASH:
   `$ git clone https://github.com/hmhtom/social-network-api`

2. `cd` into the directory and use `npm install` to install all the dependencies.

3. Create a `.env` file and add a variable name `MONGODB_URI` with your mongodb database uri. For example if your mongodb has default port and the name of the database is social_mediaDB, then the URI would be `mongodb://127.0.0.1:27017/social_mediaDB`

4. Use `npm start` to start the server or `npm dev` to run the dev server.

5. Server will be running and you can start using the APIs.

## API

| API                                    | METHOD | Description                                   |
| -------------------------------------- | ------ | --------------------------------------------- |
| `/api/users`                           | GET    | Get all users                                 |
|                                        | POST   | Post new user                                 |
| `/api/users/:userId`                   | GET    | Get one user                                  |
|                                        | PUT    | Update one user                               |
|                                        | DELETE | Delete user                                   |
| `api/users/:userId/friends/:friendsId` | POST   | Add a user to another user's friend list      |
|                                        | DELETE | Delete a user from another user's friend list |
| `/api/thoughts`                        | GET    | Get all thoughts                              |
|                                        | POST   | Post a new thought                            |
| `/api/thoughts/:thoughtId`             | GET    | Get one thought                               |
|                                        | PUT    | Update one thought                            |
|                                        | DELET  | Delete a thought                              |
| `/api/thoughts/:thoughtId/reactions`   | POST   | Post a new reaction to a thought              |

## DEMO

[Click to view the demo video](https://drive.google.com/file/d/12a078brczwR7ZMWYNweyWwf6JwV3tcp5/view)

## Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License ![MIT](https://img.shields.io/github/license/hmhtom/social-network-api?style=plastic)

Copyright (c) 2022 hmhtom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
