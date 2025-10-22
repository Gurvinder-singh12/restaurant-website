import { createRoot } from 'react-dom/client'
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import{Provider} from "react-redux";
import{store} from"../src/app/store.js";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
)
