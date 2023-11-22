import React, { useEffect } from 'react'
import './styles/AccountCard.css'

export default function AccountCard() {
  useEffect(() => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Mounth','$'],
        ['May',1000],
        ['Jun',1170],
        ['Jul',660],
        ['Aug',1030],
        ['Aug',1030],
        ['Aug',1030],
      ]);

      var options = {
        hAxis: {title: 'Mounth',  titleTextStyle: {color: 'white'},  textStyle: {color: 'white'}},
        vAxis: {minValue: 0,  textStyle: {color: 'white'}},
        backgroundColor: '3a516c',
        legend: {position: 'none', textStyle: {color: 'white'}},
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  }, []);

  return (
    <div className='accountCardContainer flexbox'>
      <h4>Name of account</h4>
      <h2>100,000 <span>DOP</span></h2>
      <div id="chart_div"></div>
    </div>
  )
}
