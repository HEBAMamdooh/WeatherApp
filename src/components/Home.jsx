import React from 'react'
import { MdLocationSearching } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import weatherState from './images/sunny.png';

function Home() {
  return (
    <>
      <div className="row ">
        <div className="col-lg-4 col-md-4 col-sm-12 bg-success">
          <form role="search">
            <div className='row justify-content-start input-group flex-nowrap p-3'>
              <label className="col-2 fs-2 text-center" id="addon-wrapping" htmlFor="city"> <MdSearch /> </label>
              <input className="col-6 form-control border-0 rounded-5" type="search" name="city" id="city" placeholder="Search city..." aria-label="Username" aria-describedby="addon-wrapping" />
              <button className='col-1 btn btn-light bg-text-light rounded-circle fs-5 text-center mx-1' type="submit" title='Search'> <MdLocationSearching /> </button>
            </div>
          </form>
          <div className="container text-md-start text-sm-center text-xs-center text-mb-center p-5">
            <div className="row">
              <div className="col-10 card border-0 bg-transparent">
                <img src={weatherState} className=" " alt="weather-state" />
              </div>
            </div>
            <div className="row">
              <h2 className='fs-2'>12&deg; C </h2>
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
                  <input type="radio" className='btn-check' name="temp-system" id="celsius" autocomplete="off" checked />
                  <label htmlFor="celsius" className='btn btn-outline-dark fs-6 fw-bold rounded-circle mx-1'>&deg;C</label>

                  <input type="radio" className='btn-check' name="temp-system" id="fahrenheit" autocomplete="off" />
                  <label htmlFor="fahrenheit" className='btn btn-outline-dark fs-6 fw-bold rounded-circle mx-1'>&deg;F</label>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card m-1">
                  <div className="container">
                    uv-state
                  </div>
                </div>
              </div>{/* uv-state */}
              <div className="col-md-4">
                <div className="card m-1">
                  <div className="container">
                    wind-state
                  </div>
                </div>
              </div>{/* wind-state */}
              <div className="col-md-4">
                <div className="card m-1">
                  <div className="container">
                    sun-states
                  </div>
                </div>
              </div>{/* sun-states */}
              <div className="col-md-4">
                <div className="card m-1">
                  <div className="container">
                    humidity-state
                  </div>
                </div>
              </div>{/* humidity-state */}
              <div className="col-md-4">
                <div className="card m-1">
                  <div className="container">
                    visibility-state
                  </div>
                </div>
              </div>{/* visibility-state */}
              <div className="col-md-4">
                <div className="card m-1">
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

export default Home