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
				mainHeader="Skontaktuj się z nami"
				lightTitle="Jak działamy?"
                featuresList={["projekt", "akceptacja", "realizacja"]}
                img="kontakt"
			/>
			<PageContent>
				<Header
					text={
						<React.Fragment>
							Zapraszamy do kontaktu
						</React.Fragment>
					}
                    wide={false}
                    bottomMargin={true}
				/>

				<Contact />
			</PageContent>
		</div>
	);
};

export default ContactPage;
