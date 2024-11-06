import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import HC_more from "highcharts/highcharts-more";
import { PlotBubbleOptions } from 'highcharts';

const Bubble = ({ bubbleData }) => {
    const options = {
        chart: {
            type: "packedbubble",
            height: '40%'
        },
        title: {
            text: "Bubble Chart"
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}</sub>'
        },
        series: [
            {
                name: "Animal",
                ...PlotBubbleOptions,
                data: bubbleData
            }
        ]
    }

    HC_more(Highcharts)

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default Bubble;