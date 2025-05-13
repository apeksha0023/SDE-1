import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import PrivateRoute from "@/routes/PrivateRoute";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import Inbox from "@/pages/Dashboard/Inbox";
import Sent from "@/pages/Dashboard/Sent";
import Drafts from "@/pages/Dashboard/Drafts";
import Trash from "@/pages/Dashboard/Trash";
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="sent" element={<Sent />} />
            <Route path="drafts" element={<Drafts />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AuthProvider>
  );
};

export default App;
