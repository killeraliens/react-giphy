import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  render() {
    const gifs = [
      { id: "Nm8ZPAGOwZUQM"},
      { id: "nopqz91prOyvS"}
    ];
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className="selected-gif">
            <Gif id="nopqz91prOyvS" />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={gifs} />
        </div>
      </div>
    )
  };
}

export default App;
