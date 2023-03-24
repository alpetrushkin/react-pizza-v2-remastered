import React from "react";
import '../src/scss/app.scss';
import {Header} from "./components/header/Header";
import {Home} from "./components/Pages/Home";
import {NotFound} from "./components/Pages/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Pages/Cart";

export const SearchContext = React.createContext('');

function App() {
   const [searchActive, setSearchActive] = React.useState('');

   return (
      <div className="wrapper">
         <SearchContext.Provider value={{ searchActive, setSearchActive }}>
            <Header/>
            <div className="content">
               <Routes>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/cart/'} element={<Cart/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
               </Routes>
            </div>
         </SearchContext.Provider>
      </div>
   );
}

export default App;