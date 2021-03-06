import Head from 'next/head'
import { Fragment, Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import GetRepos from '../services/get-repositories'
import MainHeader from '../components/main-header'
import MainFooter from '../components/main-footer'
import Repositories from '../components/repositories'
import AboutMe from '../components/about-me'
import Spinner from '../components/spinner'
import SocialButton from '../components/social-button'

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
    const URL = 'https://api.github.com/users/orlmonteverde/repos'
    GetRepos(URL)
      .then(result => {
        let repositories = result.data
          .filter(repo => !repo.fork && repo.homepage)
        this.setState({ repos: repositories })
      })
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Fragment>
        <Head>
          <title>Orlando Monteverde</title>
        </Head>
        <MuiThemeProvider theme={theme}>
          <MainHeader />
          <CssBaseline />
          <AboutMe />
          { this.state.repos ? <Repositories repos={this.state.repos} /> : <Spinner /> }
          <MainFooter />
          <SocialButton />
        </MuiThemeProvider>
      </Fragment>
    )
  }
}

export default Index
