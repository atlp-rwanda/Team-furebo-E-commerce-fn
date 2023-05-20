# Team Furebo E-commerce Project | Front-End

Team Furebo E-commerce is an E-commerce project worked on by trainees of Andela Technical Leadership Program Cohort 27, team Furebo.

## Badges

[![Maintainability](https://api.codeclimate.com/v1/badges/d28dc21ea03126f7cda7/maintainability)](https://codeclimate.com/github/atlp-rwanda/Team-furebo-E-commerce-fn/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d28dc21ea03126f7cda7/test_coverage)](https://codeclimate.com/github/atlp-rwanda/Team-furebo-E-commerce-fn/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/atlp-rwanda/Team-furebo-E-commerce-fn/badge.svg?branch=ch-setup-github-actions-to-run-test-%23185172176)](https://coveralls.io/github/atlp-rwanda/Team-furebo-E-commerce-fn?branch=ch-setup-github-actions-to-run-test-%23185172176)


## Description

This project is the front-end part of the E-commerce project introduced above.

The app has three types of users; a buyer, a seller and an admin, and it has the following functionalities:

- User
  - Sign up
  - Log in
- Products
  - Create a new product
  - Update an existing product
  - Delete an existing product
- Cart
  - Add items to cart
  - Update shopping cart
- Check out
- Payment
- Track order status
- Notifications
- Public chat

An admin can manage all users ; changing roles and making a user as active or inactive.

A seller should see all products that belong to him/her and can make a product as either available or not available.

A buyer should be able to see all available products on the homepage add items to their cart, and track his/her orders.

## Key Technologies

- React JS
- Redux

## Installation

- Clone the repository and install

```bash
  git clone [https://github.com/atlp-rwanda/Team-furebo-E-commerce-fn.git]
```

- Go to folder and install dependencies

```bash
    cd Team-furebo-E-commerce-fn
    npm install
```

## Testing and Starting the server

### Testing

```bash
 npm run test
```

### Starting

```bash
 npm run start
```

## Environment Variables

Fill in your environment variables as you will find in `.env.example`

## Dependencies

Main dependencies used in the project are:

```bash
    "@babel/core": "^7.21.8",
    "@babel/preset-env": "^7.21.5",
    "@babel/preset-react": "^7.18.6",
    "babel-loader": "^9.1.2",
    "html-webpack-plugin": "^5.5.1",
    "webpack": "^5.82.1",
    "webpack-cli": "^5.1.1",
    "webpack-dev-server": "^4.15.0"
```

### Test setup and execution

Unit testing on this app is setup using the following dependencies

```bash
 "jest": ""
```

## Link to Back-end repository

- [Team Furebo E-commerce back-end](https://github.com/atlp-rwanda/Team-furebo-E-commerce-bn.git)

## Deployed Front-end

- [Team Furebo E-commerce](https://fascinating-piroshki-10faa1.netlify.app/)
