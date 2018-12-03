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
        style={{ color: '#fff' }}
      >
        Orlando Monteverde
      </Typography>
      <div className={styles.HeaderImgContainer}>
        <img src='/static/profile.jpg' alt='Orlando Monteverde Photo' className={styles.HeaderImg} />
      </div>
      <Typography
        className={styles.HeaderSubtitle}
        style={{ marginBottom: '1rem', color: '#fff' }}
        align='center'
        variant='h4'
        component='h3'
      >
        Web Developer
      </Typography>
      <Button
        color='primary'
        style={{ cursor: 'default' }}
      >
        Resuelvo problemas
      </Button>
    </Grid>
  </Grid>
)

export default MainHeader
