import React from "react";
import '../src/scss/app.scss';
import {Header} from "./components/header/Header";
import {Categories} from "./components/categories/Categories";
import {Sort} from "./components/sort/Sort";
import {PizzaBlock} from "./components/pizzaBlock/PizzaBlock";
import {Skeleton} from "./components/pizzaBlock/Skeleton";

function App() {
   const [pizzas, setPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => {
      fetch('https://640aa2a181d8a32198ccd7e2.mockapi.io/pizzas')
         .then((res) => res.json())
         .then((arr) => {
            setPizzas(arr);
            setIsLoading(false);
         })
   }, [])

   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <div className="container">
               <div className="content__top">
                  <Categories/>
                  <Sort/>
               </div>
               <h2 className="content__title">Все пиццы</h2>
               <div className="content__items">
                  {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                     : pizzas.map((pizzas, i) => {
                        return (
                           <PizzaBlock key={i} {...pizzas} />
                        )
                     })}
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;