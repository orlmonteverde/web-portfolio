import Head from 'next/head'
import { Fragment, Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
// import Grid from '@material-ui/core/Grid'
// import FolderIcon from '@material-ui/icons/Folder'

import GetRepos from '../services/get-repositories'
import MainHeader from '../components/main-header'
import Repositories from '../components/repositories'
import Spinner from '../components/spinner'

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
      .then(result => this.setState({ repos: result.data }))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Fragment>
        <Head>
          <title>Orlando Monteverde</title>
          <link rel='icon' href='/static/favicon.png' />
        </Head>
        <MainHeader />
        <CssBaseline />
        { this.state.repos ? <Repositories repos={this.state.repos} /> : <Spinner /> }
      </Fragment>
    )
  }
}

export default Index
