import React, { useState } from "react";
import Navbar from './components/Navbar';
import './App.scss';
import HomeEng from './components/Home/HomeEng/HomeEng';
import HomeHi from './components/Home/HomeHi/HomeHi'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Haelth from './components/Health/Health';
import SmartCalorie from './components/SmartCalorie/SmartCalorie'
import UserContext from "./context/UserContext";
import Doctor from './components/Doctor/Doctor'
import Details from "./components/Doctor/Details"
const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
  });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeEng} />
        <Route path='/hi' exact component={HomeHi} />
        <Route path='/health' component={Haelth} />
        <Route path='/doctor' component={Doctor} />
        <Route path='/Details' component={Details} />
        <UserContext.Provider value={{ userData, setUserData }}>
        <Route path='/smartCalorie' component={SmartCalorie} />
    </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
