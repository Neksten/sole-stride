import React from "react";
import styles from "./Footer.module.scss"
import classNames from 'classnames/bind';
import useTheme from "../../hooks/useTheme";

let cx = classNames.bind(styles);

const Footer = () => {
	const {isDark} = useTheme();
	
	return (
		<footer className={cx({
			dark: isDark === true,
		})}>
			<div className={styles.info}>
				<h5>Sole <span>Stride</span></h5>
				<h4>Контакты</h4>
				<p>ИП Иванов Иван Иванович </p>
				<p>ИНН: 553259888352. ОГРНИП:
					43785349292577. Российская Федерация, Москва</p>
				<span>&copy;&nbsp;Sole Stride, 2023</span>
			</div>
			<div className={styles.item}>
				<h4>О компании</h4>
				<ul>
					<li>Обратная связь</li>
					<li>О нас</li>
					<li>Политика конфиденциальности</li>
					<li>Пользовательское соглашение</li>
				</ul>
			</div>
			<div className={styles.item}>
				<h4>Социальные сети</h4>
				<ul>
					<li>ВКонтакте</li>
					<li>Instagram</li>
					<li>Telegram</li>
				</ul>
			</div>
			<div className={styles.item}>
				<h4>Подарочные карты</h4>
				<ul>
					<li>Электронные подарочные карты</li>
					<li>Физические подарочные карты</li>
					<li>Проверить свой баланс</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer