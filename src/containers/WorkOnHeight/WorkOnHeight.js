import React from "react";
import styles from "./WorkOnHeight.module.css";
import Hero from "../../components/Hero/Hero";
import PageContent from "../PageContent/PageContent";
import Header from "../../components/Header/Header";
import TextWithButton from "../../components/TextWithButton/TextWithButton";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import OfferLinks from "../../components/OfferLinks/OfferLinks";
import Contact from "../../components/Contact/Contact";
import SideBySide from "../../components/SideBySide/SideBySide";

const WorkOnHeight = props => {
	const sideBySideData = [
		{
			title: "Kim jesteśmy",
			text: (
				<div>
					Jesteśmy firmą reklamową zajmującą się kompleksową obsługą
					Klientów, od projektowania przez realizację do montażu.
					Wachlarz możliwości reklamowych, który rozpościeramy przed
					naszymi bardzo szeroki.
					<br />W trosce o jakość naszych usług rozszerzyliśmy swoją
					działalność o kompleksowe usługi wysokościowe wykonywane
					podnośnikiem koszowym.
				</div>
			)
		},
		{
			title: "Co robimy",
			text: (
				<div>
					Oferta naszej firmy jest skierowana zarówno do firm jak i
					osób prywatnych. Za każdym razem dokładamy wszelkich starań,
					aby zagwarantować Państwu najwyższą jakość świadczonych
					przez nas usług. <br />
					Wszystkie zlecenia realizujemy rzetelnie i terminowo.
					Stawiamy na jakość i bezpieczeństwo. Wykonujemy wszelkiego
					rodzaju prace wysokościowe.
				</div>
			),
			img: "zwyzka.png"
		}
	];
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="Usługi zwyżką"
				lightTitle="Wynajem podnośników"
				featuresList={[
                    {
                        title: 'wycinka drzew',
                        icon: 'koszowy',
                    },
                    {
                        title: 'montaż reklam',
                        icon: 'montaz_reklam',
                    },
                    {
                        title: 'mycie i malowanie',
                        icon: 'pomalowanych_dachow',
                    },
                ]}
				img="uslugi_zwyzka"
			/>
			<PageContent>
				<TextWithButton
					text="Wiedza, pracowitość, elastyczność – to domena naszej marki, która układa się jak domino i wszystko musi pasować. 
                    Doświadczenie, rezolutność, dyscyplina – to domeny zespołu pracowników.
                    Takie połączenie od 2009 roku skutkuje wieloma sukcesami, miłą atmosferą oraz bogatym portfelem zadowolonych Klientów
                    "
                    button="Skontaktuj się z nami"
                    buttonTarget='kontakt'
				/>

				<SideBySide data={sideBySideData} />

				<Header text="Wybrane realizacje" />
				<PhotosGrid imgPrefix="uslugi_zwyzka" photosCount={11} />
				<OfferLinks active="uslugi_zwyzka" />
				<Contact />
			</PageContent>
		</div>
	);
};

export default WorkOnHeight;
