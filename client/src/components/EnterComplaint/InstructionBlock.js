import '../../App.js';
import React from 'react';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class InstructionBlock extends React.Component {
    render() {
      const { values } = this.props;

      switch (values.step) {
        case 1:
        return (
          <div className="instructions">
            <h2>eStat</h2>
            <div className="icon-row">
              <p>To get started with eStat, enter the complaint number you need to update.</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faPlus} size="6x"/>
              <p>If the complaint is not already in eStat, you can add it.</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faEdit} size="6x"/>
              <p>If the complaint is already in eStat, you can update it</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faEnvelope} size="6x"/>
              <p>After adding or updating the complaint to eStat, you can send an update to the email associated with the complaint</p>
            </div>
          </div>
        )
        case 2:
        return (
          <div className="instructions">
            <div className="icon-row">
              <p>Complaint number {values.complaintID} does not currently exist in eStat.</p>
            </div>
            <div className="icon-row">
              <p>Provide the information required and click "Add Complaint to eStat".</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faPlus} size="6x"/>
              <p>If the complaint is not already in eStat, you can add it.</p>
            </div>
            <div className="icon-row unselected">
              <FontAwesomeIcon className="icon" icon={faEdit} size="6x"/>
              <p class>If the complaint is already in eStat, you can update it</p>
            </div>
            <div className="icon-row unselected">
              <FontAwesomeIcon className="icon" icon={faEnvelope} size="6x"/>
              <p>After adding or updating the complaint to eStat, you can send an update to the email associated with the complaint</p>
            </div>
          </div>
        )
        case 3:
        return (
          <div className="instructions">
            <h2>eStat</h2>
            <div className="icon-row">
              <p>To get started with eStat, enter the complaint number you need to update.</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faPlus} size="6x"/>
              <p>If the complaint is not already in eStat, you can add it.</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faEdit} size="6x"/>
              <p>If the complaint is already in eStat, you can update it</p>
            </div>
            <div className="icon-row">
              <FontAwesomeIcon className="icon" icon={faEnvelope} size="6x"/>
              <p>After adding or updating the complaint to eStat, you can send an update to the email associated with the complaint</p>
            </div>
          </div>
        )
        case 4:
        return (
            <div className="instructions">
              <h2>eStat</h2>
              <div className="icon-row">
                <p>To get started with eStat, enter the complaint number you need to update.</p>
              </div>
              <div className="icon-row">
                <FontAwesomeIcon className="icon" icon={faPlus} size="6x"/>
                <p>If the complaint is not already in eStat, you can add it.</p>
              </div>
              <div className="icon-row">
                <FontAwesomeIcon className="icon" icon={faEdit} size="6x"/>
                <p>If the complaint is already in eStat, you can update it</p>
              </div>
              <div className="icon-row">
                <FontAwesomeIcon className="icon" icon={faEnvelope} size="6x"/>
                <p>After adding or updating the complaint to eStat, you can send an update to the email associated with the complaint</p>
              </div>
            </div>
        );
        default:
          (console.log('This is a multi-step form built with React.'))
      }
    }
  }

export default InstructionBlock;
