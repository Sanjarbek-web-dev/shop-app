import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from './components/Shop';
import {ToastContainer} from 'react-toastify';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Shop />
      <Footer />
    </>
  );
}
