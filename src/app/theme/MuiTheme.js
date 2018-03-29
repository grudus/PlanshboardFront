import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme({
  palette: {
    primary1Color: '#2196F3',
    pickerHeaderColor: '#2196F3',
    accent1Color: '#FF9100',
    accentColor: '#FF9100',
    disabledColor: 'rgba(0, 0, 0, 0.6)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
});

theme.datePicker.selectColor = theme.palette.primary1Color;

export default theme;
