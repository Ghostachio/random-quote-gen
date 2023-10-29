import React, { Component} from 'react';
import QuoteBox from './QuoteBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes : [],
    }
  }

    componentDidMount() {
      fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => this.setState({quotes : data}))
    };

    nextQuote = () => {
      const randomIndex = Math.floor(Math.random() * this.state.quotes.length);
      const randomQuote = this.state.quotes[randomIndex];
        this.setState({ randomQuote });
  }
      


  render() {
    return (
      <div className='flex justify-center flex-col items-center h-screen bg-Dark-Blue' >
        <QuoteBox  data={this.state.quotes} random={this.nextQuote}/>
      </div>
    );
  }

}

export default App