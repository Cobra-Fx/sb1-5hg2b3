import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BarChart2, Upload, FileText, PieChart } from 'lucide-react';
import FileUpload from './components/FileUpload';
import TransactionAnalysis from './components/TransactionAnalysis';
import FinancialMetrics from './components/FinancialMetrics';
import DataVisualization from './components/DataVisualization';
import ReportGeneration from './components/ReportGeneration';

// Mock data for demonstration
const mockTransactions = [
  { id: '1', date: '2024-03-10', description: 'Salary', amount: 5000, category: 'Income', type: 'income' as const },
  { id: '2', date: '2024-03-11', description: 'Rent', amount: -1500, category: 'Housing', type: 'expense' as const },
];

const mockMetrics = {
  totalIncome: 5000,
  totalExpenses: 2500,
  netIncome: 2500,
  topCategories: [
    { category: 'Housing', amount: 1500 },
    { category: 'Food', amount: 500 },
    { category: 'Transportation', amount: 300 },
  ],
};

const mockChartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [{
    label: 'Expenses',
    data: [1200, 1900, 2500],
    backgroundColor: ['rgba(255, 99, 132, 0.5)'],
    borderColor: ['rgba(255, 99, 132, 1)'],
    borderWidth: 1,
  }],
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <BarChart2 className="w-8 h-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Financial Analyzer</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Link>
                  <Link to="/analysis" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    <PieChart className="w-4 h-4 mr-2" />
                    Analysis
                  </Link>
                  <Link to="/reports" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    <FileText className="w-4 h-4 mr-2" />
                    Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-6">
                <FileUpload />
                <FinancialMetrics metrics={mockMetrics} />
              </div>
            } />
            <Route path="/analysis" element={
              <div className="space-y-6">
                <TransactionAnalysis transactions={mockTransactions} />
                <DataVisualization
                  expenseData={mockChartData}
                  incomeData={mockChartData}
                  categoryData={mockChartData}
                />
              </div>
            } />
            <Route path="/reports" element={<ReportGeneration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;