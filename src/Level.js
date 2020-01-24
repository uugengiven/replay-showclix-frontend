import React from 'react';
import config from './config';

class Level extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      price_level: {
        level: "none",
        tickets: []
      }
    }

    this.getTickets = this.getTickets.bind(this);

    this.getTickets();
  }

  getTickets() {
    fetch(config.API + '/tickets/'+ this.props.id)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({price_level: myJson[0]});
    });
  }

  render() {
    const tickets = this.state.price_level.tickets;
    return (
        <React.Fragment>
            <h1 onClick={this.props.onClick}>{this.state.price_level.level} - Total ({tickets.length})</h1>
            {tickets.map(ticket => {
                return <div key={ticket.ticket_id}>{ticket.purchase_for}</div>
            })}
      </React.Fragment>
    );
  }
}

export default Level;