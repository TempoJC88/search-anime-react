import React, { Component } from 'react'
import { SearchForm } from './../components/SearchForm'
import { AnimeList } from './../components/AnimeList'
import Loading from './../components/Loading'

export class Home extends Component {
  state = {
    count: 0,
    data: [],
    loadAnime: false
  }

  componentDidMount() {
    setTimeout(() => (
      fetch(`https://kitsu.io/api/edge/anime`)
        .then(res => res.json())
        .then(result => {
          const { data, meta } = result
          this.setState({ count: meta.count, data, loadAnime: true })
        })
    ), 1000);


  }

  _handleResults = (count, data) => {
    this.setState({ count, data })
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
          {this.state.loadAnime ? this._renderResult() : <Loading />}

        </div>
      </div>
    );
  }
}