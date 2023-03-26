import React from "react";
import classNames from 'classnames/bind';
import useTheme from "../../hooks/useTheme";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './SimpleSlider.module.scss'

let cx = classNames.bind(styles);

const SimpleSlider = () => {
	const {isDark} = useTheme();
	
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<Slider className={cx(`${styles.slider}`, {
			dark: isDark === true,
		})} {...settings}>
			<div className={styles.sliderItem}>
				<div className={styles.sliderInfo}>
					<h3><span>GUCCIMAZE Ozrah</span>, Collection!</h3>
					<button>ПОДРОБНЕЕ</button>
				</div>
				<div className={styles.sliderImage}>
					<img src="../img/slider-slide-1.png" alt=""/>
				</div>
			</div>
			<div className={styles.sliderItem}>
				<div className={styles.sliderInfo}>
					<h3><span>GUCCIMAZE Ozrah</span>, Collection!</h3>
					<button>ПОДРОБНЕЕ</button>
				</div>
				<div className={styles.sliderImage}>
					<img src="../img/slider-slide-1.png" alt=""/>
				</div>
			</div>
		</Slider>
	)
}

export default SimpleSlider;

