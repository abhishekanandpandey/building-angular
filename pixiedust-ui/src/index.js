import logMessage from './assets/js/logger'
import './assets/css/style.css'
// Log message to console
logMessage('A very warm welcome to Expack! Abhsihek')

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() /* eslint-disable-line no-undef */
}