import React from 'react';
import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
export default App;

function App() {
    const products=[
        {name:'laptop', brand:'php', price:  '$200.46'},
        {name:'car', brand:'audi', price: '$300.88'},
        {name:'phone', brand:'walton', price: '$100.44'}
    ];
    const data ={name:"Mohamed Khan", company:"samsung", country:"pakistan"}
    return ( 
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Bangladesh</p>

                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>

                <Person name={data.name} company={data.company} country={data.country}></Person>
                <Person name="Mahim Khan" company="walton" country="india"></Person>
                <Person name="Syful Islam" company="simphony" country="bangladesh"></Person>
            </header>
        </div>
    );
}

function Product(props){
const productStyle={
    border:'1px solid #ddd',
    borderRedius:'5px',
    backgroundColor:'lightgray',
    boxShadow:'2px 2px 15px lightblue',
    padding:'20px',
    margin:'20px',
    float:'left',
    width:'30%',
    color:'black'
}
const {name, brand, price} = props.product;
    return (
        <div style={productStyle}>
            <h3>{name}</h3>
            <h5>{brand}</h5>
            <h3>{price}</h3>
            <button>By Now</button>
        </div>
    );
}

function Person(props){
    const personStyle={
        border:'2px solid goldenrod',
        padding:'20px',
        margin:'20px',
        backgroundColor:'white',
        color:'lightsalmon',
        width:'80%'
    }
    return(
        <div style={personStyle}>
            <h1>{props.name}</h1>
            <h3>{props.company}</h3>
            <p>Mohamed is from {props.country}</p>
        </div>
    );
}