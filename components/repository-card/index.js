import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  width: '30%',
  maxWidth: 345,
  minWidth: 200,
  marginBottom: '1rem'
}

const RepositoryCard = ({ repo }) => (
  <Card style={styles}>
    <CardActionArea>
      <CardMedia
        component='img'
        alt='programming language image'
        style={{ objectFit: 'cover' }}
        height='140'
        image='/static/wallpaper.jpg'
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
    <CardActions>
      <Button size='small' color='primary' component='a' href={repo.html_url} target='_blank'>Resositorio</Button>
      { repo.homepage && <Button size='small' color='secondary' component='a' href={repo.homepage} target='_blank'>Demo</Button> }
    </CardActions>
  </Card>
)

export default RepositoryCard
