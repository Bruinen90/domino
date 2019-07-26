import React from "react";
import styles from "./SymSlides.module.css";
import Button from "../../../components/Button/Button";
import PageContent from "../../PageContent/PageContent";
import transparentLogo from "../../../img/transparentLogo.png";

const SymSlides = props => {
	return (
		<PageContent>
			<section className={styles.container}>
				<div className={styles.slides}>
					<div className={[styles.slide, styles.leftSlide].join(" ")}>
						<h2 className={styles.gradientHeader}>
							Profesjonalna <br /> obsługa
						</h2>
						<div className={styles.gradientLine} />
						<img
							src={transparentLogo}
							alt="Transparent Domino logo"
							className={styles.transparentLogo}
						/>
					</div>
					<div
						className={[styles.slide, styles.rightSlide].join(" ")}
					>
						<h2 className={styles.header}>Profesjonalna obsługa</h2>
						<p className={styles.text}>
							Wiemy jak robić dobre reklamy. Mamy duże
							doświadczenie w projektowaniu i wykonywaniu
							wszelkiego rodzaju nośników reklamowych. Z sukcesem
							zrealizowaliśmy wiele projektów dla małych oraz
							dużych firm. W naszej pracy stosujemy najlepsze
							materiały i rozwiązania, by skutecznie wspierać
							budowę profesjonalnego wizerunku naszych klientów.
						</p>
						<Button width={60} />
					</div>
				</div>
			</section>
		</PageContent>
	);
};

export default SymSlides;
