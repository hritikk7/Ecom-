import CartItem from '../CartItem';
import './CartScreen.css'

const CartScreen = () =>{
    return(
        <div className='cartscreen'>
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>SubTotal (0) items</p>
                    <p>$199.99</p>
                </div>
                <div className="">
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;