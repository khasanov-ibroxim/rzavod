import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import {LanguageProvider} from "./lang/LangContext.jsx";

createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </LanguageProvider>

)
