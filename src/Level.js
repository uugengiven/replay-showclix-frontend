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

  drawTicket(ticket)
  {
    return (
        <div key={ticket.ticket_id} className="row">
            <div className="status">{ticket.status > 1 ? "✓" : "○"}</div>
            <div className="name">{ticket.purchase_for || "No Name Given"}</div>
        </div>
    );
  }

  render() {
    const tickets = this.state.price_level.tickets.sort((a, b) => {
      if(a.last_name > b.last_name)
      {
        return 1
      }
      else if(a.last_name === b.last_name)
      {
        return 0
      }
      else
      {
        return -1
      }
    });
    console.log(tickets);
    return (
        <React.Fragment>
            <div className="goBack" onClick={this.props.onClick}>Go Back ↩</div>
            <h1>{this.state.price_level.level} - Total ({tickets.length})</h1>
            <div className="names">
                {tickets.map(this.drawTicket)}
            </div>
      </React.Fragment>
    );
  }
}

export default Level;