import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  width: '30%',
  maxWidth: '345px',
  minWidth: '280px',
  marginBottom: '1rem'
}

const getImage = language => {
  const prefix = '/static/'
  language = language.toLowerCase()

  switch (language) {
    case 'python':
      return prefix + 'banner-python.jpg'
    case 'go':
      return prefix + 'banner-go.jpg'
    case 'javascript':
      return prefix + 'banner-javascript.jpg'
    default:
      return prefix + 'banner-web.jpg'
  }
}

const RepositoryCard = ({ repo }) => (
  <Card style={styles}>
    <CardActionArea>
      <CardMedia
        component='img'
        alt='programming language image'
        style={{ objectFit: 'cover' }}
        height='140'
        image={getImage(repo.language)}
        title='Programming language image'
      />
      <CardContent>
        <Typography color='primary' component='h3' variant='subheading' gutterButton>
          { repo.name.toUpperCase() }
        </Typography>
        <Typography component='p'>
          { repo.description }
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
      <Button size='small' color='primary' component='a' href={repo.html_url} target='_blank'>Resositorio</Button>
      { repo.homepage && <Button size='small' color='secondary' component='a' href={repo.homepage} target='_blank'>Demo</Button> }
    </CardActions>
  </Card>
)

export default RepositoryCard
