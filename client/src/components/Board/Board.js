import './Board.css';
import React from 'react';
import EngineWorker from '../../workers/Engine';
import WebWorker from '../../workers/WebWorker';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: ''
    };
  }

  componentDidMount() {
    this.worker = new WebWorker(EngineWorker);
  }

  fetchUsers = () => {
    const users = [];

    const userDetails = {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
      id: 1
    };

    for (let i = 0; i < 10000000; i++) {
      userDetails.id = i++;
      userDetails.dateJoined = Date.now();

      users.push(userDetails);
    }

    this.setState({
      count: users.length
    });
  };

  fetchWebWorker = () => {
    this.worker.postMessage("Fetch Users");

    this.worker.addEventListener("message", event => {
      this.setState({
        count: event.data
      });
    });
  };

  render() {
    return (
      <div>
        <p className="text-center">Total User Count: {this.state.count}</p>
        <button className="btn-worker" onClick={this.fetchWebWorker}>
          Fetch Users with Web Worker
        </button>
      </div>
    )
  }
}