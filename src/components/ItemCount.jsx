import { useState } from "react"
const ItemCount = ({stock}) => {
const [items, setItems] = useState(1);
const [itemStock, setItemstock] = useState(stock)

const incrementarStock = () =>{
    if (items < itemStock){
    setItems(items + 1);
}
}

const decrementarStock = () =>{
    if (items > 1){
    setItems(items - 1);
    }
}

const onAdd = () => {
    if (itemStock >= items) {
        setItemstock(itemStock - items);
        setItems(1)
        console.log("agregaste: " + items + " Productos al carrito!");
    }

}

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button className="btn btn-danger" onClick={decrementarStock}>-</button>
                        <button className="btn btn-warning">{items}</button>
                        <button className="btn btn-success" onClick={incrementarStock}>+</button>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                 </div>
                </div>
            </div>
        
    )
}
export default ItemCount;