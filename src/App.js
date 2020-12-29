import React from 'react'
import "./index.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <nav
          aria-label="hidden"
          className="navbar navbar-light bg-light new-navbar-sec-1"
        >
          <a className="navbar-brand" href="/">
            <i className="fas fa-plane"></i> Dashboard
          </a>
          <div className="profile-pic">
            Hi John Doe...
            <img
              alt="profile-pic"
              src="data:image/png;base64,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"
            />
          </div>
        </nav>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumbs-reset">
              <li className="breadcrumb-item">
                <a className="btn btn-secondary btn-breadcrumbs" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="btn btn-secondary btn-breadcrumbs" href="/">
                  Library
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="btn btn-secondary btn-breadcrumbs" href="/">
                  Data
                </a>
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="card ">
                <div className="card-body card-info">
                  <div className="card-img card-info-icon">
                    <i className="far fa-clipboard "></i>
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">23 orders new</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="card">
                <div className="card-body card-info">
                  <div className="card-img card-info-icon">
                    {' '}
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">23 orders new</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="card card-items">
                <div className="card-body card-info">
                  <div className="card-img card-info-icon">
                    {' '}
                    <i className="fas fa-signal"></i>
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">23 orders new</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="card">
                <div className="card-body card-info">
                  <div className="card-img card-info-icon">
                    {' '}
                    <i className="fas fa-bell"></i>
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">23 orders new</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row chart-card">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header chart-card-header">
                  <h3>Activity</h3>
                  <h5>Last week Data</h5>
                </div>
                <div className="card-body row info-chart-holder">
                  <div className="col-6 timeline">
                    <div className="row">
                      <div className="timeline_bar col-1"></div>
                      <div className="col-11 timeline-content">
                        <ul className="timeline-content-1">
                          <li>
                            <h6>Lorem Ipsum is simply dummy</h6> text of the
                            printing and typesetting industry.text of the
                            printing and typesetting industry.text of the
                            printing and typesetting industry.
                          </li>
                        </ul>
                        <ul className="timeline-content-2">
                          <li>
                            <h6>Lorem Ipsum is simply dummy</h6> text of the
                            printing and typesetting industry.text of the
                            printing and typesetting industry.text of the
                            printing and typesetting industry.
                          </li>
                        </ul>
                        <ul className="timeline-content-3">
                          <li>
                            <h6>Lorem Ipsum is simply dummy</h6> text of the
                            printing and typesetting industry.text of the
                            printing and typesetting industry.text of the
                            printing and typesetting industry.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 chart">
                    <canvas id="myChart" width="100%"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {}

export default App
