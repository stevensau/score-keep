import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className='title-bar__sub'>{this.props.subtitle}</h2>
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper" >
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    )
  }
}

TitleBar.PropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

// TitleBar.defaultProps = {
//   title: 'Default title'
// };
