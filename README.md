# DevJungle

## Project MERN - MongoDB, Express, React - Redux, Node / Fullstack ;-)

## To see this application online: https://devjungle.herokuapp.com/

This application is a small social network for developers.
It is a fullstack project created with MongoDB, Express, React, Redux and Node.

After signing up, the user can access to his dashboard to create his developer's profile.
He can create his own handle, add his position, company, website, location, github profile, a bio and also his social network links (twitter, facebook, linkedin, youtube, instagram).
Also there is an experience section where the developer can add any jobs or positions that he has occupied in the past or is currently occupying (company, job title, location, date from, date to or current, job description).
On the same pattern, there is also an education section to add any schools, bootcamps, etc that he has attended.

Every developer can access a post feed section where he can create a post and keep in touch with other developers.
He can comment every post and even like or unlike a post.

The last section of the application is public and allows the visitor to see the list of every developers who have signed up with some basic information about them. The visitor can click on view profile to know more about him and see all the information of his profile.

Of course you will find my profile here: https://devjungle.herokuapp.com/profile/cogito

### To run the project :

```
> npm install
> npm run dev
```

### The project step by step

> Back End

#### Basic express set up

- Set up server with Express
- MongoDB set up with Mlab
- Connecting MongoDB with mongoose
- Set up API routes files

#### User API route and JWT Authentication

- Creating the user model
- Set up route for registration and login (bcrypt, JWT, Passport)
- Validation handlers (validator)
- Test with Postman

#### Profile API routes

- Creating the profile model
- Routes for current profile, create update delete profile
- Routes for education and experience
- Validation handlers (validator)
- Test with Postman

#### Post API routes

- Creating the post model
- Routes for post: create post, get and delete post
- Routes for like and unlike
- Routes for comment: create and delete
- Validation handlers (validator)
- Test with Postman

> Front End

#### Start with react and basic layout

- Implementing React (create-react-app)
- Bootstrap & FontAwesome
- Basic layout of navbar, landing and footer

#### React router, Redux and Authentification

- Set up React router (v4)
- Set up Redux store
- Create register and login component
- Create reducers and actions for Authentification (authReducer and errorReducer)

#### User dashboard and profile

- Create component dashboard with a private route
- Create component profile, reducer and actions
- Create components for experience and education
- Create actions for experience and education
- Display profile, experience and education on dashboard

#### Developpers profiles display

- Create Profiles component and action to list all devs
- Create ProfileItem to display each dev profile
- Create Profile page for each dev
- Create sub component of page profile (about, bio, ...)
- Create actions

#### Posts and comments

- Create reducer and actions for posts
- Create component and form component for post

#### Deployment

- Securing keys
- Deploy on heroku
