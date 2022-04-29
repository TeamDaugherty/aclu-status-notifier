import '../../App.js';
import React from 'react';
import screen from '../../assets/addEditScreen.png'; // relative path to image
import { ReactComponent as YourSvg } from '../../assets/acluLogo.svg';



class AddComplaintInfo extends React.Component {
    render() {
      return (
        <div>
          <img src={screen} alt={"background-image"}/>
          <YourSvg className="logoClass"/>
        </div>
      )
    }
  }

  export default AddComplaintInfo
