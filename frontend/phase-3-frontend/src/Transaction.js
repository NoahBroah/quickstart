import React from "react";
import './trans.css'

function Transaction({ transactions }) {
  return (
    <div className="card-container">
      {transactions.map((transaction) => {
        return (
          <div className="trans-cards"key={transaction.id}>
            <h1 className="title">{transaction.name}</h1>
            <h2>${transaction.amount}.00</h2>
            <h3>{transaction.category}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Transaction;
