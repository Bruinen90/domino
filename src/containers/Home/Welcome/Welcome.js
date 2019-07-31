import React from "react";
import styles from "./Welcome.module.css";
import PageContent from "../../PageContent/PageContent";
import Branch from "../../../components/Branch/Branch";

const Welcome = props => {
	const linksList = [
		{
			text: "Producent reklam",
			target: "producent_reklam"
		},
		{
			text: "Agencja reklamowa",
			target: "agencja_reklamowa"
		},
		{
			text: "Montaż reklam",
			target: "montaz_reklam"
		},
		{
			text: "Usługi wysokościowe",
			target: "montaz_reklam",
			icon: "koszowy"
		}
	];
	const linksOutput = linksList.map((link, index) => {
		if (index + 1 === linksList.length) {
			return (
				<Branch
					description={link.text}
					target={link.target}
					key={link.text}
					light={true}
					icon={link.icon}
				/>
			);
		}
		return (
			<Branch
				description={link.text}
				target={link.target}
				key={link.text}
			/>
		);
	});

	const background =
		window.innerWidth > 768
			? require("../../../img/backgrounds/home.jpg")
			: require("../../../img/backgrounds/mobile/home.jpg");
	return (
		<div
			className={styles.container}
			style={{
				backgroundImage: `url(${background})`,
				height: window.innerHeight + "px"
			}}
		>
			<PageContent>
				<div className={styles.content}>
					<div className={styles.sloganCont}>
						<h2 className={styles.slogan}>Profesjonalna obsługa</h2>
					</div>
					<div className={styles.mainBranch}>{linksOutput}</div>
				</div>
			</PageContent>
		</div>
	);
};
export default Welcome;
