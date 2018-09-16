import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Anime } from './Anime'

export class AnimeList extends Component {
  static propTypes = {
    animes: PropTypes.array
  }

  render() {
    const { animes } = this.props
    return (
      <div className="row columns is-multiline">
        {animes.map(anime => {
          const { canonicalTitle, startDate } = anime.attributes
          return (
            <div className="column is-3" key={anime.id} >
              <Anime
                canonicalTitle={canonicalTitle}
                posterImage={anime.attributes.posterImage.original}
                id={anime.id}
                startDate={startDate}>
                {canonicalTitle}
              </Anime>
            </div >
          )
        })}
      </div>
    )
  }
}