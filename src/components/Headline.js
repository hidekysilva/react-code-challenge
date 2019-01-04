import React, { Component } from 'react';

class Headline extends Component {
  render() {
    return (
        <div>
          <hr className="my-5" />

          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center" >
                <div className="">
                  <h1><span>First featurette heading. </span><span className="text-secondary">It'll blow your mind</span></h1>
                  <p>Dolor quis duis nulla aliqua sunt quis tempor culpa ullamco non proident do. Sit mollit amet ex dolor eiusmod quis officia pariatur est adipisicing nostrud. Anim Lorem mollit velit ex cupidatat elit. Excepteur non adipisicing velit nostrud dolore magna irure magna cupidatat.</p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="mx-auto rectangle text-muted"><span className="rect-text">500x500</span></div>
              </div>
            </div> 
            <hr className="my-5" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center feature-two">
                <div className="mx-auto rectangle text-muted"><span className="rect-text">500x500</span></div>
              </div>
              <div className="col-lg-6 align-self-center" >
                <div className="">
                  <h1><span>Oh yeah, it's that good. </span><span className="text-secondary">See for yourself.</span></h1>
                  <p>Dolor quis duis nulla aliqua sunt quis tempor culpa ullamco non proident do. Sit mollit amet ex dolor eiusmod quis officia pariatur est adipisicing nostrud. Anim Lorem mollit velit ex cupidatat elit. Excepteur non adipisicing velit nostrud dolore magna irure magna cupidatat.</p>
                </div>
              </div>
            </div> 
            <hr className="my-5" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center" >
                <div className="">
                  <h1><span>And lastly, this one. </span><span className="text-secondary">Checkmate.</span></h1>
                  <p>Dolor quis duis nulla aliqua sunt quis tempor culpa ullamco non proident do. Sit mollit amet ex dolor eiusmod quis officia pariatur est adipisicing nostrud. Anim Lorem mollit velit ex cupidatat elit. Excepteur non adipisicing velit nostrud dolore magna irure magna cupidatat.</p>
                </div>
              </div>
              <div className="col-lg-6 text-center">
              <div className="mx-auto rectangle text-muted"><span className="rect-text">500x500</span></div>
              </div>
            </div> 
            <hr className="my-5" />
          </div>
        </div>
    );
  }
}

export default Headline;
