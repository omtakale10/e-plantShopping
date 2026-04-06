import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Money Plant", price: 12, category: "Indoor" },
  { id: 4, name: "Rose", price: 20, category: "Outdoor" },
  { id: 5, name: "Tulip", price: 25, category: "Outdoor" },
  { id: 6, name: "Sunflower", price: 18, category: "Outdoor" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = (id) => cartItems.some(item => item.id === id);

  return (
    <div>
      <h2>Our Plants 🌿</h2>

      {["Indoor", "Outdoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter(p => p.category === category)
            .map(p => (
              <div key={p.id}>
                <h4>{p.name}</h4>
                <p>${p.price}</p>

                <button
                  onClick={() => dispatch(addToCart(p))}
                  disabled={isAdded(p.id)}
                >
                  {isAdded(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;