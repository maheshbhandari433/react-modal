import './App.css';
import {Component} from 'react'  
 import Form from './components/Form.js' 
 import Preview from './components/Preview.js'
 import Model from './components/Model.js' 

class App extends Component {

  state = {
    showModal: false,
    firstname: "",
    lastname: "",
    phonenum: "",
    role: "",
    message: ""
  }

  modalHandler = (e) => {
    e.preventDefault()

    this.setState({
      showModal: !this.state.showModal
    })
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {

  return (

    <div className="App">

      <Form  handler={this.changeHandler}/> 
      <Preview submit={this.modalHandler} {...this.state}/>
      {this.state.showModal && <Model click={this.modalHandler} {...this.state} />} 

    </div>
  );
}
}


export default App;
