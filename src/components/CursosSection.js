import React from 'react';
import _ from 'lodash';

import {getPages, Link, withPrefix} from '../utils';
import CursosItem from './CursosItem';

export default class CursosSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let layout_style = _.get(section, 'layout_style', null) || 'tiles';
        let cursos_sorted = _.orderBy(getPages(this.props.pageContext.pages, '/cursos'), 'frontmatter.date', 'desc');
        let cursos_recent = cursos_sorted.slice(0, _.get(section, 'items_number', 2));
        let curso_len = _.size(cursos_recent);
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--portfolio">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title line-top">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="section__subtitle">{_.get(section, 'subtitle', null)}</p>
                )}
                <div className={'grid portfolio-feed portfolio-feed--' + layout_style}>
                  {
                  _.map(cursos_recent, (curso, curso_idx) => (
                    (((curso_idx === curso_len - 1) && _.get(section, 'view_all_label', null)) && _.get(section, 'view_all_url', null)) ? (
                    <article key={curso_idx} className="cell project-card">
                      <Link to={withPrefix(_.get(section, 'view_all_url', null))} className="project-card__view-all">
                        {_.get(curso, 'frontmatter.thumb_image', null) && (
                        <div className="project-card__image">
                          <img src={withPrefix(_.get(curso, 'frontmatter.thumb_image', null))} alt={_.get(curso, 'frontmatter.thumb_image_alt', null)} />
                        </div>
                        )}
                        <span className="project-card__button">{_.get(section, 'view_all_label', null)}</span>
                      </Link>
                    </article>
                    ) : 
                      <CursosItem key={curso_idx + '.1'} {...this.props} curso_page={curso} />
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
