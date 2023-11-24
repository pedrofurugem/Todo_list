import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../Pages/Home/index'
import { TaskInterface } from '../Pages/TaskInterface/index'

export function MyRoutes(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/TaskInterface" Component={TaskInterface} />
          </Routes>
        </BrowserRouter>
    )
}