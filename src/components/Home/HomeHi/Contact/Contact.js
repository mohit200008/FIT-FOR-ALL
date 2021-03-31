import React, { Component } from 'react';
import '../../../../../node_modules/materialize-css/dist/css/materialize.min.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel red white-text center">
                <i className="material-icons medium">email</i>
                <h5>FITFOCUS Address</h5>
                <p>इसका मतलब है कि आपके ईमेल को त्वरित नज़र में पचाया जाएगा जबकि रिसीवर अपने फोन पर है, अन्य कार्यों के बीच आगे और पीछे फ़्लिप करता है। सबसे अच्छा आपके पत्राचार में उनके ध्यान का एक तेज फ्लैश मिलेगा। </p>
              </div>
              
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="red-text">नाम</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email" className="red-text">ईमेल</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="red-text">फ़ोन</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label for="message" className="red-text">संदेश</label>
                  </div>
                  <input type="submit" value="Submit" className="btn black" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;