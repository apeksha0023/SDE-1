import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Inbox", path: "/inbox" },
    { name: "Sent", path: "/sent" },
    { name: "Drafts", path: "/drafts" },
    { name: "Trash", path: "/trash" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md border-r h-full p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mailbox</h2>
      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
