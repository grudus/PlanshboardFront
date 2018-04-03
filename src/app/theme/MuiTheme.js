import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500 } from 'material-ui/styles/colors';

const themes = {

  dark: getMuiTheme({
    palette: {
      errorColor: red500,
      lightTextColor: '#888888',
      textColor: '#ebebeb',
      primary1Color: '#2196F3',
      pickerHeaderColor: '#2196F3',
      accent1Color: '#FF9100',
      accentColor: '#FF9100',
      disabledColor: 'rgba(0, 0, 0, 0.6)',
      borderColor: '#646464',
      hintColor: '#888888',
      canvasColor: '#424242',
      backgroundColor: '#212121',
      cardBackgroundColor: '#424242',
      darkBackgroundColor: '#fafafa',
      addTextColor: '#A9A9A9',
    },
    raisedButton: {
      disabledColor: '#646464',
    },
  }),

  light: getMuiTheme({
    palette: {
      errorColor: red500,
      lightTextColor: '#eeeeee',
      textColor: '#424242',
      primary1Color: '#2196F3',
      pickerHeaderColor: '#2196F3',
      accent1Color: '#FF9100',
      accentColor: '#FF9100',
      hintColor: 'rgba(0, 0, 0, 0.6);',
      disabledColor: 'rgba(0, 0, 0, 0.6)',
      backgroundColor: 'white',
      cardBackgroundColor: 'white',
      darkBackgroundColor: '#fafafa',
      addTextColor: '#A9A9A9',
    },
  }),
};

// todo get from local storage?
const theme = themes.light;

theme.datePicker.selectColor = theme.palette.primary1Color;

export default theme;
