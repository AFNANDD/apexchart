import React from 'react'
import ApexChart from 'react-apexcharts'
import { useState, useEffect } from 'react';
import data2 from '../Data/data2.json'

function Page2() {
    const [chartData, setChartData] = useState({ series: [], options: {} });

    // useEffect(() => {
    //   fetch('data_page2.json')
    //     .then(response => response.json())
    //     .then(data => setChartData(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);
    useEffect(() => {
        setChartData(data2);
      }, []);
  
    return (
      <div className="page">
        <ApexChart className="chart" options={chartData.options} series={chartData.series} type="bar" style={{ width: '90%' , height: '80%' }} />
      </div>
    );
  }

export default Page2
