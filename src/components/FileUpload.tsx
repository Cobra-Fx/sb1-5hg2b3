import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

const FileUpload: React.FC = () => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    // Handle file processing here
  }, []);

  return (
    <div 
      className="w-full p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <Upload className="w-12 h-12 text-gray-400" />
        <p className="text-lg font-medium text-gray-700">
          Drag and drop your bank statement here
        </p>
        <p className="text-sm text-gray-500">
          or click to select files
        </p>
        <input
          type="file"
          className="hidden"
          accept=".csv,.xlsx,.pdf"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            // Handle file processing here
          }}
        />
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Select File
        </button>
      </div>
    </div>
  );
};