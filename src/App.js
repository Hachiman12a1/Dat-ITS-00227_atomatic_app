import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import data from "./data/data.json";

const Resource = React.lazy(() => import("./Components/Templates/Resource/Resource"));
const User = React.lazy(() => import("./Components/Templates/User/User"));
const NotFound = React.lazy(() => import("./Components/NotFound/NotFound"));
const Home = React.lazy(() => import("./Components/Templates/Home"));
const Detail = React.lazy(() => import("./Components/Templates/Detail/Detail"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Home Data={data} />} />
          <Route path="/detail/:id" element={<Detail Data={data} />} />
          <Route path="/resource/:id" element={<Resource />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
