import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';

import HeaderStub from '../common/HeaderStub';
import FooterStub from '../common/FooterStub';

export default class App extends Component (
  render() {
    return (
      <div>
        <HeaderStub />

        <FooterStub />
    )
  }
)
