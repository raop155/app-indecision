import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={Boolean(props.selectedOption)}
      onRequestClose={props.onCloseModal} 
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button
        onClick={props.onCloseModal}
      >
      Okay
      </button>
    </Modal>
);

export default OptionModal;
