import React from 'react';
import { Download, Printer, Share2 } from 'lucide-react';

const ReportGeneration: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Generate Reports</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Download className="w-5 h-5" />
          <span>Download PDF</span>
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Printer className="w-5 h-5" />
          <span>Print Report</span>
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share Report</span>
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <input type="checkbox" id="includeCharts" className="rounded text-blue-600" />
          <label htmlFor="includeCharts" className="text-gray-700">Include charts and graphs</label>
        </div>
        
        <div className="flex items-center gap-4">
          <input type="checkbox" id="includeTransactions" className="rounded text-blue-600" />
          <label htmlFor="includeTransactions" className="text-gray-700">Include transaction details</label>
        </div>

        <div className="flex items-center gap-4">
          <input type="checkbox" id="includeSummary" className="rounded text-blue-600" defaultChecked />
          <label htmlFor="includeSummary" className="text-gray-700">Include executive summary</label>
        </div>
      </div>
    </div>
  );
};