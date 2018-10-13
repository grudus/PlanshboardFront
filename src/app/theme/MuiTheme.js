import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500 } from 'material-ui/styles/colors';
import { DARK, LIGHT } from './themeTypes';

const themes = {

  [DARK]: getMuiTheme({
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
      canvasColor: '#424242',
      backgroundColor: '#212121',
      cardBackgroundColor: '#424242',
      darkBackgroundColor: '#212121',
      addTextColor: '#A9A9A9',
    },
    raisedButton: {
      disabledColor: '#646464',
    },
    textField: {
      floatingLabelColor: '#888888',
      hintColor: '#888888',
    },
  }),

  [LIGHT]: getMuiTheme({
    palette: {
      errorColor: red500,
      lightTextColor: '#eeeeee',
      textColor: '#424242',
      primary1Color: '#2196F3',
      pickerHeaderColor: '#2196F3',
      accent1Color: '#FF9100',
      accentColor: '#FF9100',
      disabledColor: 'rgba(0, 0, 0, 0.6)',
      backgroundColor: 'white',
      cardBackgroundColor: 'white',
      darkBackgroundColor: '#fafafa',
      addTextColor: '#A9A9A9',
    },
  }),
};

export default (theme) => {
  const newTheme = themes[theme];
  newTheme.datePicker.selectColor = newTheme.palette.primary1Color;
  return newTheme;
};
