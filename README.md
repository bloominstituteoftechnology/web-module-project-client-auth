# Auth Friends

- [Auth Friends](#auth-friends)
  - [Instructions](#instructions)
    - [Task 1: Set Up](#task-1-set-up)
      - [Initialize Project](#initialize-project)
    - [Task 2: MVP](#task-2-mvp)
      - [Project Description](#project-description)
      - [Build the App!](#build-the-app)
    - [Task 3: Stretch Problems](#task-3-stretch-problems)
  - [Submission Format](#submission-format)
  - [Rick Mansfield's Pull req link](#rick-mansfields-pull-req-link)
  - [Class Questions](#class-questions)

Topics:

* React Router
* Protected Routes
* `axios` package
* AJAX
* Promises
* Authentication tokens

## Instructions

### Task 1: Set Up

#### Initialize Project

* Run `npm install` inside the root directory of this project to install dependencies for the API server.
* Run `npm start` to start the API server.
* Run `npx create-react-app friends --use-npm` in a separate terminal window in the root directory of the project to create your starter application.
* If you experience issues with `npx`, you may create your starter application by running `create-react-app friends --use-npm`.
* `cd` into the _friends_ folder and type `npm install axios react-router-dom` which will install the needed dependencies.

### Task 2: MVP

#### Project Description

* There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list. 
* All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error. 
* Take your examples from the guided project and use them to build a more sophisticated application. Have fun!
* Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call.
* Take a look at the endpoints that our API has to offer in `server.js`.

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'lambda', password: 'school' }`
  * **[POST]** * to `/api/logout`: removes a token from active use. Returns the inactive token. 
  * **[GET]** to `/api/friends`: returns the list of friends.
  * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).

#### Build the App!
* Add a route for a login page and build out a simple login form with username and password inputs and a submit button (design this however you would like).
* The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.
* When the request returns, save the token to `localStorage`, then use the history object in your Login component to navigate your user to your FriendsList route
* Create a `<PrivateRoute />` component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.
* Create a protected route for your friends list. Remember, if the user isn't logged in, navigating to this protected route will redirect them to the login page.
* In your FriendsList component, rendered with `<ProtectedRoute />`, you will create a list of your friends that you get from the API.

**Adding New Friends**
* Create a form to collects data for a new friend.
* Make a POST request to add a friend to the database
* Each `friend` item that is in the `friends` array should have the following format:

```js
{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}
```

* If you'd like, you can create multiple "view" components for your routes. You could have a component who's sole purpose is to render the login form; one for a form for updating a user; another component who's sole purpose is for creating users; and then another component who's sole purpose is to delete a user.
* It really is up to you how you build this project. I suggest writing down the flow you want to follow, and then writing down each individual piece you need for each step in the flow so that this process doesn't feel as overwhelming.

### Task 3: Stretch Problems
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.

## Submission Format
* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**

## Rick Mansfield's Pull req link
- [Link for convenience](https://github.com/LambdaSchool/web-module-project-client-auth/pull/60)
  
## Class Questions
1. What is authentication 
   1. - Authenticaion (belongs) Security measures for verifying a user is the intended authentic client to proceed to other protected paths of the app. i.e. a process for making sure the identy of the user is "authentic." Authorized(permissions) FYI this is not the same as authorization where multiple folks might have "levels" of access.
   2. 
- ![process of authentication](assets\Capture1.JPG)