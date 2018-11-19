import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import SinglePage from './scenes/SinglePage'
import './app.css'

library.add(faTerminal)
export default class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet='UTF-8' />
          <title>Makiris Website!</title>
        </Helmet>
        <SinglePage />
      </>
    )
  }
}
