import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

function AddTransaction() {

const [text, setText] = useState();
const [amount, setAmount] = useState(0);

const {addTransaction} = useContext(GlobalContext);

const formSubmit = e => {
    e.preventDefault();
add();
}

function add() 
{
    addTransaction({
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
    });

    setText('');
    setAmount(0);
}

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={formSubmit}>
            <div className="form-control">
            <label >Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label 
                >Amount <br />
                (negative - expense, positive - income)</label
            >
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
            </div>
            <button type="submit" className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction
