import { Fragment } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index'

const socialMedia = [
  {
    title: 'Github',
    icon: 'fab fa-github',
    url: 'https://github.com/orlmonteverde'
  },
  {
    title: 'Twitter',
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/orlmonteverde'
  },
  {
    title: 'Medium',
    icon: 'fab fa-medium',
    url: 'https://medium.com/@orlmonteverde'
  },
  {
    title: 'Linkedin',
    icon: 'fab fa-linkedin',
    url: 'https://linkedin.com/in/orlmonteverde'
  }
]

const styles = {
  button: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem'
  }
}

const SocialButton = () => (
  <PopupState variant='popover' popupId='popup-menu'>
    {popupState => (
      <Fragment>
        <Button color='secondary' variant='fab' style={styles.button} {...bindTrigger(popupState)}>
          <i className='fas fa-user' />
        </Button>
        <Menu {...bindMenu(popupState)}>
          {socialMedia.map((s, i) => (
            <MenuItem key={i} onClick={popupState.close}>
              <ListItem component='a' href={s.url} target='_blank'>
                <ListItemIcon>
                  <span className={s.icon} />
                </ListItemIcon>
                <ListItemText>
                  {s.title}
                </ListItemText>
              </ListItem>
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    )}
  </PopupState>
)

export default SocialButton
