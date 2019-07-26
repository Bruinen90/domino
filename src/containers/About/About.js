import React from "react";
import styles from "./About.module.css";
import Hero from "../../components/Hero/Hero";
import PageContent from "../PageContent/PageContent";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import Button from "../../components/Button/Button";
import OfferLinks from "../../components/OfferLinks/OfferLinks";

const About = props => {
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="O nas"
				lightTitle="Jak działamy?"
				featuresList={["projekt", "akceptacja", "realizacja"]}
			/>
			<PageContent>
				<Header
					text={
						<React.Fragment>
							Dlaczego warto <br />
							nam zaufać{" "}
						</React.Fragment>
					}
					wide={true}
				/>
				<div className={styles.text}>
					<p>
						Wiedza, pracowitość, elastyczność – to domena naszej
						marki, która układa się jak domino i wszystko musi
						pasować. <br />
						Doświadczenie, rezolutność, dyscyplina – to domeny
						zespołu pracowników. Takie połączenie od 2009 roku
						skutkuje wieloma sukcesami, miłą atmosferą oraz bogatym
						portfelem zadowolonych Klientów
					</p>
					<div className={styles.buttonCont}>
						<Button caption="Skontaktuj się z nami" dark={true} />
					</div>
					<p>
						<b>Jesteśmy agencją 360.</b> To program zarządzania marką.
						Składa się z wypracowanych przez lata narzędzi, dzięki
						którym analiza, dalekowzroczne planowanie i
						profesjonalna realizacja strategii marketingowych stają
						się łatwiejsze, szybsze i efektywniejsze.
					</p>
					<p>
						Nasza oferta to przede wszystkim strategie komunikacji.
						Łączymy działania z zakresu ATL, BTL, PR, multimediów i
						Internetu. <b>Szczególną uwagę zwracamy na sposób łączenia
						i dobór narzędzi. Zawsze pamiętamy o efektywności.</b>
					</p>
					<p>
						Dlatego zacznijmy wspólnie od słów. Porozmawiajmy.
						Opowiedz nam o swojej marce oraz określ, co chcesz
						osiągnąć zgłaszając się do nas. Z pewnością stworzymy
						razem projekt, który sprzeda Twój produkt, i z którego
						my także będziemy dumni. Zapraszamy do kontaktu.
					</p>
				</div>
				<OfferLinks
					specialHeader={
						<React.Fragment>
							Sprawdź naszą <br />
							ofertę
						</React.Fragment>
					}
				/>
				<Contact />
			</PageContent>
		</div>
	);
};

export default About;
