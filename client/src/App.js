import React, { Component } from 'react';
import './App.css';
import Table from './components/Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: []
    }
  }

  componentDidMount() {
    fetch('/transactions')
      .then(res => res.json())
      .then(({ rows }) => this.setState({ 'rows': rows }))
  }

  render() {

    console.log(this.state.rows);

    return (
      <Table rows={ this.state.rows } />
    );
  }
}

export default App;
