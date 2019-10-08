import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import { fetchData } from '/utility/fetchData';
// import { fetchOptions } from '/utility/fetchOptions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      listings: '',
    }
  }

  async componentDidMount() {
     await this.fetchListings();

    // https://denver.craigslist.org/search/cta?query=e46+m3
  }

  fetchListings = async () => {
    try {
      console.log('Loading start');
      let url = "http://localhost:3003/api/v1/craigslist/e46";
      const response = await fetch(url)
      // console.log(response);
      // if(!response.ok) { throw new Error(`Fetch Call Cannot Be Made`)}
      console.log('Loading done');
      const data = await response.json()
      // console.log(data);
      this.setState({
        listings: data
      })
      // return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSearch = async (search) => {
    console.log(search)
  }

  render() {

    return (
      <div className="App">
        <section className="App-body">
        {
          this.state.listings &&
          this.state.listings.map(list => {
            return (
              <a href={list.link} target="_blank" key={list.title} rel="noopener noreferrer">
                <div className="App-image">
                  <img src={list.image} alt={list.title}/>
                </div>
              </a>
            )
          })
        }
        </section>
      </div>
    );

  }
}

export default App;
