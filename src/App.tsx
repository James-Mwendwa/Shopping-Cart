import { Wrapper } from './App.styled';


// Types
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}


// fetch api
const getProducts = async (): Promise <CartItemType> => {
  await (await fetch('https://fakestoreapi.com/products')).json();
}

function App() {
  return (
    <div className="App">
     <h2>Shopping Cart</h2>     
    </div>
  );
}

export default App;
