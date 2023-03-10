import React from 'react';
import styles from './notFoundBlock.module.scss';
import smile from '../../assets/img/smile.svg';

export const NotFoundBlock = () => {
   return (
      <div className={styles.root}>
         <img src={smile} alt="smile"/>
         <h2>К сожалению данная страница не найдена</h2>
         <p>Попробуйте поискать по другому запросу</p>
      </div>
   );
};
