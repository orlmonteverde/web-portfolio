import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import styles from './index.scss'

const MainHeader = () => (
  <Grid
    className={styles.Header}
    container
    justify='center'
    component='header'
  >
    <Grid item xs={12} className={styles.HeaderContent}>
      <Typography
        align='center'
        variant='h2'
        component='h1'
        className={styles.HeaderTitle}
      >
        Orlando Monteverde
      </Typography>
      <img src='/static/profile.png' alt='Orlando Monteverde Photo' className={styles.HeaderImg} />   
      <Typography
        className={styles.HeaderSubtitle}
        align='center'
        variant='h4'
        component='h3'
      >
        Web Developer
      </Typography>
      <Button color='primary'>
        Resuelvo problemas
      </Button>
    </Grid>
  </Grid>
)

export default MainHeader
