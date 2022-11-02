import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";
import Transactions from "../Transactions/Transactions";

function UserCard({ userId, rate }) {
  const [singleUser, setSingleUser] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4001/users/${userId}`)
      .then((resp) => resp.json())
      .then((user) => setSingleUser(user));
  }, [userId]);

  if (!singleUser) return <h2>Loading User data...</h2>;

  return (
    <div>
      <Transactions rate={rate}/>
    </div>
  );
}

export default UserCard;

