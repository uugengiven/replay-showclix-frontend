import React from 'react';
import './App.css';
import Level from './Level';
import Levels from './Levels';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      level_id: null,
    }

    this.levelClick = this.levelClick.bind(this);
    this.exitLevel = this.exitLevel.bind(this);
  }

  levelClick(id) {
    this.setState({level_id: id});
  }

  exitLevel() {
    this.setState({level_id: null});
  }

  render() {
    let view = null;
    if(this.state.level_id == null)
    {
      view = <Levels onClick={this.levelClick} />;
    }
    else
    {
      view = <Level id={this.state.level_id} onClick={this.exitLevel}/>;
    }
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;
