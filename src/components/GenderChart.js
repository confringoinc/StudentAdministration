import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BranchChart = (props) => {
  const { dataStudents } = props;

  const chartData = {
    height: 300,
    type: 'donut',
    options: {
      chart: {
        fontFamily: 'inherit',
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Male', 'Female', 'Other'],
      legend: {
        show: true,
        position: 'bottom',
        labels: {
          colors: 'inherit'
        },
      },
      tooltip: {
        theme: 'dark'
      },
      itemMargin: {
        horizontal: 10,
        vertical: 10,
      },
      colors: ['#dc3545', '#ffc107', '#0d6efd'],
    },
    series: [],
  }

  if (dataStudents) {
    let noMale = 0, noFemale = 0, noOther = 0;
    dataStudents.map((dataRow) => {
      if (dataRow.gender === 'Male') {
        noMale++;
      }
      else if (dataRow.gender === 'Female') {
        noFemale++;
      }
      else {
        noOther++;
      }
      return null;
    });
    chartData.series = [noMale, noFemale, noOther];
  }

  return (
    <div className="mt-3">
      <h4>Gender</h4>
      <div>
        <ReactApexChart {...chartData} />
      </div>
    </div>
  )
}

export default BranchChart
