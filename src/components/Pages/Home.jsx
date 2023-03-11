import React from 'react';
import {Categories} from "../categories/Categories";
import {Sort} from "../sort/Sort";
import {Skeleton} from "../pizzaBlock/Skeleton";
import {PizzaBlock} from "../pizzaBlock/PizzaBlock";

export const Home = () => {
   const [pizzas, setPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);

   React.useEffect(() => {
      fetch('https://640aa2a181d8a32198ccd7e2.mockapi.io/pizzas')
         .then((res) => res.json())
         .then((arr) => {
            setPizzas(arr);
            setIsLoading(false);
         });
      window.scrollTo(0, 0);
   }, []);

   return (
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
   );
};

