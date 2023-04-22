import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Information from "./information/Information";
import Landing from "./landing/Landing";
import { NotFoundPage } from "./NotFoundPage";

function App() {
  return (
    <div>
      <Helmet>
        <title>Bekk - gokart</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Information />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
