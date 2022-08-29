import React, { Component } from 'react'
import weatherState from './images/sunny.png';
import SearchCity from './SearchCity';
import SunState from './SunState';
export default class Home extends Component {
  getData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const API_KEY = "5ffd543b92e07a100a209cea40b1d78a";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);
  }
  render() {
    return (
      <>
        <div className="row ">
          <div className="col-lg-4 col-md-4 col-sm-12 bg-success">
            <SearchCity getData={this.getData} />
            <div className="container text-md-start text-sm-center text-xs-center text-mb-center p-5">
              <div className="row">
                <div className="col-10 card border-0 bg-transparent">
                  <img src={weatherState} className=" " alt="weather-state" />
                </div>
              </div>
              <div className="row">
                <h2 className='display-1'>12&deg; C </h2>
              </div>
              <div className="row">
                <h3>Day, <span className='text-muted'> 00:00</span></h3>
              </div>
              <div className="row border-secondary border-bottom border-2"></div>
              <div className="row">
                <div className="col-1 text-end">W</div>
                <div className="col-9 text-start">Sunny</div>
              </div>
              <div className="row">
                <div className="col-1 text-end">R</div>
                <div className="col-9 text-start">Rain - 00 %</div>
              </div>
            </div>
          </div>{/* right-side */}
          <div className="col-lg-8 col-md-8 col-sm-12 bg-info ">
            <div className="container">
              <div className="navbar">
                <div className="container">
                  <h1>Today's Highlights</h1>
                  <form className="d-flex" role="radiogroup">
                    <input type="radio" className='btn-check' name="temp-system" id="celsius" checked />
                    <label htmlFor="celsius" className='btn btn-outline-dark fs-6 fw-bold rounded-circle mx-1'>&deg;C</label>

                    <input type="radio" className='btn-check' name="temp-system" id="fahrenheit" />
                    <label htmlFor="fahrenheit" className='btn btn-outline-dark fs-6 fw-bold rounded-circle mx-1'>&deg;F</label>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="container">
                  <div className="card m-1 shadow-sm p-2 d-flex">
                    <div className="col-6">
                      <div className="row">
                        <div className=''>
                          <h4>Day</h4>
                          <span>Expect the Highest will be 37&deg; C</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className=''>
                          <h4>Night</h4>
                          <span>Expect the Lowest will be 23&deg; C</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <h4>Feels Like</h4>
                      <span>Expect be like 35&deg; C</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card m-1 shadow-sm">
                    <div className="container">
                      uv-state
                    </div>
                  </div>
                </div>{/* uv-state */}
                <div className="col-md-4 ">
                  <div className="card m-1 shadow-sm">
                    <div className="container">
                      wind-state
                    </div>
                  </div>
                </div>{/* wind-state */}
                <div className="col-md-4">
                  <SunState />
                </div>{/* sun-states */}
                <div className="col-md-4">
                  <div className="card m-1 shadow-sm">
                    <div className="container">
                      humidity-state
                    </div>
                  </div>
                </div>{/* humidity-state */}
                <div className="col-md-4">
                  <div className="card m-1 shadow-sm">
                    <div className="container">
                      visibility-state
                    </div>
                  </div>
                </div>{/* visibility-state */}
                <div className="col-md-4">
                  <div className="card m-1 shadow-sm">
                    <div className="container">
                      air-state
                    </div>
                  </div>
                </div>{/* air-state */}
              </div>
            </div>
          </div>{/* left-side */}
        </div>
        {/*  */}
      </>
    )
  }
}
