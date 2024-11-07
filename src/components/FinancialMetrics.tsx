import React from 'react';
import { FinancialMetrics as Metrics } from '../interfaces/types';
import { DollarSign, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

interface Props {
  metrics: Metrics;
}

const FinancialMetrics: React.FC<Props> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Income</p>
            <p className="text-2xl font-semibold text-green-600">
              ${metrics.totalIncome.toFixed(2)}
            </p>
          </div>
          <DollarSign className="w-8 h-8 text-green-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Expenses</p>
            <p className="text-2xl font-semibold text-red-600">
              ${metrics.totalExpenses.toFixed(2)}
            </p>
          </div>
          <TrendingDown className="w-8 h-8 text-red-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Net Income</p>
            <p className={`text-2xl font-semibold ${
              metrics.netIncome >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              ${metrics.netIncome.toFixed(2)}
            </p>
          </div>
          <TrendingUp className="w-8 h-8 text-blue-500" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-gray-600">Top Categories</p>
          <PieChart className="w-6 h-6 text-gray-500" />
        </div>
        <div className="space-y-2">
          {metrics.topCategories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{category.category}</span>
              <span className="text-sm font-medium">${category.amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};