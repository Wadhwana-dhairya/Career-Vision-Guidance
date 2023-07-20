import React, { createContext, useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Error1 from "./Component/Error1";
import Logout from "./Component/Logout";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Search from "./Component/Search";
import Guidance from "./Component/Guidance";
import Cources from "./Component/Cources";
import { initialstate, reducer } from "./reducer/reducer";
import Ld from "./clgs/Ld";
import Nirma from "./clgs/Nirma";
import Msu from "./clgs/Msu";
import Pdeu from "./clgs/Pdeu";
import Daiict from "./clgs/Daiict";
import Vgec from "./clgs/Vgec";
import It from "./cource/It";
import Ce from "./cource/Ce";
import Mechanical from "./cource/Mechanical";
import Electrical from "./cource/Electrical";
import Civil from "./cource/Civil";
import Chemical from "./cource/Chemical";
import About from "./Component/About"


export const Usercontext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <Usercontext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/contact" element={<Contact />} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/signin" element={<Login />} />
          <Route exact="true" path="/college" element={<Search />} />
          <Route exact="true" path="/signup" element={<Register />} />
          <Route exact="true" path="/logout" element={<Logout />} />
          <Route exact="true" path="/cource" element={<Cources />} />
          <Route exact="true" path="/guidance" element={<Guidance />} />
          <Route exact="true" path="/clgs/Ld" element={<Ld />} />
          <Route exact="true" path="/clgs/Nirma" element={<Nirma />} />
          <Route exact="true" path="/clgs/Pdeu" element={<Pdeu />} />
          <Route exact="true" path="/clgs/Daiict" element={<Daiict />} />
          <Route exact="true" path="/clgs/Msu" element={<Msu />} />
          <Route exact="true" path="/clgs/Vgec" element={<Vgec />} />
          <Route exact="true" path="/cource/It" element={<It />} />
          <Route exact="true" path="/cource/Ce" element={<Ce />} />
          <Route exact="true" path="/cource/Mechanical" element={<Mechanical />} />
          <Route exact="true" path="/cource/Civil" element={<Civil />} />
          <Route exact="true" path="/cource/Electrical" element={<Electrical />} />
          <Route exact="true" path="/cource/Chemical" element={<Chemical />} />
          <Route exact="true" path="*" element={<Error1 />} />
        </Routes>
      </Usercontext.Provider>
    </>
  );
}

export default App;
