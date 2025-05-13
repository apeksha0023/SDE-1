import React from "react";

const MailDetail = ({ mail }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold shrink-0">
            {mail.sender?.charAt(0)?.toUpperCase()}
          </div>

          {/* Sender Info */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 break-words">
              {mail.subject}
            </h2>
            <p className="text-sm text-gray-500 truncate">From: {mail.sender}</p>
            <p className="text-xs text-gray-400">
              {new Date(mail.date).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
          {mail.content}
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <button className="px-5 py-2 sm:px-6 sm:py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailDetail;
