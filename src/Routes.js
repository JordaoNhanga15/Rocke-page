import App from "./App"
import { BrowserRouter,Route } from 'react-router-dom';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={App} exact/>
        </BrowserRouter>
    )
}