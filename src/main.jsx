import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.scss'
import { UserAuthProviver } from "../src/Utils/UserAuth";
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAuthProviver>
    <App />
  </UserAuthProviver>,
)
