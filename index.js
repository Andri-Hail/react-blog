import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import './index.css'
import rootReducer from './src/reducers/index'
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)
