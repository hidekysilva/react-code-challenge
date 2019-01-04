import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="container">
            <span className="text-muted">&copy; 2017-2018 Company, Inc. </span>
            <span className="text-muted">&bull; </span>
            <a href="#">Privacy </a>
            <span className="text-muted">&bull; </span>
            <a href="#">Terms</a>
            <a href="#" className='float-right'>Back to top</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
