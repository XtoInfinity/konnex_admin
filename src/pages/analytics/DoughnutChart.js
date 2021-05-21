import React from 'react';
import { Doughnut } from 'react-chartjs-2';



const DoughnutChart = (props) => {
    const { labels, dataArray } = props;
    const data = {
        labels, // List
        datasets: [
            {
                label: 'Screen',
                data: dataArray, // List
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            },
        ],
    };
    return (
        <>
            <Doughnut data={data} />
        </>);
};

export default DoughnutChart;