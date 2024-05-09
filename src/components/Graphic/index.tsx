import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function Graphic() {
  const barChartRef = useRef<HTMLCanvasElement | null>(null);
  const distributionChartRef = useRef<HTMLCanvasElement | null>(null);
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const columns = ["Berthi", "Dokol", "IRAQI", "Rotana", "Safavi", "Sogay"];
    const randomData = () => {
      return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
    };

    const destroyChart = (chart: Chart) => {
      chart.destroy();
    };

    if (barChartRef.current && distributionChartRef.current && pieChartRef.current) {
      if (barChartRef.current.chart) {
        destroyChart(barChartRef.current.chart);
      }
      if (distributionChartRef.current.chart) {
        destroyChart(distributionChartRef.current.chart);
      }
      if (pieChartRef.current.chart) {
        destroyChart(pieChartRef.current.chart);
      }

      let backgroundColor = [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ];
      let borderColor = [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ];

      barChartRef.current.chart = new Chart(barChartRef.current, {
        type: "bar",
        data: {
          labels: columns,
          datasets: [{
            label: "Frutas",
            data: randomData(),
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      distributionChartRef.current.chart = new Chart(distributionChartRef.current, {
        type: "line",
        data: {
          labels: columns,
          datasets: [{
            label: "Frutas",
            data: randomData(),
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            borderColor: borderColor,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          }
        }
      });

      pieChartRef.current.chart = new Chart(pieChartRef.current, {
        type: "pie",
        data: {
          labels: columns,
          datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
          }]
        }
      });
    }
  }, []);

  return (
    <div className="container-fluid" id="content-main">
      <div className="row justify-content-center">
        <div className="col-12 text-center mb-4 mx-2">
          <h1 className="h1">Gráficos</h1>
        </div>
        <div className="col-12 col-lg-6 mb-4 mb-lg-2 mx-2">
          <canvas ref={barChartRef} width="600" height="400"></canvas>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-8 col-lg-4 col-sm-10 mx-2 mb-4">
          <canvas ref={distributionChartRef} width="300" height="300"></canvas>
        </div>
        <div className="col-1"></div>
        <div className="col-8 col-lg-4 col-sm-10 mx-2 mb-4">
          <canvas ref={pieChartRef} width="300" height="300"></canvas>
        </div>
      </div>
    </div>  
  );}

