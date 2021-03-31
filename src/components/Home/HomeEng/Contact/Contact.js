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
                <p>That means your email will most likely be digested in a quick glance while the receiver is on their phone, flitting back and forth between other tasks. At best your correspondence will get a quick flash of their attention. </p>
              </div>
              
            </div>
            <div className="col s12 m6">
              <div className="card-panel grey lighten-3">
                <h5>Please fill out this form</h5>
                <form>
                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="red-text">Name</label>
                  </div>
                  <div className="input-field">
                    <input type="email" id="email" />
                    <label for="email" className="red-text">Email</label>
                  </div>
                  <div className="input-field">
                    <input type="text" id="phone" />
                    <label for="phone" className="red-text">Phone</label>
                  </div>
                  <div className="input-field">
                    <textarea className="materialize-textarea" id="message" data-length="120"></textarea>
                    <label for="message" className="red-text">Message</label>
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