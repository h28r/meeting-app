
import {BrowserRouter , Switch, Route } from "react-router-dom";

import { Employees } from "./Pages/Employees"
import Meetings from "./Pages/Meetings"
import ActionItems from "./Pages/ActionItems";
import FeedBack from "./Pages/FeedBack";



const Router = ()=>{
    return (
        <>
        <BrowserRouter>
            <Switch>
                 <Route path ="/feedback" component={FeedBack}/ > 
                 
                 <Route path ="/meeting" component={Meetings}/ > 
                  <Route path ="/actionItems" component={ActionItems}/ > 
                  <Route path ="/" component={Employees}/ > 
                 

            </Switch>
        </BrowserRouter>
        </>
    )
}
export default Router