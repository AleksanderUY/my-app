import React from 'react';
import ItemCount from './ItemCount';



const ItemListContainer = (props) => {
  return (
    <><div style={{ padding: 20, backgroundColor: 'lightgray' }}>
      <h2 style={{ textAlign: 'center' }}>{props.greeting}</h2>
    </div>
    <ItemCount stock={10} /></>
  );
};

export default ItemListContainer;