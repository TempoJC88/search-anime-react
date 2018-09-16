import React, { Component } from 'react'

export class SearchForm extends Component {
  state = {
    inputAnime: ''
  }

  _handleChange = (e) => {
    this.setState({ inputAnime: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputAnime } = this.state

    fetch(`https://kitsu.io/api/edge/anime?filter[text]=${inputAnime}`)
      .then(res => res.json())
      .then(result => {
        const { data, meta } = result
        /*console.log(data, meta.count)*/
        this.props.onResults(meta.count, data)
      })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="box">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input has-text-centered"
                onChange={this._handleChange}
                placeholder="» » » » » » Anime to search « « « « « «"
                type="search" />
            </div>
            <div className="control">
              <button className="button is-info">Search</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}