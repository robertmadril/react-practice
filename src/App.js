import React, { Component } from 'react';
import ListItem from './components/ListItem';
import List from './components/List';
import chartObj from './data/chartObj.json';
import './App.css';

class App extends Component {
  state = {
    chartData: chartObj
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    return (
      <div className='container'>
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
            THANK YOU FOR CLEANING THE SHOWER, IVY
          </h2>
        }
        <br />
        <br />
        <br />
        <h1 className="say-my-name">
          Love u
        </h1>
      </div>
    );
  }
}

export default App;