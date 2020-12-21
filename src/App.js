import React from 'react'
import config from './config'
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let batchRowValues = data.valueRanges[0].values

        const rows = []
        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {}
          for (let j = 0; j < batchRowValues[++i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j]
          }
          rows.push(rowObject)
        }

        this.setState({ items: rows })
      })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
          <div className="navbar-brand h1 mb-0 text-large font-medium">
            Online Retail Dashboard
          </div>
          <div className="navbar-nav ml-auto">
            <div className="user-detail-section">
              <span className="pr-2">Hi, Sean</span>
              <span className="img-container">
                <img
                  src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                  className="rounded-circle"
                  alt="user"
                />
              </span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

App.propTypes = {}

export default App
