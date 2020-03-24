import React from 'react';
import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
export default App;

function App() {
    const name=["sagor", "shumi", "shawon", "saiful", "sabbir"]
    const products=[
        {name:'laptop', brand:'php', price:  '$200.46'},
        {name:'car', brand:'audi', price: '$300.88'},
        {name:'phone', brand:'walton', price: '$100.44'},
        {name:'byke', brand:'phezar', price:'$400'}
    ];
    const data ={name:"Mohamed Khan", company:"samsung", country:"pakistan"}
    return ( 
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Bangladesh</p>
                <ul>
                    {
                        name.map(s => <li>{s}</li>)
                    }
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                    <li>{name[0]}</li>
                    <li>{name[1]}</li>
                    <li>{name[2]}</li>
                    <li>{name[3]}</li>
                </ul>
                {
                    products.map(product => <Product product={product}></Product>)
                }
                <Product product={products[0]}></Product>
                <Product product={products[1]}></Product>
                <Product product={products[2]}></Product>
                
                
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

