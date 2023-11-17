import React, { useEffect } from 'react'
import './styles/AccountCard.css'

export default function AccountCard() {
  useEffect(() => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year','Balance'],
        ['2013',1000],
        ['2014',1170],
        ['2015',660],
        ['2016',1030]
      ]);

      var options = {
        hAxis: {title: 'Year',  titleTextStyle: {color: 'white'},  textStyle: {color: 'white'}},
        vAxis: {minValue: 0,  textStyle: {color: 'white'}},
        backgroundColor: '#29273f',
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
