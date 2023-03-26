import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {ThemeProvider} from "./providers/ThemeProvider";
import {Layout} from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Favorites from "./Pages/Favorites";
import User from "./Pages/User";

function App() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [opened, setOpened] = useState(false)
  const [cartItems, setCartItems] = useState([])
  
  const addCartItem = (obj) => {
    axios.post('https://640a16d06ecd4f9e18c465b7.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
    console.log(obj)
  }
  const removeCartItem = async (obj) => {
    const findItem = cartItems.find(item => Number(item.idCard) === Number(obj.idCard))
    
    setCartItems((prev) => prev.filter(item => Number(item.idCard) != Number(obj.idCard)))
    await axios.delete(`https://640a16d06ecd4f9e18c465b7.mockapi.io/cart/${findItem.id}`)
  }

  const checkCartItem = (obj) => {
    return cartItems.find(item => Number(item.idCard) === Number(obj.idCard)) ? true : false
  }
  
  useEffect(() => {
    async function fetchData() {
      const cardResponse = await axios.get('https://640a16d06ecd4f9e18c465b7.mockapi.io/items')
      const cartResponse = await axios.get('https://640a16d06ecd4f9e18c465b7.mockapi.io/cart')
      
      setCards(cardResponse.data)
      setCartItems(cartResponse.data)
      
      setIsLoading(false)
    }
  
    fetchData();
  }, [])
  
  return (
    <ThemeProvider>
      <Layout>
        <h1 className="water-marka">Cтудент КЭИ Елгин Денис (&copy;&nbsp;Neksten)</h1>
        <Header opened={opened} setOpened={setOpened}/>
        <Routes>
          <Route path="/"
                 element={<Home
                   cards={cards}
                   isLoading={isLoading}
                   opened={opened}
                   setOpened={setOpened}
                   cartItems={cartItems}
                   removeCartItem={removeCartItem}
                   addCartItem={addCartItem}
                   checkCartItem={checkCartItem}
                 />}
          />
          <Route path="/favorites"
                 element={<Favorites
                   opened={opened}
                   isLoading={isLoading}
                   setOpened={setOpened}
                   cartItems={cartItems}
                   addCartItem={addCartItem}
                   removeCartItem={removeCartItem}
                   checkCartItem={checkCartItem}
                 />}
          />
          <Route path="/user"
                 element={<User
                   opened={opened}
                   isLoading={isLoading}
                   setOpened={setOpened}
                   cartItems={cartItems}
                   removeCartItem={removeCartItem}
                 />}
          />
        </Routes>
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
