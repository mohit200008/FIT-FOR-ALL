import React, { Component } from 'react';
import '../../../../../node_modules/jquery/dist/jquery';
import '../../../../../node_modules/materialize-css/dist/js/materialize';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div>
        <div className="section black darken-2 white-text center">
        <div className="row">
            <div className="col s12">
              <h4>हमारे पर का पालन करें</h4>
              <p>अधिक के लिए सोशल मीडिया पर देखें</p>
              <Link to="htttps://facebook.com" target="_blank" className="white-text">
                <i className="fab fa-facebook fa-3x"></i>
              </Link>
              <Link to="htttps://twitter.com" target="_blank" className="white-text">
                <i className="fab fa-twitter fa-3x"></i>
              </Link>
              <Link to="htttps://linkedin.com" target="_blank" className="white-text">
                <i className="fab fa-linkedin fa-3x"></i>
              </Link>
              <Link to="htttps://googleplus.com" target="_blank" className="white-text">
                <i className="fab fa-google-plus fa-3x"></i>
              </Link>
              <Link to="htttps://pinterest.com" target="_blank" className="white-text">
                <i className="fab fa-pinterest fa-3x"></i>
              </Link>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Footer;