import React from 'react'
import './App.css'
//import FormGroup from 'react-bootstrap/lib/FormGroup'
//import ControlLabel from 'react-bootstrap/lib/ControlLabel'
//import FormControl from 'react-bootstrap/lib/FormControl'
import Form from 'react-bootstrap/Form'

const marked = require('marked');
class App extends React.Component {
  state= {
    markdown: ''
  }

  
  updateMarkdown = function(markdown){
    this.setState({markdown});
  }
  
  render() {
    let {markdown} = this.state;
    return(
      <div className='App container'>
        <div>
          <Form.Group controlId='formControlsTextarea'>
            <Form.Label>Markdoen Input!</Form.Label>
            <Form.Control  
            componentClass='textarea' 
            placeholder='Input Markdown' 
            value={markdown} 
            onChange = {(event)=> this.updateMarkdown(event.target.value)}
            >
            </Form.Control >
          </Form.Group>
        </div>
        <div>
          <h2>Markdown Output!</h2>
          <div>

          </div>
        </div>
      </div>
    );
  }
}
export default App;
