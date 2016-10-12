Text-To-Speech Application
==========================

An application for people who don't like to read and would prefer the text to be read to them. Simple to use, just **copy-and-paste** the text you want to be read, and sit back and relax.

Running Locally
---------------
```sh
# Install the dependencies
$ npm install

# Run the app locally
$ npm start
or
$ heroku local web

# NOTE: Your app should now be running on [http://localhost:5000](http://localhost:5000/)
```

Deploying to Heroku
-------------------
```sh
$ heroku login
$ heroku create
$ git push heroku master
$ heroku open
```

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

#### NOTES
For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
