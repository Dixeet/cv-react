import React, {Component} from 'react';
import './Glitching.css';

class GlitchingText extends Component {
  render() {
    let className = '';
    if (!this.props.doNotGlitch) {
      className += 'glitch';
    }
    return (
      <div className={className} data-text={this.props.text}>
        {this.props.children}
      </div>
    );
  }
}

export default GlitchingText;
