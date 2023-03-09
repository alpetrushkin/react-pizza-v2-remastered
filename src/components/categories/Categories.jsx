import React from 'react';

export const Categories = () => {
  const [countPizza, setCountPizza] = React.useState(0);
  const pizzaSort = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {pizzaSort.map((item, index) => {
          return (
            <li key={index} onClick={() => setCountPizza(index)} className={countPizza === index ? 'active' : ''}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
};
