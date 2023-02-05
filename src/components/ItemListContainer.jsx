import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div style={{ padding: 20, backgroundColor: 'lightgray' }}>
      <h2 style={{ textAlign: 'center' }}>{props.greeting}</h2>
    </div>
  );
};

export default ItemListContainer;