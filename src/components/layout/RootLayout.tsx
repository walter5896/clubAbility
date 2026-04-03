import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoginOverlay from "./LoginOverlay";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <ScrollToTop />

      <Header onLoginClick={() => setIsLoginOpen(true)} />

      <main>
        <Outlet />
      </main>

      <Footer />

      <LoginOverlay
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}