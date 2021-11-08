
import {BrowserRouter , Switch, Route } from "react-router-dom";

import { Employees } from "./Pages/Employees"
import { Meetings } from "./Pages/Meetings"
import { Feedback } from "./Pages/Feedback"



const Router = ()=>{
    return (
        <>
        <BrowserRouter>
            <Switch>

                 <Route path ="/home" component={Employees}/ > 
                 <Route path ="/meeting" component={Meetings}/ > 
                 <Route path ="/feedback" component={Feedback}/ > 
            </Switch>
        </BrowserRouter>
        </>
    )
}
export default Router