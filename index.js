const express = require('express');
const bodyPaser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {userEmail} = require('./mongoose/users');
var {userPassword} = require('./mongoose/users');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.newuser('/', (req, res) => {
  var userEmail = new userEmail;
  var userPassword = new userPassword;
  var checkPassword1 = getElementById('new_password');
  var checkPassword2 = (checkPassword1 === userPassword);
  if checkPassword2 = (false) {
    alert('You have enterered an invalid password');
  }
}

app.get('/', (req, res) => {})

const WithMiddleware = applyMiddleware(ReduxPromise)();

ReactDOM.render(
  <Provider WithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  mobile.exports = {app};
