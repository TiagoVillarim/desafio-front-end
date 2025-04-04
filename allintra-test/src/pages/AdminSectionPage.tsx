import React, { useState } from "react";
import Layout from "@theme/Layout";
import AdminSection from "../components/AdminSection/AdminSection";
import { Login } from "../components/LoginAdminSection/login";

export default function AdminSectionPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <main>
          <AdminSection />
        </main>
      )}
    </Layout>
  );
}
