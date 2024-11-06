import React from 'react';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official'

const Pie = ({ pieData }) => {
    const options = {
        chart: {
            type: "pie"
        },
        title: {
            text: "Pie Chart"
        },
        series: [
            {
                name: "",
                colorByPoint: true,
                lineWidth: 1,
                marker: {
                    enabled: false,
                    symbol: "circle",
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true,
                            lineWidth: 1
                        }
                    }
                },
                data: pieData
            }
        ]
    }

    return (
        <div>
            <PieChart
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )

}

export default Pie;