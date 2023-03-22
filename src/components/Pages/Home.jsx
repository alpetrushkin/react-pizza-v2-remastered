import React from 'react';
import {Categories} from "../categories/Categories";
import {Sort} from "../sort/Sort";
import {Skeleton} from "../pizzaBlock/Skeleton";
import {PizzaBlock} from "../pizzaBlock/PizzaBlock";

export const Home = () => {
   const [pizzas, setPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);
   const [categoriesID, setCategoriesID] = React.useState(0);
   const [sortType, setSortType] = React.useState({name: 'популярности', sortProperty: 'rating'});

   React.useEffect(() => {
      setIsLoading(true);

      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortType.sortProperty.replace('-', '');
      const category = categoriesID > 0 ? `category=${categoriesID}` : '';

      fetch(`https://640aa2a181d8a32198ccd7e2.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`)
         .then((res) => res.json())
         .then((arr) => {
            setPizzas(arr);
            setIsLoading(false);
         });
      window.scrollTo(0, 0);
   }, [categoriesID, sortType]);

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoriesID} onClickCategoriesID={(id) => setCategoriesID(id)}/>
            <Sort value={sortType} onClickSortID={(sort) => setSortType(sort)}/>
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

