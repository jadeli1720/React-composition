import React from 'react';
import styles from './App.module.scss';

const App = () => {
  return (
    <main>
      Make some toggles happen
    </main>
  );
}


class ToggleClass extends React.Component <undefined, {isOpen: boolean}> {
  state = {
    isOpen: true,
  };

  //method to flip our state
  toggle = () => {
    this.setState(state => ({...state, isOpen: !state.isOpen}))
      
  }
  
  render() {
    return (
      <></>
    )
  }
}

const ToggleFunction = () => {
  return (
    <></>
  );
};

export default App;
