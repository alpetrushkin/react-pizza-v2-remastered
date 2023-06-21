import React from 'react';
import {Categories} from "../categories/Categories";
import {Sort} from "../sort/Sort";
import {Skeleton} from "../pizzaBlock/Skeleton";
import {PizzaBlock} from "../pizzaBlock/PizzaBlock";
import {PaginationItem} from "../pagination/PaginationItem";
import {SearchContext} from "../../App";

import { useSelector, useDispatch } from 'react-redux'
import { setCategoriesId } from '../../redux/slice/filterSlice'

export const Home = () => {
  const dispatch = useDispatch()
  const categoryID= useSelector((state) => state.filter.categoriesId)
  const sort = useSelector((state) => state.filter.sort.sortProperty)

  const onChangeCategory = (id) => {
    dispatch(setCategoriesId(id))
  }

   const{searchActive} = React.useContext(SearchContext);
   const [pizzas, setPizzas] = React.useState([]);
   const [isLoading, setIsLoading] = React.useState(true);
   const [currentPage, setCurrentPage] = React.useState(1)


   React.useEffect(() => {
      setIsLoading(true);

      const order = sort.includes('-') ? 'asc' : 'desc';
      const sortBy = sort.replace('-', '');
      const category = categoryID > 0 ? `${categoryID}` : '';
      const search = searchActive ? `&search=${searchActive}` : '';

      fetch(`https://640aa2a181d8a32198ccd7e2.mockapi.io/pizzas?category=${category}&page=${currentPage}&limit=8&sortBy=${sortBy}&order=${order}${search}`)
         .then((res) => res.json())
         .then((arr) => {
            setPizzas(arr);
            setIsLoading(false);
         });
      window.scrollTo(0, 0);
   }, [categoryID, sort, searchActive, currentPage]);

   const items = pizzas.map((pizzas, i) => <PizzaBlock key={i} {...pizzas} />);
   const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoryID} onClickCategoriesID={onChangeCategory}/>
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoading ? skeletons : items}
         </div>
         <PaginationItem onChangePage={(number) => setCurrentPage(number)}/>
      </div>
   );
};

