import React, { Fragment } from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Explore from './Explore/Explore';
import Adventure from './Adventure/Adventure';
import Contact from './Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import Chatbot from '../../Chatbot/Chatbot'
function HomeEng() {
  return (
    <Router>
      <Fragment>
        <Banner />
        <Explore />
        <Adventure />
        <Contact />
        <Footer />
      </Fragment>
      <Chatbot />
    </Router>
  );
}

export default HomeEng
