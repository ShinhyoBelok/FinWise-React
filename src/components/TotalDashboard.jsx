import React, { useEffect } from 'react'
import './styles/TotalDashboard.css'

export default function TotalDashboard() {
    useEffect(() => {
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'DOP', 'US'],
              ['2013',  1000,      400],
              ['2014',  1170,      460],
              ['2015',  660,       1120],
              ['2016',  1030,      540]
            ]);

            var options = {
            hAxis: {title: 'Mounth',  titleTextStyle: {color: 'white'},  textStyle: {color: 'white'}},
            vAxis: {minValue: 0,  textStyle: {color: 'white'}},
            backgroundColor: '3a516c',
            legend: { textStyle: {color: 'white'}},
            };

            var chart = new google.visualization.AreaChart(document.getElementById('chart_all_account_div'));
            chart.draw(data, options);
        }
    }, []);

  return (
    <div className='totalAccount flexbox'>
      <h2>Total accounts movements</h2>
      <div id="chart_all_account_div"></div>
    </div>
  )
}
