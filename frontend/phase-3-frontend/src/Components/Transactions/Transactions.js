import React, { useEffect, useState } from 'react'
import TransactionCard from './TransactionCard'


function Transactions() {
    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        fetch('http://localhost:4001/transactions')
        .then(resp => resp.json())
        .then(data => setTransactions(data))
    },[])

    const transactionCards= transactions.map((trans) => {
        return <TransactionCard key={trans.id} transactions={trans} />
    })

  return (
    <div>
        Use this form to import your transactions
        {transactionCards}
    </div>

  )
}

export default Transactions