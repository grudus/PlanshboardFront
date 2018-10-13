/* eslint-disable no-undef */

// noinspection PointlessBooleanExpressionJS
const isOpera = () => (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

const isChrome = () => !!window.chrome && !!window.chrome.webstore;

const isChromiumBased = () => isOpera() || isChrome();


export const setValueWhenAutofilled = (textField) => {
  if (isChromiumBased()) {
    setTimeout(() => {
      const autofillExists = document.querySelectorAll('input:-webkit-autofill').length > 0;

      if (autofillExists) {
        textField.setState(state => ({ ...state, hasValue: true }));
      }
    }, 200);
  }
};
