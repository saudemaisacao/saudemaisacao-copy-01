import React from 'react';
import _ from 'lodash';

import {getPages, Link, withPrefix} from '../utils';
import DownloadItem from './DownloadItem';

export default class DownloadsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let layout_style = _.get(section, 'layout_style', null) || 'tiles';
        let downloads_sorted = _.orderBy(getPages(this.props.pageContext.pages, '/downloads'), 'frontmatter.date', 'desc');
        let downloads_recent = downloads_sorted.slice(0, _.get(section, 'items_number', 2));
        let download_len = _.size(downloads_recent);
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
                  _.map(downloads_recent, (download, download_idx) => (
                    (((download_idx === download_len - 1) && _.get(section, 'view_all_label', null)) && _.get(section, 'view_all_url', null)) ? (
                    <article key={download_idx} className="cell project-card">
                      <Link to={withPrefix(_.get(section, 'view_all_url', null))} className="project-card__view-all">
                        {_.get(download, 'frontmatter.thumb_image', null) && (
                        <div className="project-card__image">
                          <img src={withPrefix(_.get(download, 'frontmatter.thumb_image', null))} alt={_.get(download, 'frontmatter.thumb_image_alt', null)} />
                        </div>
                        )}
                        <span className="project-card__button">{_.get(section, 'view_all_label', null)}</span>
                      </Link>
                    </article>
                    ) : 
                      <DownloadItem key={download_idx + '.1'} {...this.props} download_page={download} />
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
