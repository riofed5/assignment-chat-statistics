import React from 'react'
import PropTypes from 'prop-types';

export const Subtitle = ({subtitle}) => {
    return (
        <div className="content"> {subtitle}</div>
    )
}

Subtitle.propTypes = {
    subtitle: PropTypes.string.isRequired
};
