import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Odontologos from "./Odontologos"
import './index.css'
function App(){

    return (
        <>
        <BrowserRouter>
            <Switch>
            
                <Route path='/register'><Register></Register></Route>
                <Route path='/'><Login></Login></Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default App