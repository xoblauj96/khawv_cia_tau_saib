// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/pages/Home';
import AddEdit from './components/pages/AddEdit';
import View from './components/pages/View';

function App() {
  return (
    // <BrowserRouter>
    //   <div className="App">
    //     <ToastContainer />
    //     <Routes>
    //       <Route exact path="/" component={<Home />} />
    //       <Route path="/add" component={<AddEdit />} />
    //       <Route path="/update/:id" component={<AddEdit />} />
    //       <Route path="/view/:id" component={<View />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
