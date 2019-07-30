import React from "react";
import styles from "./ContactPage.module.css";
import Hero from "../../components/Hero/Hero";
import PageContent from "../PageContent/PageContent";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";

const ContactPage = props => {
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="Kontakt"
				lightTitle="Jak działamy?"
                featuresList={["projekt", "akceptacja", "realizacja"]}
                img="home"
			/>
			<PageContent>
				<Header
					text={
						<React.Fragment>
							Zapraszamy do współpracy<br />
							skontaktuj się z nami telefonicznie lub mailowo
						</React.Fragment>
					}
					wide={true}
				/>

				<Contact />
			</PageContent>
		</div>
	);
};

export default ContactPage;
