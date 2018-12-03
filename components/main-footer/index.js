import React from 'react'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

import styles from './index.scss'

const skills = [
  {
    image: '/static/icons/go.jpg',
    label: 'Go (Golang)'
  },
  {
    image: '/static/icons/javascript.jpg',
    label: 'Javascript'
  },
  {
    image: '/static/icons/python.jpg',
    label: 'Python'
  },
  {
    image: '/static/icons/html5.jpg',
    label: 'HTML5'
  },
  {
    image: '/static/icons/react.jpg',
    label: 'React'
  },
  {
    image: '/static/icons/nodejs.jpg',
    label: 'Nodejs'
  },
  {
    image: '/static/icons/nextjs.jpg',
    label: 'Nextjs'
  },
  {
    image: '/static/icons/echo.jpg',
    label: 'Echo'
  },
  {
    image: '/static/icons/mongodb.jpg',
    label: 'MongoDB'
  },
  {
    image: '/static/icons/postgres.jpg',
    label: 'PostgreSQL'
  },
  {
    image: '/static/icons/firebase.jpg',
    label: 'FireBase'
  },
  {
    image: '/static/icons/sass.jpg',
    label: 'Sass'
  },
  {
    image: '/static/icons/materialize.jpg',
    label: 'Materialize'
  },
  {
    image: '/static/icons/bootstrap.jpg',
    label: 'Bootstrap'
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
      {skills.map((skill, i) => (
        <Chip
          key={i}
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
