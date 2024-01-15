import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navigation from "./Navigation"; // 네비게이션 컴포넌트 import
import Cover from "./Cover"; //
import Home from "./Menus/Home";
import Story from "./Menus/Story";
import Party from "./Menus/Party";
import Place from "./Menus/Place";
import Travel from "./Menus/Travel";
import Accomodation from "./Menus/Submenus/Accomodation";
import RSVP from "./Menus/RSVP";
import Attire from "./Menus/Attire";
import Contact from "./Menus/Contact";

import { Button, Container, Row } from "react-bootstrap";
import MainLayout from "./layouts/MainLayout";
import Question from "./Menus/Question";

function App() {
  return (
    <>
      <Container className="App">
        <Routes>
          {/* {useLocation().pathname == "/" && <Cover />} */}
          <Route element={<MainLayout />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/party" element={<Party />} />
            <Route path="/place" element={<Place />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/question" element={<Question />} />
            {/* <Route path="/accomodation" element={<Accomodation />} /> */}
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/attire" element={<Attire />} />
          </Route>
        </Routes>
      </Container>
      <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
        <p>100% made by Chloe from scratch!</p>
      </footer>
    </>
  );
}

export default App;
