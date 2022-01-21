import '../../App.js';
import React from 'react';
import screen from '../../assets/queryScreen.png'; // relative path to image
import { ReactComponent as LogoSVG } from '../../assets/acluLogo.svg';
import InstructionBlock from './InstructionBlock.js';



class EnterComplaintInfo extends React.Component {
    render() {
      const { values } = this.props;
      return (
        <div>
          <img src={screen} alt={"background-image"}/>
          <LogoSVG className="logoClass"/>
          <InstructionBlock
            values={values}
          />
        </div>
      )
    }
  }

  export default EnterComplaintInfo
