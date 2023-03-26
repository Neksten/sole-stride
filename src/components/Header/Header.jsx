import React from "react";
import styles from "./Header.module.scss"
import useTheme from "../../hooks/useTheme";
import classNames from 'classnames/bind';
import {NavLink} from "react-router-dom";

let cx = classNames.bind(styles);

const Header = ({setOpened}) => {
	const {isDark, setIsDark} = useTheme();
	
	return (
		<header className={cx(`${styles.header}`, {
			dark: isDark === true,
		})}>
			<NavLink to="/">
				<div className={styles.left}>
					<div className={styles.logo}>
						<img src="../img/logo-black.svg" alt=""/>
					</div>
					<div className={styles.logoInfo}>
						<h5>Sole <span>Stride</span></h5>
						<p>Сделай шаг в лучших кроссовках</p>
					</div>
				</div>
			</NavLink>
			<div className={styles.right}>
				<div className={styles.icons}>
					<NavLink to="/user">
						<div className={styles.icon}>
							<img src="../img/lk.svg" alt=""/>
						</div>
					</NavLink>
					<NavLink to="favorites">
						<div className={styles.icon}>
							<img src="../img/heart.svg" alt=""/>
						</div>
					</NavLink>
					<div onClick={() => {setOpened(true)}} className={styles.icon}>
						<img src="../img/cart.svg" alt=""/>
					</div>
				</div>
				<div onClick={() => setIsDark(!isDark)} className={styles.themeButton}>
					<div className={styles.ellipse}></div>
					<div className={styles.light}>
						<img src="../img/sun.svg" alt="sun"/>
					</div>
					<div className={styles.dark}>
						<img src="../img/moon.svg" alt="moon"/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header