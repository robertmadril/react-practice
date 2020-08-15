import React, { Component } from 'react';
import ListItem from './components/ListItem';
import List from './components/List';
import chartObj from './data/chartObj.json';
import './App.css';

class App extends Component {
  state = {
    chartData: chartObj,
    name: "Robert",
    greeting: "Henlo",
    datesArr: ""
  }

  getMonthDates = (year, month) => {
    let dates = new Date(year, month, 0).getDate();

    this.setState({datesArr: dates})

    return;
  }

  logState = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className='container' onClick = {() => {this.getMonthDates(2020, 2)}}>
        {(this.state.chartData.length > 0) ?
          (
            <List>
              {this.state.chartData.map(data => (
                <ListItem key={data.id}
                  title={data.title}
                  author={data.author}
                  color={data.color} />
              ))}
            </List>) :
          <h2 className="say-my-name">
            {this.state.greeting}
          </h2>
        }
        <br />
        <br />
        <br />
        <h1 className="say-my-name">
          {this.state.name}
        </h1>
      </div>
    );
  }
}

export default App;