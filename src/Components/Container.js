import React, { Component } from 'react'
import Details from './Details';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase';
import Output from './Output';
const firebaseConfig = {
  apiKey: "AIzaSyCXBJnAKQvzLB8R1yko3E2jI_TMQ50mnwc",
  authDomain: "fir-305ea.firebaseapp.com",
  projectId: "fir-305ea",
  storageBucket: "fir-305ea.appspot.com",
  messagingSenderId: "438814858508",
  appId: "1:438814858508:web:c5d5aa3c81e62c568cfd29"
};
firebase.initializeApp(firebaseConfig);

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
       id : 0,
       email : null,
       username : null,
       password : null,
       check : false
    }
  }
  

  submitHandler = (e) => {
    e.preventDefault();
    const id = this.state.id+1;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    this.setState({
     id,email,username,password,check:true
    },() => {
      const database = firebase.database();
    database.ref("demo/"+this.state.id)
    .set({
      email:this.state.email,
      username:this.state.username,
      password:this.state.password
    },()=>{
      console.log(this.state.id,this.state.email);
    });
    })
    

  };

  checkHandler = (e) => {
    e.preventDefault(); 
    this.setState({
      check:!this.state.check
    })
  }

  render() {
    return (
      <div>
        {!this.state.check ? <Details submit={this.submitHandler}/> : <Output username={this.state.id} check={this.checkHandler}/>}
          
          
      </div>
    )
  }
}
