import React from "react";
import styles from "./Mounting.module.css";
import Hero from "../../components/Hero/Hero";
import PageContent from "../PageContent/PageContent";
import Header from "../../components/Header/Header";
import TextWithButton from "../../components/TextWithButton/TextWithButton";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import OfferLinks from "../../components/OfferLinks/OfferLinks";
import Contact from "../../components/Contact/Contact";
import SideBySide from "../../components/SideBySide/SideBySide";

const Mounting = props => {
	const sideBySideData = [
		{
			title: "Montaż reklam",
			text: (
				<div>
					Montujemy wszystko to, co wyprodukujemy nie tylko na terenie
					Bieszczad, ale w każdym miejscu zleconym przez Klienta – od
					prostych banerów, większych siatek wielkoformatowych,
					poprzez kasetony, litery przestrzenne, tablice, czy
					wolno-stojące pylony, billboardy. <br />
					Wyklejamy powierzchnie różnymi foliami – przeprowadzając
					kampanie oklejania placówek w całej Polsce przy
					wykorzystaniu kilku ekip montażowych. <br />
					Oklejamy floty transportowe u Klienta jak i w siedzibie
					naszej firmy.
					<br />
					Dostarczamy towar we wskazane miejsce lub wysyłamy za
					pośrednictwem firmy kurierskiej.
				</div>
			)
		},
		{
			title: "Usługi zwyżką",
			text: (
				<div>
					Wykonujemy szeroki zakres usług wysokościowych. Wieloletnie
					doświadczenie i wiedza w zakresie prac wysokościowych
					sprawia, że podejmujemy się skomplikowanych i wymagających
					zleceń. Naszą najlepszą reklamą są referencje i ciągle
					powiększające się grono klientów zadowolonych z naszych
					usług. <br />
					Nasza doświadczona kadra świetnie sprawdzi się w każdej
					pracy na wysokości, gdzie utrudniony jest dostęp. Pomożemy
					Ci załatać ubytki w elewacji, usunąć usterkę, wyczyścić
					rynny, umyć elewację, pomalować dach, przyciąc drzewo
				</div>
			),
			img: "zwyzka.png"
		}
	];
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="Montaż reklam"
				lightTitle="Jak działamy?"
                featuresList={["projekt", "akceptacja", "realizacja"]}
                img="montaz_reklam"
			/>
			<PageContent>
				<TextWithButton
					text="Wiedza, pracowitość, elastyczność – to domena naszej marki, która układa się jak domino i wszystko musi pasować. 
                    Doświadczenie, rezolutność, dyscyplina – to domeny zespołu pracowników.
                    Takie połączenie od 2009 roku skutkuje wieloma sukcesami, miłą atmosferą oraz bogatym portfelem zadowolonych Klientów
                    "
					button="Skontaktuj się z nami"
				/>

				<SideBySide data={sideBySideData} />

				<Header text="Wybrane realizacje" />
				<PhotosGrid imgPrefix="montaz_reklam" photosCount={11} />
				<OfferLinks active="montaz_reklam" />
				<Contact />
			</PageContent>
		</div>
	);
};

export default Mounting;
