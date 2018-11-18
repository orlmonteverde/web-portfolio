import Head from 'next/head'
import { Fragment, Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import GetRepos from '../services/get-repositories'
import MainHeader from '../components/main-header'
import Repositories from '../components/repositories'
import Spinner from '../components/spinner'

import { theme } from '../config/theme'

class Index extends Component {
  constructor () {
    super()
    this.state = {
      repos: null
    }
    this.getRepos = this.getRepos.bind(this)
  }

  componentDidMount () {
    this.getRepos()
  }

  getRepos () {
    GetRepos()
      .then(result => {
        let repositories = result.data.filter(repo => !repo.fork && repo.name !== 'orlmonteverde.github.io')
        this.setState({ repos: repositories })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Fragment>
        <Head>
          <title>Orlando Monteverde</title>
          <link rel='icon' href='/static/favicon.png' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
        </Head>
        <MuiThemeProvider theme={theme}>
          <MainHeader />
          <CssBaseline />
          { this.state.repos ? <Repositories repos={this.state.repos} /> : <Spinner /> }
        </MuiThemeProvider>
      </Fragment>
    )
  }
}

export default Index
