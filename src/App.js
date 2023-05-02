import './App.css';
import {Component} from 'react'  
 import Form from './components/Form.js' 
 import Preview from './components/Preview.js'
 import Model from './components/Model.js'
 import Post from './components/Post';

 import axios from 'axios'

class App extends Component {

  state = {
    showModal: false,
    notes : {
      firstname: "",
      lastname: "",
      phonenum: "",
      role: "",
      message: ""
    },
   data: []
  }

  componentDidMount() {
    axios.get('http://localhost:4000/posts')
    .then(res => this.setState({data: res.data}))
  }

  submitHandler = () => {
    
    axios.post('http://localhost:4000/posts', this.state.notes)
    .then(res => console.log(res))
    .catch(error => console.log(error))

    this.setState({
      showModal: !this.state.showModal,
      notes: {
        firstname: '',
        lastname: '',
        phonenum: '',
        role: '',
        message: ''
      },
    })
    axios.get('http://localhost:4000/posts')
    .then(res => this.setState({data: res.data}))
  }

  modalHandler = (e) => {
    e.preventDefault()

    this.setState({
      showModal: !this.state.showModal
    })
  }

  changeHandler = (e) => {
    this.setState({
      notes: { ...this.state.notes,
      [e.target.name]: e.target.value }
    })
  }

  render () {

  return (
    <>
    <div className="App">

      <Form  handler={this.changeHandler}/> 
      <Preview submit={this.modalHandler} {...this.state.notes}/>
      {this.state.showModal &&
      <Model click={this.modalHandler} {...this.state.notes}
      yesClick = {this.submitHandler} />} 

    </div>
    <Post data = {this.state.data} />
    </>
  );
}
}


export default App;
