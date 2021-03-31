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
            <h2>उपयुक्तता</h2>
            <p>आप महान स्थानों पर हैं, आज आपका दिन है। आपका पहाड़ इंतजार कर रहा है, इसलिए अपने रास्ते पर चलें।</p>
          </div>
          <div className="card1">
            <h2>तेज़ दिमाग</h2>
            <p>एक बार जब आप नकारात्मक विचारों को सकारात्मक लोगों के साथ बदल देते हैं, तो आप सकारात्मक परिणाम प्राप्त करना शुरू कर देंगे।</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Popular;