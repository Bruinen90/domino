import React from "react";
import styles from "./AdsProducer.module.css";
import Hero from "../../components/Hero/Hero";
import PageContent from "../PageContent/PageContent";
import Header from "../../components/Header/Header";
import TextWithButton from "../../components/TextWithButton/TextWithButton";
import OfferGrid from "../../components/OfferGrid/OfferGrid";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import OfferLinks from "../../components/OfferLinks/OfferLinks";
import Contact from "../../components/Contact/Contact";

const AdsProducer = props => {
	const gridItems = [
		{
			title: "Konstrukcje reklamowe",
			text: [
                "konstrukcje stalowe i aluminowe",
                "konstrukcje wolnostojące lub ścienne",
                "konstrukcje wystawiennicze ",
                "witryny ogłoszeniowe",
                "tablice i szyldy reklamowe",
                "złoacza rurowe ",
                "kasetony reklamowe",
            ],
			icon: "konstrukcje_reklamowe"
		},
		{
			title: "Reklamy świetlne",
			text: [
                "kasetony reklamowe",
                "tablice podświetlane",
                "citylighty",
                "oświetlenia LED",
                "pylony i totemy",
                "semafor reklamowy",
                "neony",
            ],
			icon: "reklamy_swietlne"
		},
		{
			title: "Litery przestrzenne",
			text: [
                "litery przestrzenne LED",
                "litery przestrzenne ze styroduru",
                "litery podświetlane z plexi",
            ],
			icon: "wykonanych_liter_3d"
		},
		{
			title: "Znakowanie obiektów",
            text: [
                "banery reklamowe / elewacyjne / wolnostojące",
                "wydruki wielkoformatowe",
                "oklejamy witryny sklepowe / okna",
                "samochody",
                "tabliczki na drzwi",
                "szyldy informacyjne",
                "systemy informacji komunikacji w budynku",
            ],
			icon: "montaz_reklam"
		},
		{
			title: "Materiały pos",
			text: [
                "podajniki na podstawki do piwa",
                "stojaki na ulotki, stojaki na foldery reklamowe, stojaki na wizytówki, ekspozytory POS",
                "standy reklamowe, displaye reklamowe, tablice reklamowe",
                "stojaki reklamowe roll-up, stojaki do banerów, banery",
                "tablice menu, menuboardy",
                "wyspy sklepowe",
                "naklejki, serwetniki, bilownice i inne gadżety",
                "toppery (elementy umieszczane nad stojakiem reklamowym)",
                "lightboxy (reklamy podświetlane, świetliki)",
            ],
			icon: "materialy_pos"
		},
		{
			title: "Stoiska wystawiennicze",
			text: [
                "Kostki reklamowe",
                "Stoiska promocyjne",
                "Stoiska targowe",
                "Ścianki banerowe",
                "Ścianki tekstylne",
            ],
			icon: "wystawiennicze"
		}
	];
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="Producent reklam wysoka jakość"
				lightTitle="Jak działamy?"
                featuresList={["projekt", "akceptacja", "realizacja"]}
                img="producent_reklam"
			/>
			<PageContent>
				<Header text="Od projektu do montażu" />
				<TextWithButton
					text="Od ponad 10 lat zajmujemy się projektowaniem oraz produkcją wraz z montażem szerokiej gamy reklam. Nasze doświadczenie pomaga w doborze odpowiedniego nośnika. Na pierwszym miejscu stawiamy na jakość tak, aby klient był zadowolony. Montujemy reklamy, oklejamy na terenie całej Polski, mimo, że siedziba znajduję się w Bieszczadach."
                    button="Skontaktuj się z nami"
                    buttonTarget='kontakt'
				/>
				<OfferGrid gridItems={gridItems} />

				<Header text="Wybrane realizacje" />
				<PhotosGrid imgPrefix="producent_reklam" photosCount={12} />
				<OfferLinks active="producent_reklam" />
				<Contact />
			</PageContent>
		</div>
	);
};

export default AdsProducer;
