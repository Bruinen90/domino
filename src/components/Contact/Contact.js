import React from "react";
import styles from "./Contact.module.css";
import PageContent from "../../containers/PageContent/PageContent";

const Contact = props => {
	const currYear = new Date().getFullYear();
	return (
		<PageContent>
			<div className={styles.container}>
				<div className={styles.dataCont}>
					<div className={[styles.rec, styles.recLight].join(" ")}>
						<img
							src={require("../../img/icons/phone.svg")}
							alt="Phone number"
							className={styles.icon}
						/>
						<div className={styles.text}>
							Zapraszamy do współpracy.
						</div>
						<div className={styles.line} />
						<h2 className={styles.phone}>
							<a
								href="tel: +48 <br/> <strong>790 230 003"
								className={styles.link}
							>
								+48 <br /> <strong>790 230 003</strong>
							</a>
						</h2>
					</div>
					<div className={styles.rec}>
						<h2 className={styles.header}>Adres</h2>
						<div className={styles.text}>
							Komańcza 10 <br />
							38-500 Sanok
						</div>
						<div className={styles.line} />
						<a
							href="mailto: biuro@dominogrupa.pl"
							className={styles.mail}
						>
							biuro@dominogrupa.pl
						</a>
					</div>
					<div className={styles.map}>
						<a
							href="https://www.google.pl/maps/place/Domino+Grupa/@49.3453899,22.0876898,14z/data=!4m5!3m4!1s0x473c6d8231b226f7:0x181075e42e05f45b!8m2!3d49.3477292!4d22.085106"
							target="_blank"
							className={styles.mapLink}
						/>
					</div>
					<div className={styles.rec}>
						<h2 className={styles.header}>Oferta</h2>
						<ul className={styles.list}>
							<li className={styles.item}>producent reklam</li>
							<li className={styles.item}>litery 3D</li>
							<li className={styles.item}>kasetony świetlne</li>
							<li className={styles.item}>oklejanie aut</li>
							<li className={styles.item}>usługi wysokościowe</li>
							<li className={styles.item}>agencja reklamowa</li>
							<li className={styles.item}>malowanie dachów</li>
						</ul>
						<div className={styles.line} />
					</div>
				</div>
				<section className={styles.footer}>
					<div className={styles.footerText}>
						{window.innerWidth >= 768 && "All rigths reserved"} ©
						{currYear} Domino Group
					</div>
					<div className={styles.footerLine} />
					<div className={styles.socials}>
						<a href="" className={styles.socialIcon}>
							f
						</a>
						<a href="" className={styles.socialIcon}>
							in
						</a>
						<a href="" className={styles.socialIcon}>
							t
						</a>
					</div>
				</section>
			</div>
		</PageContent>
	);
};

export default Contact;
