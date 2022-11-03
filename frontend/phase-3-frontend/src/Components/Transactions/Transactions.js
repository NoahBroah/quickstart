import React, { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";

function Transactions({rate, userId, singleUser}) {
  const [transactions, setTransactions] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:4001/transactions`)
  //     .then((resp) => resp.json())
  //     .then(console.log(userId))
  //     .then((data) => setTransactions(data));
  // }, []);
  console.log(singleUser)

  const transactionCards = singleUser.transactions.map((trans) => {
    return <TransactionCard key={trans.id} transactions={trans} rate={rate}/>;
  });

  return <div>{transactionCards}</div>;
}

export default Transactions;
