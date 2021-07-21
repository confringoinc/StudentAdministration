import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BranchChart = (props) => {
  const { dataStudents } = props;

  const chartData = {
    height: 300,
    type: 'bar',
    options: {
      chart: {
        fontFamily: 'inherit',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Civil', 'Computer', 'Electrical', 'Electronics', 'EC', 'IT', 'Mathematics', 'Mechanical', 'Production', 'Structural'],
      legend: {
        show: true,
        position: 'top'
      },
      stroke: {
        show: false
      },
      tooltip: {
        theme: 'dark',
        y: {
          formatter: function (val) {
            return val + " students";
          }
      }
      },
      yaxis: {
        show: false
      },
      colors: ['#0d6efd'],
      grid: {
        show: false,
      }
    },
    series: [
      {
        name: 'No. of students',
        data: []
      }
    ]
  }

  if (dataStudents) {
    let cl = 0, cp = 0, el = 0, ee = 0, ec = 0, it = 0, ma = 0, me = 0, pr = 0, st = 0;
    dataStudents.map((dataRow) => {
      if (dataRow.branch === 'Civil') {
        cl++;
      }
      else if (dataRow.branch === 'Computer') {
        cp++;
      }
      else if (dataRow.branch === 'Electrical') {
        el++;
      }
      else if (dataRow.branch === 'Electronics') {
        ee++;
      }
      else if (dataRow.branch === 'Electronics and Communication') {
        ec++;
      }
      else if (dataRow.branch === 'Information Technology') {
        it++;
      }
      else if (dataRow.branch === 'Mathematics') {
        ma++;
      }
      else if (dataRow.branch === 'Mechanical') {
        me++;
      }
      else if (dataRow.branch === 'Production') {
        pr++;
      }
      else {
        st++;
      }
      return null;
    });
    chartData.series[0].data = [cl, cp, el, ee, ec, it, ma, me, pr, st];
  }

  return (
    <div className="mt-3">
      <h4>Branch</h4>
      <div>
        <ReactApexChart {...chartData} />
      </div>
    </div>
  )
}

export default BranchChart
