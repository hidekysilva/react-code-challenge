import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <a className="navbar-brand" href="#">Carousel</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>

        </nav>
        
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

        <div className="jumbotron card-container">
          <div className="container">
            <div className="row">
            <div className="col-lg-4">
              <div className="card text-center">
                <div className="card-body">
                  <div className="circle"></div>
                  <h3 className="card-title">Heading</h3>
                  <p className="card-text">Nostrud quis duis dolore reprehenderit dolore dolor consequat est voluptate duis aute sit do. Officia irure anim non enim pariatur quis incididunt esse reprehenderit magna mollit reprehenderit. Magna in est irure irure irure. Minim sunt mollit pariatur mollit aliquip.</p>
                  <a href="#" className="btn btn-secondary">View Details >></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center">
                <div className="card-body">
                  <div className="circle"></div>
                  <h3 className="card-title">Heading</h3>
                  <p className="card-text">Nostrud quis duis dolore reprehenderit dolore dolor consequat est voluptate duis aute sit do. Officia irure anim non enim pariatur quis incididunt esse reprehenderit magna mollit reprehenderit. Magna in est irure irure irure. Minim sunt mollit pariatur mollit aliquip.</p>
                  <a href="#" className="btn btn-secondary">View Details >></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card text-center">
                <div className="card-body">
                  <div className="circle"></div>
                  <h3 className="card-title">Heading</h3>
                  <p className="card-text">Nostrud quis duis dolore reprehenderit dolore dolor consequat est voluptate duis aute sit do. Officia irure anim non enim pariatur quis incididunt esse reprehenderit magna mollit reprehenderit. Magna in est irure irure irure. Minim sunt mollit pariatur mollit aliquip.</p>
                  <a href="#" className="btn btn-secondary">View Details >></a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

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
              <div className="rectangle text-muted"><span className="rect-text">500x500</span></div>
            </div>
          </div> 
          <hr className="my-5" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center feature-two">
            <div className="rectangle text-muted"><span className="rect-text">500x500</span></div>
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
            <div className="rectangle text-muted"><span className="rect-text">500x500</span></div>
            </div>
          </div> 
          <hr className="my-5" />
        </div>

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

      </div>
    );
  }
}

export default App;
