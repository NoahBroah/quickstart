import React, { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";

function Transactions({rate, userId, singleUser}) {

 

  const transactionCards = singleUser.transactions.map((trans) => {
    return <TransactionCard key={trans.id} trans={trans} rate={rate} />;
  });

  return <div>{transactionCards}</div>;
}

export default Transactions;
