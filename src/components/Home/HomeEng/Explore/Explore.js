import React, { Component } from 'react';
import '../../../../../node_modules/materialize-css/dist/css/materialize.min.css'
import "./explore.scss";


class Explore extends Component {
  render() {
    return (
       <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
          <h4 className="center">
              <span className="red-text darken-2">Fit </span>for <span className="red-text darken-2">All </span></h4>
            <div className="col s6 m3" id="CardDetail">
              <div className="card-panel">
                <i className="material-icons medium red-text">BMI</i>
                <h4>CHECK YOUR BMI</h4>
                <p>The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.</p>
              </div>
            </div>
            <div className="col s6 m3" id="CardDetail">
              <div className="card-panel">
              <i class="fas fa-drumstick-bite fa-3x red-text"></i>
                <h4>CALORIE TRACK</h4>
                <p>When you eat more calories than you burn, you gain weight. Counting calories can help you eat fewer calories and lose weight.</p>
              </div>
            </div>
            <div className="col s6 m3" id="CardDetail">
              <div className="card-panel">
                <i className="material-icons medium red-text">chat</i>
                <h4>CHAT-WITH-US</h4>
                <p>Connect with us to know more</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Explore;