import React from 'react'
import './App.css'
//import FormGroup from 'react-bootstrap/lib/FormGroup'
//import ControlLabel from 'react-bootstrap/lib/ControlLabel'
//import FormControl from 'react-bootstrap/lib/FormControl'
import Form from 'react-bootstrap/Form'

let marked = require('marked');
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
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Markdoen Input!</Form.Label>
            <Form.Control  
            componentclass='textarea'
            placeholder='input Markdown'
            as="textarea" 
            rows="10" 
            value={markdown} 
            onChange = {(event)=> this.updateMarkdown(event.target.value)}
            
            >
            </Form.Control >
          </Form.Group>
        </div>
        <div>
          <h2>Markdown Output!</h2>
          <div dangerouslySetInnerHTML={{__html: marked(markdown) }}>
            
          </div>
        </div>
      </div>
    );
  }
}
export default App;
