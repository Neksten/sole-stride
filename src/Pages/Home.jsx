import React, {useState} from "react";
import SimpleSlider from "../components/Slider/SimpleSlider";
import Card from "../components/Card/Card";
import useTheme from "../hooks/useTheme";
import cn from "classnames";
import Drawer from "../components/Drawer/Drawer";

// const cards = [
// 	{
// 		"id": 1,
// 		"title": "Мужские кроссовки adidas ozweego pure",
// 		"price": 11999,
// 		"imgUrl": "/img/sneakers/1.jpg"
// 	},
// 	{
// 		"id": 2,
// 		"title": "Мужские Кроссовки Jordan Air Jordan 11",
// 		"price": 10799,
// 		"imgUrl": "/img/sneakers/2.jpg"
// 	},
// 	{
// 		"id": 3,
// 		"title": "Мужские Кроссовки Nike Lebron XVIII Low EP",
// 		"price": 13999,
// 		"imgUrl": "/img/sneakers/3.jpg"
// 	},
// 	{
// 		"id": 4,
// 		"title": "Мужские кроссовки Reebok Zig Kinetica II Edge",
// 		"price": 11990,
// 		"imgUrl": "/img/sneakers/4.jpg"
// 	},
// 	{
// 		"id": 5,
// 		"title": "Мужские кроссовки Reebok Turbo Restyle",
// 		"price": 8999,
// 		"imgUrl": "/img/sneakers/5.jpg"
// 	},
// 	{
// 		"id": 6,
// 		"title": "Мужские кроссовки Adidas OZELIA",
// 		"price": 15999,
// 		"imgUrl": "/img/sneakers/6.jpg"
// 	},
// 	{
// 		"id": 7,
// 		"title": "Мужские кроссовки Adidas OZWEEGO",
// 		"price": 17999,
// 		"imgUrl": "/img/sneakers/7.jpg"
// 	},
// 	{
// 		"id": 8,
// 		"title": "Мужские кроссовки Adidas NITE JOGGER",
// 		"price": 11199,
// 		"imgUrl": "/img/sneakers/8.jpg"
// 	},
// 	{
// 		"id": 9,
// 		"title": "Мужские кроссовки Reebok Zig Kinetica 2.5 Edge",
// 		"price": 15999,
// 		"imgUrl": "/img/sneakers/9.jpg"
// 	},
// 	{
// 		"id": 10,
// 		"title": "Мужские кроссовки Adidas ZX 2K BOOST 2.0",
// 		"price": 19999,
// 		"imgUrl": "/img/sneakers/10.jpg"
// 	},
// 	{
// 		"id": 11,
// 		"title": "Мужские кроссовки Adidas OZRAH",
// 		"price": 19999,
// 		"imgUrl": "/img/sneakers/4.jpg"
// 	},
// 	{
// 		"id": 12,
// 		"title": "Мужские кроссовки Adidas ZX 5K BOOST",
// 		"price": 23999,
// 		"imgUrl": "/img/sneakers/12.jpg"
// 	}
// ]

const Home = ({cards, isLoading, opened, setOpened, cartItems, removeCartItem, addCartItem, checkCartItem}) => {
	const [searchValue, setSearchValue] = useState('')
	
	const {isDark} = useTheme();
	
	const filteredItems = cards.filter((item) =>
		item.title.toLowerCase().includes(searchValue.toLowerCase())
	)
	
	const renderItems = () => {
		return (isLoading ? [...Array(8)] : filteredItems)
			.map((item, index) => (
				<Card key={index} cartItems={cartItems} isLoading={isLoading} isFavorite={false} addCartItem={addCartItem} checkCartItem={checkCartItem} {...item}/>
			))
	}
	
	return (
		<main className={cn('home', {
			dark: isDark === true,
		})}>
			{opened ? <Drawer isDark={isDark} setOpened={setOpened} cartItems={cartItems} removeCartItem={removeCartItem} checkCartItem={checkCartItem}/> : ''}
			<div className="topMenu">
				<ul>
					<li>Женщинам</li>
					<li>Мужчинам</li>
					<li>Детям</li>
				</ul>
				<div className="search">
					<input onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue} type="text" placeholder="Поищем?"/>
					<div className="searchBtn">
						<img src="../img/search.svg" alt=""/>
					</div>
				</div>
			</div>
			<SimpleSlider/>
			<h2 className="title">Все кроссовки</h2>
			<div className="cards">
				{renderItems()}
			</div>
			<button className="moreProductsButton">Показать ещё товары</button>
			
			<div className="subscriptionSale">
				<img src="../img/letter.svg" alt=""/>
				<div className="info">
					<p>Скидка 10% за подписку на наши новости</p>
					<form action="">
						<input type="email" placeholder="Введите свой email"/>
						<button>ПОДПИСАТЬСЯ</button>
					</form>
					<a href="">Условия акции</a>
				</div>
			</div>
		</main>
	)
}

export default Home;