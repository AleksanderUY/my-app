import carrito from './images/cart.svg';
const CartWidget = ()=> {
    return(
        <button type="button" className="btn btn-warning position-relative start-80">
        <img src={carrito} alt={"carrito"} width={"25vw"} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          1
          <span className="visually-hidden">unread messages</span>
        </span>
      </button> 
    )
}
export default CartWidget;