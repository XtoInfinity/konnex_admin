import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {
    const { labels, dataArray } = props;

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Interactions per Screen',
                padding: 20,
                font: {
                    size: 24
                }
            }
        }
    }

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
            <Doughnut data={data} options={options} />
        </>);
};

export default DoughnutChart;