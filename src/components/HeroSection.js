import React from 'react';
import _ from 'lodash';

import "react-responsive-carousel/lib/styles/carousel.min.css";
 
import {Carousel} from 'react-responsive-carousel';
import {withPrefix} from '../utils';
import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
            <div>
                {_.get(section, 'hero_items', null) && (
                    <Carousel 
                        className='carousel' 
                        dynamicHeight='true' 
                        infiniteLoop='true'
                        showThumbs='false'
                        interval='4500'
                        autoPlay='true'
                        showStatus='false'
                        thumbWidth='0'
                    >
                     {_.map(_.get(section, 'hero_items', null), (item, item_idx) => (
                        <div key={item_idx} className='hero__item'>
                            {_.get(item, 'background', null) && (
                            <img
                                className='hero__background' 
                                src={withPrefix(_.get(item, 'background', null))} 
                            />
                            )}
                            <div className="hero__container container--lg">
                                <div className="hero__text">
                                {_.get(item, 'title', null) && (
                                <h1 className={'hero__title ' + _.get(item, 'light_text', null)}>{_.get(item, 'title', null)}</h1>
                                )}
                                {_.get(item, 'subtitle', null) && (
                                <div className={'hero__body text block ' + _.get(item, 'light_text', null)}>
                                {markdownify(_.get(item, 'subtitle', null))}
                                </div>
                                )}
                                {_.get(item, 'actions', null) && (
                                <div className="hero__actions button-group">
                                <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                                </div>
                                )}
                                </div>
                                <div>
                                {_.get(item, 'image', null) && (
                                    <img
                                        className='hero__image' 
                                        src={withPrefix(_.get(item, 'image', null))} 
                                        alt={_.get(item, 'image_alt', null)}
                                    />
                                )}
                                </div>
                            </div>
                        </div>
                     ))}
                    </Carousel>
                )}
            </div>
            </section>
        );
    }
}
