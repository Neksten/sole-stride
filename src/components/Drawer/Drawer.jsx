import React, {useEffect, useState} from "react";
import styles from './Drawer.module.scss'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Drawer = ({setOpened, isDark, cartItems, removeCartItem}) => {
	const cartClosed = () => {
		setOpened(false)
	}
	const cost = cartItems.reduce((acc, item) => acc + item.price, 0)
	
	return (
		<div className={cx(`${styles.overlay}`, {
			dark: isDark === true,
		})}>
			<div className={styles.drawer}>
				<div className={styles.top}>
					<h3>Корзина</h3>
					<div onClick={cartClosed} className={styles.close}>
						<img src="../img/cross.svg" alt=""/>
					</div>
				</div>
				{cartItems.length > 0 ?
					<>
						<div className={styles.items}>
							{cartItems.map(({id, idCard, title, price, imgUrl}) => (
								<div key={id} className={styles.item}>
									<div className={styles.image}>
										<img src={imgUrl} alt=""/>
									</div>
									<div className={styles.info}>
										<p>{title}</p>
										<span>{price} руб.</span>
									</div>
									<div onClick={() => removeCartItem({idCard: idCard})} className={styles.delete}>
										<img src="../img/delete.svg" alt=""/>
									</div>
								</div>
							))}
						</div>
						
						<div className={styles.info}>
							<div className={styles.price}>
								<p>Итого: </p>
								<div></div>
								<span>{cost} руб. </span>
							</div>
							<div className={styles.price}>
								<p>Налог 5%: </p>
								<div></div>
								<span>{Math.round((cost * 5) / 100)} руб. </span>
							</div>
							<div className={styles.button}>Оформить заказ <img src="../img/arrow.svg" alt=""/></div>
						</div>
					</>
					: <div className={styles.emptyСart}>
						<img src="../img/empty-cart.svg" alt=""/>
						<h4>Корзина пустая</h4>
						<div onClick={cartClosed} className={styles.button}><img src="../img/arrow-left-btn.svg" alt=""/>Вернуться назад</div>
					</div>
				}
			</div>
		</div>
	)
}

export default Drawer;