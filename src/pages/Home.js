import React, { Component } from 'react'
import { SearchForm } from './../components/SearchForm'
import { AnimeList } from './../components/AnimeList'

export class Home extends Component {
  state = {
    usedSearch: false,
    count: 0,
    data: []
  }

  _handleResults = (count, data) => {
    this.setState({ count, data, usedSearch: true })
  }

  _renderResult = () => {
    return this.state.count === 0
      ? <p className="title is-3 has-text-primary is-spaced">Sorry! Results not found!</p>
      : <AnimeList animes={this.state.data} />
  }

  render() {
    return (
      <div className="container">
        <div id="flow">
          <span className="flow-2"></span>
          <span className="flow-3"></span>
        </div>
        <div className="section">
          <SearchForm onResults={this._handleResults} />
          {this.state.usedSearch
            ? this._renderResult()
            : <small className="has-text-primary">Use the form to search a movie</small>
          }
        </div>
      </div>
    );
  }
}