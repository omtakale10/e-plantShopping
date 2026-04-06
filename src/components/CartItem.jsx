import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/CartSlice";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => 
    sum + item.price * item.quantity, 0
  );

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>

            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      <h3>Total Amount: ${total}</h3>

      <button>Checkout (Coming Soon)</button>
    </div>
  );
}

export default CartItem;