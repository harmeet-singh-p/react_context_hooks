import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

function Balance() {
    const {transactions} = useContext(GlobalContext);
    const amountList = transactions.map(trans => trans.amount);
    const totAmount = amountList.reduce((acc,item) => (acc += item),0 ).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${totAmount}</h1>
        </>
    )
}

export default Balance
