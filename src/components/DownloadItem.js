import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class DownloadItem extends React.Component {
    render() {
        let download = _.get(this.props, 'download_page', null);
        return (
            <article className="cell project-card">
              <Link to={withPrefix(_.get(download, 'url', null))} className="project-card__link">
                {_.get(download, 'frontmatter.thumb_image', null) && (
                <div className="project-card__image">
                  <img src={withPrefix(_.get(download, 'frontmatter.thumb_image', null))} alt={_.get(download, 'frontmatter.thumb_image_alt', null)} />
                </div>
                )}
                <header className="project-card__header">
                  <h3 className="project-card__title">{_.get(download, 'frontmatter.title', null)}</h3>
                  {_.get(download, 'frontmatter.subtitle', null) && (
                  <div className="project-card__subtitle">
                    {_.get(download, 'frontmatter.subtitle', null)}
                  </div>
                  )}
                </header>
              </Link>
            </article>
        );
    }
}
