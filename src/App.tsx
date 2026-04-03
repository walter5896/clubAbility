import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Awards from "./pages/Awards";
import GetInvolved from "./pages/GetInvolved";
import GetStarted from "./pages/GetStarted";
import Donate from "./pages/Donate";
import ProgramDetail from "./pages/ProgramDetail";
import Programs from "./pages/Programs";
import Registration from "./pages/Registration";
import Sponsors from "./pages/Sponsors";
import Stories from "./pages/Stories";
import ThankYou from "./pages/ThankYou";
import Volunteer from "./pages/Volunteer";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="awards" element={<Awards />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="donate" element={<Donate />} />
        <Route path="program-detail" element={<ProgramDetail />} />
        <Route path="programs" element={<Programs />} />
        <Route path="registration" element={<Registration />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="stories" element={<Stories />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="volunteer" element={<Volunteer />} />
      </Route>
    </Routes>
  );
}