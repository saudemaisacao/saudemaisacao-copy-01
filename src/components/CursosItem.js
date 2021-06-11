import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class CursosItem extends React.Component {
    render() {
        let curso = _.get(this.props, 'curso_page', null);
        return (
            <article className="cell project-card">
              <Link to={withPrefix(_.get(curso, 'url', null))} className="project-card__link">
                {_.get(curso, 'frontmatter.thumb_image', null) && (
                <div className="project-card__image">
                  <img src={withPrefix(_.get(curso, 'frontmatter.thumb_image', null))} alt={_.get(curso, 'frontmatter.thumb_image_alt', null)} />
                </div>
                )}
                <header className="project-card__header">
                  <h3 className="project-card__title">{_.get(curso, 'frontmatter.title', null)}</h3>
                  {_.get(curso, 'frontmatter.subtitle', null) && (
                  <div className="project-card__subtitle">
                    {_.get(curso, 'frontmatter.subtitle', null)}
                  </div>
                  )}
                </header>
              </Link>
            </article>
        );
    }
}
