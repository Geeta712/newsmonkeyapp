import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          
          <img src={!imageUrl?"../no-image-news.png":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>{!source}<span className="badge rounded-pill bg-danger">{source}
          </span>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><i><small className="text-body-secondary">- By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></i></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems
