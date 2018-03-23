import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  onCloseModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];    
    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = (option) => {
    let errorMessage = null;
    if (!option) {
      errorMessage = 'Enter valid value to add an item';
    } else if (this.state.options.indexOf(option) > -1) {
      errorMessage = 'This option already exists';
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    return errorMessage;
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }  

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};