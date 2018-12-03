import Typography from '@material-ui/core/Typography'

import styles from './index.scss'

const AboutMe = ({ repos }) => (
  <div className={styles.Aboutme}>
    <Typography
      color='textPrimary'
      align='center'
      component='h3'
      gutterBottom
      variant='h3'
      style={{ width: '100%', margin: '2rem auto' }}
    >
      ¿Quién soy?
    </Typography>
    <Typography
      component='p'
      variant='subtitle1'
      style={{ width: '100%' }}
    >
      Mi nombre es Orlando, soy Desarrollador web especializado en Go (Golang) y JavaScript. También soy profesor, blogger, entusiasta del software libre y un friki de la informática a tiempo completo.
    </Typography>
  </div>
)

export default AboutMe
