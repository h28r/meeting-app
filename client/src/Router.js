
import {BrowserRouter , Switch, Route } from "react-router-dom";

import { Employees } from "./Pages/Employees"
import Meetings from "./Pages/Meetings"



const Router = ()=>{
    return (
        <>
        <BrowserRouter>
            <Switch>

                 <Route path ="/home" component={Employees}/ > 
                 <Route path ="/meeting" component={Meetings}/ > 
            </Switch>
        </BrowserRouter>
        </>
    )
}
export default Router