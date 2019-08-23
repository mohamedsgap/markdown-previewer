import React from 'react';
import './App.css';

// GLOBAL VARS
const buttonTypes = {
  'fa fa-bold': '**',
  'fa fa-italic': '_',
  'fa fa-quote-left': '> ',
  'fa fa-link': '[Link]',
  'fa fa-picture-o': '![Alt Text]',
  'fa fa-list-ol': '1. ',
  'fa fa-list': '- ',
  'fa fa-code': '`' };

const buttonStyles = {
  'fa fa-bold': 'Strong Text',
  'fa fa-italic': 'Emphasized Text',
  'fa fa-quote-left': 'Block Quote',
  'fa fa-link': '(http://)',
  'fa fa-picture-o': '(http://)',
  'fa fa-list-ol': 'List Item',
  'fa fa-list': 'List Item',
  'fa fa-code': 'Inline Code' };



class App extends React.Component {
  render() {
    return(
      <div>Markdown Previewer</div>
    );
  }
}
export default App;
