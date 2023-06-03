import React from "react";
import '../styles/index.scss';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SuccessAttemptPage from "../pages/SuccessAttemptPage/SuccessAttemptPage";

function App() {
  return (
    <>
      <BrowserRouter basename='/b2b-test-task'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/success' element={<SuccessAttemptPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
