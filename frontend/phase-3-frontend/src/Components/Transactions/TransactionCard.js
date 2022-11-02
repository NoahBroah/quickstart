import React from 'react'

function TransactionCard({ transactions, rate }) {
    const { name, amount, category } = transactions
  return (
    <div>
        <div>
          <h5>Name: {name}</h5>
          <p>Amount in Hours: {(amount / rate).toFixed(2)} Hours</p>
          <p>Amount: ${amount}.00</p>
          <p>Category: {category}</p>
          </div>
    </div>
  )
}

export default TransactionCard