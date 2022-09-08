import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '1rem' }}>
        <h1 className="header">HDPixels</h1>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
        <ImageList images={this.state.images} />
        <p className="copyright">&copy; | 2022 | Francis Bittok</p>
      </div>
    );
  }
}

export default App;
