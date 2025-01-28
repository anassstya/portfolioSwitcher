import { render } from 'preact';
import '/src/porfolioData/portfolio.css';
import {Portfolio, App} from "./porfolioData/Portfolio.jsx";

render(
    <App/>,
    document.getElementById('toolbar')
)


