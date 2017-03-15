const express = require('express');
const bodyPaser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {userEmail, userPassword} = require('./mongoose/users');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.newuser('/', (req, res) => {
  var userEmail = new userEmail;
  userEmail = index.userEmail;
  var checkPassword1 = getElementById('password1');
  userPassword = index.userPassword;
  var checkPassword2 = new password;
  if (checkPassword1 === checkPassword2) {
// email verification will come later
    alert('Congratulations you have created a new account');
  } else {
    alert('Sorry there is a problem with creating your account, please try again with another email address, plus be sure to closely verify your password');
  }
}

app.get('/', (req, res) => {})

const WithMiddleware = applyMiddleware(ReduxPromise)();

ReactDOM.render(
  <Provider WithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

  mobile.exports = {App};
