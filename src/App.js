import './App.css';
import {Component} from 'react'  
 import Form from './components/Form.js' 
 import Preview from './components/Preview.js'
 import Model from './components/Model.js' 

class App extends Component {

  state = {
    showModal: false
  }

  modalHandler = (e) => {
    e.preventDefault()

    this.setState({
      showModal: !this.state.showModal
    })
  }

  render () {

  return (

    <div className="App">

      <Form click={this.modalHandler}/> 
     <Preview />
    {this.state.showModal && <Model/>} 
    
    

    </div>
  );
}
}


export default App;
