import Typography from '@material-ui/core/Typography'

import styles from './index.scss'
import RepositoryCard from '../repository-card'

const Repositories = ({ repos }) => (
  <div className={styles.Repositories}>
    <Typography
      color='textPrimary'
      align='center'
      component='h3'
      variant='h3'
      style={{ width: '100%', margin: '2rem auto' }}
    >
      Proyectos
    </Typography>
    {repos.map((repo) => (
      <RepositoryCard repo={repo} key={repo.id} />
    ))}
  </div>
)

export default Repositories
