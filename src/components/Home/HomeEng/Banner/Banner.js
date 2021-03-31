import React, { Component } from 'react';
import '../../../../../node_modules/materialize-css/dist/css/materialize.min.css'
import Imgtwo from '../../../../Assets/Home/fit2final.jpg';

class Banner extends Component {
  render() {
    return (
      <img className="BannerImage" src={Imgtwo} alt="FITNESS" style={{maxWidth: "98.5vw"}} />
    );
  }
}

export default Banner;