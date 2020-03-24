import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
export default App;

function App() {
    return ( 
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Bangladesh</p>
                
                <Counter></Counter>
                <Users></Users>
                
            </header>
        </div>
    );
}

function Counter(){
    const [count, setCount] = useState(7);
    const Increase = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const Decrease = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button style={{marginRight:'5px'}} onClick ={Decrease}>-</button>
            <button onClick={Increase}>+</button>
        </div>
    )
}

function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h1>Users Number : {users.length}</h1>
            <ul>
                {
                    users.map(user => <li>{user.username}</li>)
                }
            </ul>
        </div>
    );
}
