import React from "react";
import styles from "./Customers.module.css";
import PageContent from "../../PageContent/PageContent";
import Slider from "../../../components/Slider/Slider.js";

const Customers = props => {
	const companiesList = [
        "besco",
        "biedronka",
        "brw",
        "diverse",
        "elbud",
        "esotiq",
        "max_elektro",
        "ortorech",
        "stader",
        "stokrotka",
        "tmobile",
        "vitamin_shop",
	];
	const compCount = companiesList.length;
	const logosPerSlide = window.innerWidth > 768 ? 7 : 3;
	const slidesCount = Math.ceil(compCount / logosPerSlide);
	return (
		<PageContent>
			<div className={styles.container}>
				<div className={styles.headerCont}>
					<h2 className={styles.gradientHeader}>
						Do tej pory zaufali {window.innerWidth < 768 && <br />}
						nam
					</h2>
					<div className={styles.line} />
					<div className={styles.arrowsContDesktop}>
						{/* Place for arrows */}
					</div>
				</div>
				<div className={styles.sliderCont}>
					<Slider
						companiesList={companiesList}
						logosPerSlide={logosPerSlide}
						compCount={compCount}
						slidesCount={slidesCount}
					/>
				</div>
			</div>
		</PageContent>
	);
};

export default Customers;
