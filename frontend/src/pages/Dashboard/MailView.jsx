import React, { useEffect, useState } from "react";
import MailItem from "@/components/MailItem";
import MailDetail from "@/components/MailDetail";
import { getMails } from "@/services/mailService";

const MailView = () => {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    const fetchMails = async () => {
      const data = await getMails();
      setMails(data || []);
    };

    fetchMails();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full p-4">
      {/* Mail List */}
      <div className="md:w-1/3 border-r">
        <h2 className="text-xl font-bold mb-2">Inbox</h2>
        <div className="space-y-2">
          {mails.map((mail) => (
            <div
              key={mail.id}
              onClick={() => setSelectedMail(mail)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <MailItem mail={mail} />
            </div>
          ))}
        </div>
      </div>

      {/* Mail Detail */}
      <div className="md:w-2/3 px-4">
        {selectedMail ? (
          <MailDetail mail={selectedMail} />
        ) : (
          <p className="text-gray-500">Select a mail to view details.</p>
        )}
      </div>
    </div>
  );
};

export default MailView;
