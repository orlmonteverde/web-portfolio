import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './index.scss'

const MainHeader = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderContent}>
      <Typography
        align='center'
        variant='h3'
        component='h1'
        className={styles.HeaderTitle}
      >
        Orlando Monteverde
      </Typography>
      <Typography
        align='center'
        variant='h4'
        className={styles.HeaderSubtitle}
        component='h2'
      >
        Web Developer
      </Typography>
      <img src='/static/profile.png' alt='Orlando Monteverde Photo' className={styles.HeaderImg} />
      <Typography
        align='center'
        variant='h4'
        className={styles.HeaderLabel}
        component='p'
      >
        Resuelvo problemas
      </Typography>
      <Button variant='contained' color='secondary' className=''>¿Como puedo ayudarte?</Button>
    </div>
  </header>
)

export default MainHeader
