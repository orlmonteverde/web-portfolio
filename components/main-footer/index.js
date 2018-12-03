import React from 'react'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

import styles from './index.scss'

const skills = [
  {
    image: '/static/icons/go.jpg',
    label: 'Go (Golang)',
    url: 'http://golang.org/'
  },
  {
    image: '/static/icons/javascript.jpg',
    label: 'Javascript',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    image: '/static/icons/python.jpg',
    label: 'Python',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    image: '/static/icons/html5.jpg',
    label: 'HTML5',
    url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
  },
  {
    image: '/static/icons/react.jpg',
    label: 'React',
    url: 'http://golang.org/'
  },
  {
    image: '/static/icons/nodejs.jpg',
    label: 'Nodejs',
    url: 'http://golang.org/'
  },
  {
    image: '/static/icons/nextjs.jpg',
    label: 'Nextjs',
    url: 'http://golang.org/'
  },
  {
    image: '/static/icons/echo.jpg',
    label: 'Echo',
    url: 'http://golang.org/'
  },
  {
    image: '/static/icons/mongodb.jpg',
    label: 'MongoDB',
    url: 'https://www.mongodb.com/'
  },
  {
    image: '/static/icons/postgres.jpg',
    label: 'PostgreSQL',
    url: 'https://www.postgresql.org/'
  },
  {
    image: '/static/icons/firebase.jpg',
    label: 'FireBase',
    url: 'https://firebase.google.com/'
  },
  {
    image: '/static/icons/sass.jpg',
    label: 'Sass',
    url: 'https://sass-lang.com/'
  },
  {
    image: '/static/icons/materialize.jpg',
    label: 'Materialize',
    url: 'http://redux.js.org/'
  },
  {
    image: '/static/icons/bootstrap.jpg',
    label: 'Bootstrap',
    url: 'http://redux.js.org/'
  }
]

const MainFooter = () => (
  <footer className={styles.MainFooter} style={{ backgroundColor: grey[900] }}>
    <Typography
      color='textPrimary'
      align='center'
      component='h3'
      gutterButton
      variant='h3'
      style={{ width: '100%', margin: '2rem auto', color: '#fff' }}
    >
      Habilidades
    </Typography>
    <div>
      {skills.map(skill => (
        <Chip
          style={{ margin: '.5rem' }}
          avatar={<Avatar src={skill.image} alt={`Logo de ${skill.label}`} />}
          color='secondary'
          label={skill.label}
        />
      ))}
    </div>
  </footer>
)

export default MainFooter
