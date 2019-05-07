import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "nopqz91prOyvS"
    }
  }

  // search = (query) => {
  //   const apiKey = "vCLKoTPYsWPI5gTALQzSl6OgbyYZrBxz";
  //   giphy(apiKey).search({
  //       q: query,
  //       rating: "g"
  //   }, (error, results) => {
  //     this.setState({
  //       gifs: results.data
  //     });
  //   });
  // }

  search = (query) => {
    const apiKey = "vCLKoTPYsWPI5gTALQzSl6OgbyYZrBxz";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`;
    // giphy(apiKey).search({
    //     q: query,
    //     rating: "g"
    // }, (error, results) => {
    //   this.setState({
    //     gifs: results.data
    //   });
    // });
    fetch(url)
    .then((results) => results.json())
    .then((json) => {
      this.setState({
        gifs: json.data
      });
    });
  }



  select = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }


  render() {
    const gifs = this.state.gifs;
    const selectedGifId = this.state.selectedGifId;
    return (
      <div>
        <div className='left-scene'>
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={gifs} select={this.select} />
        </div>
      </div>
    )
  };
}

export default App;
