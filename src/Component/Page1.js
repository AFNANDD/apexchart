import React from 'react'
import ApexChart from 'react-apexcharts'
import { useState, useEffect } from 'react';
import data1 from '../Data/data1.json'

function Page1() {
    const [chartData, setChartData] = useState({ series: [], options: {} });

    // useEffect(() => {
    //   fetch(process.env.PUBLIC_URL + '/Data/data1.json')
    //     .then(response => response.json())
    //     .then(data => setChartData(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);
    useEffect(() => {
        setChartData(data1);
      }, []);
  
    return (
      <div className="page">
        <ApexChart className="chart" options={chartData.options} series={chartData.series} type="line"  style={{ width: '90%' , height: '80%' }} />
      </div>
    );
  }

export default Page1
