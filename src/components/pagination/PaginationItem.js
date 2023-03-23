import React from 'react';
import Pagination from '@mui/material/Pagination';
import styles from './Pagination.module.scss';

export const PaginationItem = ({onChangePage}) => {

   const handleChange = (e, p) => {
      onChangePage(p)
   }

   return (
      <div className={styles.pagination}>
         <Pagination count={3} color="primary" onChange={handleChange}></Pagination>
      </div>
   );
};
