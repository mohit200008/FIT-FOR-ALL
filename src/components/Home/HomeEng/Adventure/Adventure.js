import React, { Component } from 'react';
import Resort1 from '../../../../Assets/Home/fit4.jpg';
import Resort2 from '../../../../Assets/Home/fit5.jpg';
import Resort3 from '../../../../Assets/Home/fit6.jpg';
import './Adventure.scss'

class Popular extends Component {
  render() {
    return (
      <section id="info1">
        <div className="row1">
          <div className="card1">
            <h2>FITNESS</h2>
            <p>You’re off to great places, today is your day. Your mountain is waiting, so get on your way.</p>
          </div>
          <div className="card1">
            <h2>Sharp Mind</h2>
            <p>Once you replace negative thoughts with positive ones, you’ll start having positive results.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Popular;