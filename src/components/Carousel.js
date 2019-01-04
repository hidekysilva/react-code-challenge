import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="jumbotron item-container">
                <div className="container">
                  <h1 className="display-4">Example headline</h1>
                  <p className="lead">Ea exercitation enim nulla eu sunt esse nulla deserunt anim. Aliqua id aute aliqua est cupidatat eiusmod dolore minim reprehenderit labore ex eu. Non et id do ad minim anim aute ad deserunt ipsum consectetur reprehenderit.</p>  
                  <button type="button" className="btn btn-primary">Sign up today</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container jumbotron item-container">
                <h1 className="display-4">Example headline 2</h1>
                <p className="lead">Ea exercitation enim nulla eu sunt esse nulla deserunt anim. Aliqua id aute aliqua est cupidatat eiusmod dolore minim reprehenderit labore ex eu. Non et id do ad minim anim aute ad deserunt ipsum consectetur reprehenderit.</p>  
                <button type="button" className="btn btn-primary">Sign up today</button>
              </div>  
            </div>
            <div className="carousel-item">
              <div className="container jumbotron item-container">
                <h1 className="display-4">Example headline 3</h1>
                <p className="lead">Ea exercitation enim nulla eu sunt esse nulla deserunt anim. Aliqua id aute aliqua est cupidatat eiusmod dolore minim reprehenderit labore ex eu. Non et id do ad minim anim aute ad deserunt ipsum consectetur reprehenderit.</p>  
                <button type="button" className="btn btn-primary">Sign up today</button>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        
    );
  }
}

export default Carousel;
