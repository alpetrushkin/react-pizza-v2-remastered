import React from 'react';

export const Categories = ({ value, onClickCategoriesID }) => {
  const pizzaSort = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {pizzaSort.map((item, index) => {
          return (
            <li key={index} onClick={() => onClickCategoriesID(index)} className={value === index ? 'active' : ''}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
};
