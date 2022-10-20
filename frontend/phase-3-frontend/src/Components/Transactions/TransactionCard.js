import React from 'react'

function TransactionCard({ transactions }) {
    const {name, amount, date, category, user_id} = transactions
  return (
    <div>
        <h1>{name}</h1>
        <h2>${amount}.00</h2>
        <h3>{date}</h3>
        <h4>{category}</h4>
    </div>
  )
}

export default TransactionCard