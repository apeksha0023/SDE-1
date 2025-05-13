import React, { useEffect, useState } from 'react';
import { getDrafts } from '@/services/mailService';

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const data = await getDrafts();
        setDrafts(data);
      } catch (error) {
        console.error('Error fetching drafts:', error);
      }
    };

    fetchDrafts();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-64px)] bg-gray-100 rounded-lg shadow-sm overflow-hidden">
      {/* Sidebar - Mail List */}
      <div className="md:w-1/3 w-full h-1/2 md:h-full overflow-y-auto bg-white border-b md:border-r">
        <h1 className="text-lg font-bold px-4 md:px-6 py-4 border-b">📄 Drafts</h1>
        {drafts.length ? (
          <ul>
            {drafts.map((mail) => (
              <li
                key={mail.id}
                onClick={() => setSelectedMail(mail)}
                className={`px-4 md:px-6 py-4 border-b cursor-pointer hover:bg-blue-50 transition ${
                  selectedMail?.id === mail.id ? 'bg-blue-100' : ''
                }`}
              >
                <div className="font-medium text-gray-800 truncate">{mail.subject || '(No Subject)'}</div>
                <div className="text-sm text-gray-500 truncate">{mail.sender || 'Unknown sender'}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4 text-gray-500 text-sm">No drafts available.</p>
        )}
      </div>

      {/* Mail Detail */}
      <div className="md:w-2/3 w-full h-1/2 md:h-full overflow-y-auto p-4 md:p-8 bg-white">
        {selectedMail ? (
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-semibold">
                {selectedMail.sender?.charAt(0).toUpperCase() || '?'}
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
                  {selectedMail.subject || '(No Subject)'}
                </h2>
                <p className="text-sm text-gray-500">
                  From: <span className="text-gray-700">{selectedMail.sender || 'Unknown'}</span>
                </p>
                <p className="text-xs text-gray-400">
                  {selectedMail.date ? new Date(selectedMail.date).toLocaleString() : 'No date'}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="text-gray-800 whitespace-pre-line leading-relaxed border-t pt-4">
              {selectedMail.content || '(No Content)'}
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end mt-6 gap-2">
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Edit
              </button>
              <button className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 transition">
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-base md:text-lg text-center px-4">
            Select a draft to view its content
          </div>
        )}
      </div>
    </div>
  );
};

export default Drafts;
