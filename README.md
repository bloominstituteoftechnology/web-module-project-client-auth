# Auth Friends

Topics:

* React Router
* Protected Routes
* `axios` package
* AJAX
* Promises
* Authentication tokens

![preview](project-preview.gif)

## Notes
* 🎥[GP](https://youtu.be/FHXLYqkItTw)
* 🎥[MP](https://www.loom.com/share/c669f5e7831741aaac192d50830735c0)

### Key Concepts
* [Authentication](https://www.youtube.com/watch?v=woNZJMSNbuo) - The process for identifying user identity.
* [Authorization](https://www.youtube.com/watch?v=I0poT4UxFxE) - The process for identifying user permissions.
* [http headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) - Additional data added to http requests for interperation within your backend code

### Key Terminology
* [...rest](https://medium.com/wesionary-team/spread-and-rest-operator-in-javascript-db3f15cec185) - A means to capture the remaining values within a javascript array or object easily.
* [Redirect Route](https://medium.com/@alexfarmer/redirects-in-react-router-dom-46198938eedc) - A redirect method used through react-router.
* [this.history redirect](https://www.codesd.com/item/react-this-props-history-push-does-not-redirect.html) - A redirect method used through Route props.
* [window.location redirect](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) - A redirect method used through the windows location object.
* [Route](https://reactrouter.com/web/api/Route) - A react router component that allows programmers to connect a component to a url path
* [axios.create](https://masteringjs.io/tutorials/axios/create) - A means to create a stub of an axios call with preset values attached
* [jwt tokens](https://dzone.com/articles/what-is-jwt-token) - The current web standard for encrypted authentication tokens

### Example flow
* LOGIN ⚙ user/pass sent login request ➡ server search db for user/pass ➡ if found, generate/store/return token ➡ receive/store token
* REQUEST ⚙ user sends request body/token ➡ server searches for active token ➡ if found, process/return request ➡ client receives/processes req
* LOGOUT ⚙ user del local token, sends token to server ➡ server deletes token

### handle authentication with tokens in a React app
Modern web services dealing with JSON data often use Jason Web Tokens (JWT)s - strings stored on client-side using local or session storage

* Server tells client it issued token, reads token, makes decisions for data transfer w client's permission
* Example: login endpoint, takes payload `username` and `password`. If the credentials are known, the server responds with a fresh JWT. From then on, it's the application's responsibility to add an `Authorization: <token>` header to every request, to be allowed access to protected resources that require authentication.

```js
import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token,
        },
    });
};
```



* Whenever the application needs to exchange data with a protected endpoint, it imports this module, instead of `import axios from "axios";` 
* Alternative: `Authorization: Bearer ${token},`
* Save token to local storage so `axiosWithAuth` can grab it for other calls that require Auth header

```js
const login = () => {
  axios.post('endpoint/here', userCredentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/dashboard');
    }
}
```

AJAX request to endpoint using `axiosWithAuth`:

```js
import { axiosWithAuth } from '../../path/to/axiosAuth.js';
// etc
axiosWithAuth()
  .get('endpoint/path/here')
  .then(data => /* do something with the data */);
```

### implement protected routes using an authentication token and Redirect
"Protected" routes - routes that should only render with authentication.

```js
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
    </div>
  );
}
```

Anyone can click on the "Public Page" link, but if they click on the "Protected Page" link without authorization, they will be routed to the login page instead. Add a route:

```js
<Route path="/public" component={Public}/>
<Route path="/login" component={Login}/>
<PrivateRoute path='/protected' component={Protected} />
```

Build it out:

```js
// Requirement 1.
// It has the same API as `<Route />`
const PrivateRoute = ({ component: Component, ...rest }) => (
    // Requirement 2.
    // It renders a `<Route />` and passes all the props through to it.
  <Route
    {...rest}
    render={
        // Requirement 3.
        // It checks if the user is authenticated
        props =>
      localStorage.getItem("token") ? (
        // If they are, it renders the "component" prop.
        <Component {...props} />
      ) : (
        // If not, it redirects the user to /login.
        <Redirect to="/login" />
      )
    }
  />
);
```

A login page takes in a user's credentials, calls login endpoint with POST req, then redirects user to protected route when login API call returns.

```js
import React, { useState } from 'react';
import { axiosWithAuth } from '../path/to/module';

const Login = (props) => {
 const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('login/endpoint', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
  }

  const handleChange = e => {
      setCredentials: {
        ...credentials,
        [e.target.name]: e.target.value,
      }
  }

    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;
```

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

  * **[POST]** * to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
  * **[GET]** to `/api/friends`: returns the list of friends.
  * **[GET]** to `/api/friends/123`: returns the friend with the id passed as part of the URL (123 in example).
  * **[POST]** to `/api/friends`: creates a friend and return the new list of friends. Pass the friend as the `body` of the request (the second argument passed to `axios.post`).
  * **[PUT]** to `/api/friends/:id`: updates the friend using the `id` passed as part of the URL. Send the an object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
  * **[DELETE]** to `/api/friends/123`: removes the friend using the `id` passed as part of the URL (123 in example).


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

* In the requirements for this project, we implemented a login POST operation, a GET operation, and a "add friend" POST operation. Add two more functions, one for making a PUT request, and the other for making a DELETE request.
* Style the friends list and the input field and make everything look nice.
* Expand the number of properties that you put on each friend object. Feel free to remove the dummy data on the server or modify it in any way.

## Submission Format
* [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's  Repo). **Please don't merge your own pull request**
