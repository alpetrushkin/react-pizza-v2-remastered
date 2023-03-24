import React from 'react';
import styles from './Search.module.scss';
import {SearchContext} from "../../App";

export const Search = () => {
   const{searchActive, setSearchActive} = React.useContext(SearchContext);

   return (
      <div className={styles.search}>
         <svg className={styles.searchImg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
         </svg>
         <input value={searchActive}
                className={styles.input}
                onChange={event => setSearchActive(event.currentTarget.value)}
                placeholder={'Поиск пиццы ...'}
         />
         {searchActive && (
            <svg className={styles.remove} onClick={() => setSearchActive('')} xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
         )}
      </div>
   );
};
