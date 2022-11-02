import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2'

function UserCard({ userId }) {
    const [singleUser, setSingleUser] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:4001/users/${userId}`)
        .then(resp => resp.json())
        .then(user => setSingleUser(user))
    },[userId])


    if (!singleUser) return <h2>Loading User data...</h2>


    const state = {
        labels: ['Food', 'Entertainment', 'Travel',
                 'Utilities', 'Retail'],
        datasets: [
          {
            label: 'Time is Money',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [, 59, 80, 81, 56]
          }
        ]
      }

  return (
    <div>
          <Bar
            data={state}
            options={{
              title:{
                display:true,
                text:'Total Working hours spent per category',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
  )
}

export default UserCard




{/* <div>
<h1>{singleUser.username}</h1>
<h3>{singleUser.transactions.map((transaction) => (
    <div>
        <h5>Username: {transaction.name}</h5>
        <h5>Amount: ${transaction.amount}.00</h5>
        <h5>Category: {transaction.category}</h5>
    </div>
))}</h3>
</div> */}