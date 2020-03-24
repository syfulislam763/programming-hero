import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);


function App() {

  const [user, setUser] = useState({
    isSigned:false, 
    name: '',
    email: '',
    photo: ''
  })

  const switchForm = (e) => {
    const createdUser = {...user}
    createdUser.existingUser = e.target.checked;
    setUser(createdUser);
  }

  var provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const {displayName, email, photoURL} = result.user
      const signedUser = {
        isSigned: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signedUser);
     // console.log(displayName, email, photoURL);
    })
    .catch(error => {
      //console.log(error);
      //console.log(error.message);
    })
  }
  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
      const signOut = {
        isSigned: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        isValid: '',
        error: '',
        existingUser: false
      }
      setUser(signOut);
    })
    .catch(err => {
      
    })
  }

  const isEmailValid = email => /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(email);
  const isNumberValid = pass => /\d/.test(pass);

  const inputChanges = e => {
    const userInfo = {
      ...user
    };
    let isValid = true;
    if(e.target.name === 'email'){
      isValid = isEmailValid(e.target.value);
    }
    if(e.target.name === 'password'){
      isValid = e.target.value.length > 8 && isNumberValid(e.target.value);
    }
    userInfo[e.target.name] = e.target.value;
    userInfo.isValid = isValid;
    setUser(userInfo);
  }

  const createAccount = (e) => {
   if(user.isValid){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      console.log(res);
      const createdUser = {...user}
      createdUser.isSigned = true;
      setUser(createdUser);
    })
    .catch(err => {
      console.log(err.message);
      const createdUser = {...user}
      createdUser.isSigned = false;
      createdUser.error = err.message;
      setUser(createdUser);
    })
   }else{
     console.log("form is not valid")
   }
   e.preventDefault();
  }


  const loginAccount = (e) => {
    if(user.isValid){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res);
        const createdUser = {...user}
        createdUser.isSigned = true;
        setUser(createdUser);
      })
      .catch(err => {
        console.log(err.message);
        const createdUser = {...user}
        createdUser.isSigned = false;
        createdUser.error = err.message;
        setUser(createdUser);
      })
     }

    e.preventDefault();
    e.target.reset();
  }


  return (
    <div className="App">
      {user.isSigned
        ? <button onClick={handleSignOut}>Sign Out</button>
        : <button onClick={handleSignIn}>Sign in</button>
      }
      {
        user.isSigned && <div>
          <p>welcome, {user.name}</p>
          <img style={{height:'100px',width:'100px'}} src={user.photo} alt=""/>
        </div>
      }
      <h1>password authentication</h1>
        <input type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
          <label htmlFor="switchForm">Returning User</label>
        <form style={{display:user.existingUser ? 'block' : 'none'}} onSubmit={loginAccount}>
          <input onBlur={inputChanges} type ="text" name="email" placeholder="Your Email" required="1"/>
          <br/>
          <input onBlur={inputChanges} type="password" name="password" placeholder="Your Password" required="1"/>
          <br/>
          <input type="submit" value="Login"/>
          <br/>
        </form>

        <form style={{display:user.existingUser ? 'none' : 'block'}} onSubmit={createAccount}>
          <input onBlur={inputChanges} type ="text" name="name" placeholder="Your Name" required="1"/>
          <br/>
          <input onBlur={inputChanges} type ="text" name="email" placeholder="Your Email" required="1"/>
          <br/>
          <input onBlur={inputChanges} type="password" name="password" placeholder="Your Password" required="1"/>
          <br/>
          <input type="submit" value="Create Account"/>
          <br/>
        </form>
      {
        user.error && <p style={{color:'red'}}>{user.error}</p>
      }
    </div>
  );
}

export default App;
