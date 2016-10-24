# Feathers Starter Kit

## About

This project build on [Feathers](http://feathersjs.com). An open source web  framework for building modern real-time applications.
It extending [default generator](https://github.com/feathersjs/generator-feathers) with following features:

- ES6 to ES5 transpiling with webpack
- Facebook login
- Run server with `forever`
- Replace `jshist` with `eslint`
- Replace `mocha` with `ava`
- Add docker support
- Show server status on the root page
- Rename _id to id in response
- Error handler returns JSON not HTML
- Add hook for nested services

Sorry for bad English :)

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies
    
    ```
    cd path/to/share-debt; npm install
    ```

3. Start your app
    
    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
