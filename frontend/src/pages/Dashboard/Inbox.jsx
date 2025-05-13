import React, { useEffect, useState } from "react";
import { getInbox } from "@/services/mailService";
import MailItem from "@/components/MailItem";
import MailDetail from "@/components/MailDetail";

const Inbox = () => {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    const fetchMails = async () => {
      const data = await getInbox();
      setMails(data || []);
    };
    fetchMails();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-[calc(100vh-64px)] bg-gray-50 rounded-lg shadow-sm overflow-hidden">
      {/* Mail List */}
      <div className="md:w-1/3 w-full h-1/2 md:h-full overflow-y-auto border-r bg-white">
        {mails.length ? (
          mails.map((mail) => (
            <div
              key={mail.id}
              onClick={() => setSelectedMail(mail)}
              className={`cursor-pointer transition-colors px-4 py-3 border-b hover:bg-blue-50 ${
                selectedMail?.id === mail.id ? "bg-blue-100" : ""
              }`}
            >
              <MailItem mail={mail} />
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-500 text-sm">No mails in inbox.</p>
        )}
      </div>

      {/* Mail Detail */}
      <div className="md:w-2/3 w-full h-1/2 md:h-full overflow-y-auto p-4 md:p-6 bg-white">
        {selectedMail ? (
          <MailDetail mail={selectedMail} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-center text-base md:text-lg">
            Select a mail to view its details
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
