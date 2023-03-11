import React from "react";
import '../src/scss/app.scss';
import {Header} from "./components/header/Header";
import {Home} from "./components/Pages/Home";
import {NotFound} from "./components/Pages/NotFound";
import {Routes, Route} from "react-router-dom";
import {Cart} from "./components/Pages/Cart";

function App() {

   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <Routes>
               <Route path={'/'} element={<Home/>}/>
               <Route path={'/cart/'} element={<Cart/>}/>
               <Route path={'*'} element={<NotFound/>}/>
            </Routes>
         </div>
      </div>
   );
}

export default App;