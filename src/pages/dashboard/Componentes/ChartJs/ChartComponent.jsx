import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

// var novoCheckout = Number(sessionStorage.getItem("CHECKOUT"))

const ChartComponent = ({dia1,dia2,dia3,dia4,dia5,dia6,dia7,checkout1,checkout2,checkout3,checkout4,checkout5,checkout6,checkout7}) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const data = {
      labels: [dia7, dia6, dia5, dia4, dia3, dia2, dia1],
      datasets: [{
        label: 'Quantidade de carros estacionados',
        data: [checkout7, checkout6, checkout5, checkout4, checkout3, checkout2, checkout1],
        backgroundColor: '#FF8000',
      }]
    };

    const options = {
        scales: {
            y: {
              grid: {
                display: false // Desabilita a exibição das grades do eixo Y
              }
            },
            x: {
                grid: {
                  display: false // Desabilita a exibição das linhas do eixo X
                }
              }
          },
        plugins: {
              legend: {
                 display: false // Remove a exibição das labels do gráfico
              }
      }
    };

    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data: data,
      options: options
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
      <canvas ref={chartRef}></canvas>
  );
};

export default ChartComponent;