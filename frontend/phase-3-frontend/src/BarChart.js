import React from 'react'
import { Bar } from 'react-chartjs-2'
import Chart from 'chart.js/auto';

function BarChart() {
  const state = {
    labels: ['Food', 'Entertainment', 'Travel',
             'Utilities', 'Retail'],
    datasets: [
      {
        label: 'Time is Money',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
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
      );
          }

export default BarChart