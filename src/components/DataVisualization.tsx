import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { ChartData } from '../interfaces/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Props {
  expenseData: ChartData;
  incomeData: ChartData;
  categoryData: ChartData;
}

const DataVisualization: React.FC<Props> = ({
  expenseData,
  incomeData,
  categoryData,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
        <Line
          data={incomeData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
          }}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Monthly Expenses</h3>
        <Bar
          data={expenseData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
          }}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
        <div className="w-full max-w-md mx-auto">
          <Doughnut
            data={categoryData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'right' },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};