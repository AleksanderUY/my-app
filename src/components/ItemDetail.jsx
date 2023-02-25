import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
    <div className="container">
        <div className="row">
            <div className="col d-flex align-items-center justify-content-end">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="col">
                <h1>{item.nombre}</h1>
                <h5>{item.calorias} kcal</h5>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} />
            </div>
        </div>
    </div>


    )
}
export default ItemDetail;