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
                <h4>आपका बीएमआई चेक करें</h4>
                <p>बॉडी मास इंडेक्स (बीएमआई) एक उपाय है जो आपकी ऊंचाई और वजन का उपयोग करता है अगर आपका वजन स्वस्थ है।</p>
              </div>
            </div>
            <div className="col s6 m3" id="CardDetail">
              <div className="card-panel">
              <i class="fas fa-drumstick-bite fa-3x red-text"></i>
                <h4>CALORIE TRACK</h4>
                <p>जब आप जलने से अधिक कैलोरी खाते हैं, तो आप वजन बढ़ाते हैं। कैलोरी की गिनती आपको कम कैलोरी खाने और वजन कम करने में मदद कर सकती है।</p>
              </div>
            </div>
            <div className="col s6 m3" id="CardDetail">
              <div className="card-panel">
                <i className="material-icons medium red-text">बातचीत</i>
                <h4>हमारे साथ चैट करें</h4>
                <p>अधिक जानने के लिए हमारे साथ जुड़ें</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;