import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';

class addUser extends React.Component {
  render () {
    <div>

        <div class="row">
        <div class="col-sm-12 col-md-4">

        <div class="col-sm-12 col-md-4">
        <div class="form-group"><div class="form-align"><div class="addUser">
          <label for="user_email">Please enter your email:</label>
          <input type="text" class="form-control" id="email" tag="newUser">
        </div></div>
        <div class="form-group"><div class="form-align">
          <label for="user_password">Please type a password:</label>
          <input type="text" class="form-control" id="password1" tag="newUser">
        </div></div>
        <div class="form-group"><div class="form-align">
          <label for="verify_password">Please re-type your password:</label>
          <input type="text" class="form-control" id="password2" tag="newUser">
        </div></div>
        <div class="form-group">
          <label for="btn">Please click to add your account</label>
            <button class="btn btn-default" type="button" class="form-control"
              onchange={setProps.newUser}>Submit</button>
        </div></div></div>

        <div class="col-sm-12 col-md-4"></div>
        </div>

      </div>
  }
}
