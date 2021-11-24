import React from "react";
import axios from 'axios';
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./views/LoguedHome.css";

// ./src/views/LoguedHome.jsx - Module not found: Can't resolve '../LoguedHome.css' in 'C:\Ciclo 4\Trueque Mental\ciclo-4-proyecto-main\src\views'
//import '../src/views/LoguedHome.css';

// ./src/views/LoguedHome.jsx - Module not found: Can't resolve '../LoguedHome.css' in 'C:\Ciclo 4\Trueque Mental\ciclo-4-proyecto-main\src\views'
//import "./LoguedHome.css";

// ./src/views/LoguedHome.jsx - Module not found: Can't resolve '../LoguedHome.css' in 'C:\Ciclo 4\Trueque Mental\ciclo-4-proyecto-main\src\views'
import "/Ciclo 4/Trueque Mental/ciclo-4-proyecto-main/src/views/LoguedHome.css"

//axios config
axios.defaults.baseURL = 'https://trueque-mental-api.herokuapp.com/api';

ReactDOM.render(<App name="juan"/>, document.getElementById("root"));