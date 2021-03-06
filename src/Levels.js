import React from 'react';
import config from './config';

class Levels extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      price_levels: []
    }

    this.getTickets = this.getTickets.bind(this);

    this.getTickets();
  }


  getTickets() {
    fetch(config.API + '/levels')
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((myJson) => {
      this.setState({price_levels: myJson});
    });
  }

  render() {
    const levels = this.state.price_levels;
    return (
      <div className="priceLevels">
        {levels.map(level => {
            return <div key={level.level_id} onClick={() => {this.props.onClick(level.level_id)}}>{level.level}</div>
        })}
      </div>
    );
  }
}

export default Levels;