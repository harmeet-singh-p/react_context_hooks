import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

function IncomeExpenses() {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(trans => trans.amount);

  const totIncome = amounts.filter(trans => trans > 0).reduce( (acc,item) => (acc = acc + item),0)
  .toFixed(2);
 
  const totExp = amounts.filter(amt => amt < 0).reduce((acc,item) => (acc += item),0 )
  .toFixed(2);


    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${totIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(totExp)}</p>
        </div>
      </div>
    )
}

export default IncomeExpenses
