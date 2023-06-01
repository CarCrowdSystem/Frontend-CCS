import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
      datasets: [{
        label: 'Quantidade de carros estacionados',
        data: [10, 20, 30, 10, 20, 30, 10],
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