import './index.css'

import App from './App'
import Axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import registerServiceWorker from './registerServiceWorker'

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  request => {
    console.log(request)
    //it's possible to edit the request config before returning it
    return request
  },
  error => {
    console.log(error)
    Promise.reject(error)
  },
)

axios.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  error => {
    console.log(error)
    Promise.reject(error)
  },
)

//To eject from interceptors simply use eject where needed:
//var myInterceptor = axios.interceptors.request.use(() => {));
//axios.interceptors.request.eject(myInterceptor);

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
