import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Anime extends Component {
  static propTypes = {
    canonicalTitle: PropTypes.string,
    posterImage: PropTypes.string,
    id: PropTypes.string,
    startDate: PropTypes.string,
  }

  render() {
    const { canonicalTitle, posterImage, id, startDate } = this.props
    return (
      <Link to={`/detail/${id}`}>
        <div className="card radius">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                alt={canonicalTitle}
                src={posterImage} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{canonicalTitle}</p>
                <p className="subtitle is-6">{startDate}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
