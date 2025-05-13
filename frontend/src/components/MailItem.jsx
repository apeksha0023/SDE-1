import React from "react";

const MailItem = ({ mail }) => {
  return (
    <div className="p-3 sm:p-4 border-b hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
        {/* Subject */}
        <h3 className="font-semibold text-base sm:text-lg text-gray-800 truncate max-w-full sm:max-w-md">
          {mail.subject}
        </h3>

        {/* Timestamp */}
        <span className="text-xs sm:text-sm text-gray-500">
          {mail.timestamp}
        </span>
      </div>

      {/* Sender */}
      <p className="text-sm text-gray-600 mt-1 truncate">{mail.sender}</p>
    </div>
  );
};

export default MailItem;
