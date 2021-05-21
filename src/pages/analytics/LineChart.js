import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    const { labels, dataArray } = props;
    const data = {
        labels,
        datasets: [
            {
                label: '# of Votes',
                data: dataArray,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        plugins: {
            title: {
                display: true,
                text: 'Interactions per Hour',
                padding: 20,
                font: {
                    size: 24
                }
            }
        }
    };
    return (<>
        <Line data={data} options={options} />
    </>);
};

export default LineChart;