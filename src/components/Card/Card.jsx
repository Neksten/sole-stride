import React, {useEffect, useState} from "react";
import styles from "./Card.module.scss"
import useTheme from "../../hooks/useTheme";
import classNames from 'classnames/bind';
import ContentLoader from "react-content-loader"

let cx = classNames.bind(styles);

const Card = ({id, title, price, imgUrl, isLoading, isFavorite, addCartItem, checkCartItem, cartItems, isFavoriteBtn = true, isCartBtn = true}) => {
	const {isDark} = useTheme()
	const [checked, setChecked] = useState(false)
	const [favorite, setFavorite] = useState(isFavorite)
	
	useEffect(() => {
		if (checkCartItem && checkCartItem({idCard: id})) {
			setChecked(true)
		}
	}, [isLoading])
	
	const addToFavorite = () => {
		setFavorite(!favorite)
	}
	
	const addToCart = () => {
		addCartItem({id: cartItems.length + 1, idCard: id, title, price, imgUrl})
		setChecked(!checked)
	}
	
	return (
		isLoading
			? <ContentLoader
			speed={2}
			width={212}
			height={262}
			viewBox="0 0 212 262"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="0" y="0" rx="10" ry="10" width="212" height="126" />
			<rect x="0" y="140" rx="3" ry="3" width="212" height="20" />
			<rect x="0" y="173" rx="3" ry="3" width="121" height="20" />
			<rect x="0" y="232" rx="8" ry="8" width="106" height="30" />
			<rect x="180" y="230" rx="8" ry="8" width="32" height="32" />
		</ContentLoader>
			:
		<>
			<div className={cx(`${styles.card}`, {
				dark: isDark === true,
			})}>
				{isFavoriteBtn &&
					<div onClick={addToFavorite} className={styles.cardAddFavorite}>
						<img src={favorite ? "../img/favorite-fill.svg" : "../img/favorite.svg"} alt=""/>
					</div>
				}
				<div className={styles.cardImage}>
					<img src={imgUrl} alt="sneaker"/>
				</div>
				<div className={styles.cardTitle}>{title}</div>
				<div className={styles.cardInfo}>
					<div className={styles.cardPrice}>
						<p >Цена:</p>
						<span>{price} руб.</span>
					</div>
					{isCartBtn &&
						<div onClick={addToCart} className={styles.cardAddCart}>
							<img src={checked ? "../img/checked.svg" : "../img/plus.svg"} alt=""/>
						</div>
					}
				</div>
			</div>
		</>
	)
}

export default Card;