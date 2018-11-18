import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import teal from '@material-ui/core/colors/teal'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
      light: '#7c43bd',
      dark: '#12005e',
      constrastText: '#fff'
    },
    secondary: {
      main: teal[500],
      lihgt: '#52c7b8',
      dark: '#00675b',
      constrastText: '#000'
    }
  },
  typography: {
    useNextVariants: true
  }
})
