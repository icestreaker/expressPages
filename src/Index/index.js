import React from 'react';
import ReactDom from 'react-dom';
import Bootstrap from 'bootstrap';

import HeaderStub from '../common/HeaderStub';
import FooterStub from '../common/FooterStub';
import aboutProject from '/components/aboutProject';
import addPerson from '/components/addPerson'

export default class App extends Component (
  render() {
    return (
      <div>
        <HeaderStub />
        <groupInfo />
        <addPerson />
        <FooterStub />
      </div>
    )
  }
)
