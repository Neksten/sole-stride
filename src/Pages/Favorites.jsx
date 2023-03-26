import React from "react";
import cn from "classnames";
import Card from "../components/Card/Card";
import Drawer from "../components/Drawer/Drawer";
import useTheme from "../hooks/useTheme";

const favoriteItems = [
	{
		"id": 7,
		"title": "Мужские кроссовки Adidas OZWEEGO",
		"price": 17999,
		"imgUrl": "/img/sneakers/7.jpg"
	},
	{
		"id": 8,
		"title": "Мужские кроссовки Adidas NITE JOGGER",
		"price": 11199,
		"imgUrl": "/img/sneakers/8.jpg"
	},
	{
		"id": 9,
		"title": "Мужские кроссовки Reebok Zig Kinetica 2.5 Edge",
		"price": 15999,
		"imgUrl": "/img/sneakers/9.jpg"
	},
]

const Favorites = ({opened, setOpened, cartItems, removeCartItem, checkCartItem, isLoading, addCartItem}) => {
	const {isDark} = useTheme();
	
	return (
		<main className={cn('favorite', {
			dark: isDark === true,
		})}>
			{opened ? <Drawer isDark={isDark} setOpened={setOpened} cartItems={cartItems} removeCartItem={removeCartItem}/> : ''}
			<h2 className="title">Избранное</h2>
			{favoriteItems.length > 0 ?
				<div className="favoriteItems">
					{favoriteItems.map((item, index) => (
						<Card key={index} isFavorite={true} isLoading={isLoading} cartItems={cartItems} addCartItem={addCartItem} checkCartItem={checkCartItem} {...item}/>
					))}
				</div>
				:
				<div className="emptyFavorites">
					<div>
						<img src="../img/favorite-fill.svg" alt=""/>
					</div>
					<p>Вы ничего не добавили в избранное</p>
				</div>
			}
		</main>
	)
}

export default Favorites;