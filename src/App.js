import React from 'react'
import './App.css'
//import FormGroup from 'react-bootstrap/lib/FormGroup'
//import ControlLabel from 'react-bootstrap/lib/ControlLabel'
//import FormControl from 'react-bootstrap/lib/FormControl'
import Form from 'react-bootstrap/Form'

const marked = require('marked');
class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <Form.Group controlId='formControlsTextarea'>
          <Form.Label>Markdoen Input!</Form.Label>
          <Form.Control  componentClass='textarea' placeholder='Input Markdown'>
          </Form.Control >
        </Form.Group>


      </div>
    );
  }
}
export default App;
