import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {classNames, getPages, Link, withPrefix} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Cursos extends React.Component {
    render() {
        let layout_style = _.get(this.props, 'pageContext.frontmatter.layout_style', null) || 'mosaic';
        let cursos_sorted = _.orderBy(getPages(this.props.pageContext.pages, '/cursos'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <header className={classNames('section', 'section--header', {'screen-reader-text': _.get(this.props, 'pageContext.frontmatter.hide_title', null)})}>
              <div className="container container--lg">
                <h1 className="section__title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                <p className="section__subtitle">{_.get(this.props, 'pageContext.frontmatter.subtitle', null)}</p>
                )}
              </div>
            </header>
            <div className="section section--portfolio">
              <div className="container container--lg">
                <div className={'grid portfolio-feed portfolio-feed--' + layout_style}>
                  {_.map(cursos_sorted, (curso, curso_idx) => (
                  <article key={curso_idx} className="cell project-card">
                    <Link to={withPrefix(_.get(curso, 'url', null))} className="project-card__link">
                      {_.get(curso, 'frontmatter.thumb_image', null) && (
                      <div className="project-card__image">
                        <img src={withPrefix(_.get(curso, 'frontmatter.thumb_image', null))} alt={_.get(curso, 'frontmatter.thumb_image_alt', null)} />
                      </div>
                      )}
                      <header className="project-card__header">
                        <h2 className="project-card__title">{_.get(curso, 'frontmatter.title', null)}</h2>
                        {_.get(curso, 'frontmatter.subtitle', null) && (
                        <div className="project-card__subtitle">
                          {_.get(curso, 'frontmatter.subtitle', null)}
                        </div>
                        )}
                      </header>
                    </Link>
                  </article>
                  ))}
                </div>
              </div>
            </div>
            </Layout>
        );
    }
}
