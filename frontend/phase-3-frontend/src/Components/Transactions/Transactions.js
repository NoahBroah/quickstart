import React, { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";

function Transactions({rate}) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/transactions")
      .then((resp) => resp.json())
      .then((data) => setTransactions(data));
  }, []);

  const transactionCards = transactions.map((trans) => {
    return <TransactionCard key={trans.id} transactions={trans} rate={rate}/>;
  });

  return <div>{transactionCards}</div>;
}

export default Transactions;
