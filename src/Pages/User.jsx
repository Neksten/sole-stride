import React from "react";
import Drawer from "../components/Drawer/Drawer";
import Card from "../components/Card/Card";
import useTheme from "../hooks/useTheme";
import cn from "classnames";

const orders = [
	{
		id: 1,
		numberOrders: "№230222-668577",
		products: [
			{
				"id": 7,
				"title": "Мужские кроссовки Adidas OZWEEGO",
				"price": 17999,
				"imgUrl": "/img/sneakers/7.jpg"
			},
			{
				"id": 9,
				"title": "Мужские кроссовки Reebok Zig Kinetica 2.5 Edge",
				"price": 15999,
				"imgUrl": "/img/sneakers/9.jpg"
			},
		]
	},
	{
		id: 2,
		numberOrders: "№230222-668576",
		products: [
			{
				"id": 11,
				"title": "Мужские кроссовки Adidas OZRAH",
				"price": 19999,
				"imgUrl": "/img/sneakers/4.jpg"
			}
		]
	}
]

const User = ({opened, setOpened, cartItems, removeCartItem, isLoading}) => {
	const {isDark} = useTheme();
	
	return (
		<main className={cn('user', {
			dark: isDark === true,
		})}>
			{opened ? <Drawer isDark={isDark} setOpened={setOpened} cartItems={cartItems} removeCartItem={removeCartItem}/> : ''}
			<h2 className="title">Личный кабинет</h2>
			<div className="wrapper">
				<div className="content">
					<div className="item">
						<h4>ФИО</h4>
						<div className="itemBody">
							<label htmlFor="">
								<h5>Имя</h5>
								<input type="text" placeholder="Введите имя"/>
							</label>
							<label htmlFor="">
								<h5>Фамилия</h5>
								<input type="text" placeholder="Введите фамилию"/>
							</label>
							<label htmlFor="">
								<h5>Отчество</h5>
								<input type="text" placeholder="Введите отчество"/>
							</label>
						</div>
					</div>
					<div className="item">
						<h4>Электронная почта</h4>
						<div className="itemBody">
							<label htmlFor="">
								<h5>Почта</h5>
								<input type="text" placeholder="Введите почту"/>
							</label>
						</div>
					</div>
					<div className="item">
						<h4>Номер телефона</h4>
						<div className="itemBody">
							<label htmlFor="">
								<h5>Телефон</h5>
								<input type="text" placeholder="Введите телефон"/>
							</label>
						</div>
					</div>
					<div className="addresses">
						<h4>Мои адреса</h4>
						<div className="button">Добавить адрес +</div>
					</div>
					<div className="orders">
						<h4>Заказы 5</h4>
						<div className="orderItems">
							{orders.map((item, index) => (
								<div key={index} className="orderItem">
									<p>{item.numberOrders} на 25 999 руб.</p>
									<div className="orderProducts">
										{item.products.map((item, index) => (
											<Card key={index} isLoading={isLoading} isFavoriteBtn={false} isCartBtn={false} {...item}/>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<nav className="saidbar">
					<div className="item">
						<p>ФИО</p>
					</div>
					<div className="item">
						<p>Электронная почта</p>
					</div>
					<div className="item">
						<p>Номер телефона</p>
					</div>
					<div className="item">
						<p>Адреса</p>
					</div>
					<div className="item">
						<p>Заказы</p>
					</div>
				</nav>
			</div>
		</main>
	)
}

export default User;