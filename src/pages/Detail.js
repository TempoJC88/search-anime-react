import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from './../components/Loading'

export class Detail extends Component {
  static proptypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = {
    anime: {},
  }

  _fetchMovie({ id }) {
    fetch(`https://kitsu.io/api/edge/anime?filter[id]=${id}`)
      .then(res => res.json())
      .then(result => {
        const { data } = result
        this.setState({ anime: data[0] })
      })
  }

  componentDidMount() {
    const { animeId } = this.props.match.params
    setTimeout(() => (
      this._fetchMovie({ id: animeId })
    ), 1000);
  }

  _renderAnime() {
    const { attributes } = this.state.anime
    return (
      <section>
        <div>
          <img
            alt={attributes.canonicalTitle}
            src={attributes.coverImage ? attributes.coverImage.large : 'https://media.kitsu.io/anime/cover_images/11331/large.jpg?1519182835'} />
        </div>
        <div>
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <img
                  alt={attributes.canonicalTitle}
                  className='margin-top-poster'
                  src={attributes.posterImage ? attributes.posterImage.large : 'https://www.himaparn.com/img/nopic.png'} />
              </div>

              <div className="column">
                <h1 className="title">{attributes.canonicalTitle} </h1>
                <h2 className="subtitle has-text-primary">{attributes.averageRating} Community Approval</h2>
                <p>
                  {attributes.synopsis}
                </p>
              </div>
              <div className="columns">
                <div className="column is-narrow">
                  <div className="box has-background-white-ter" style={{ width: '200px' }}>
                    <p className="title is-5">Anime Details</p>
                    <ul className="menu-label">
                      <li><strong>Type</strong> {attributes.subtype}</li>
                      <li><strong>Episodes</strong> {attributes.episodeCount}</li>
                      <li><strong>Status</strong> {attributes.status}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }

  render() {
    return (
      <section>
        {Object.keys(this.state.anime).length === 0
          ? <Loading /> : this._renderAnime()
        }
      </section>
    )
  }
}

