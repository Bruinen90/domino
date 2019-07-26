import React from "react";
import styles from "./Agency.module.css";
import Hero from "../../components/Hero/Hero";
import PageContent from "../PageContent/PageContent";
import Header from "../../components/Header/Header";
import TextWithButton from "../../components/TextWithButton/TextWithButton";
import OfferGrid from "../../components/OfferGrid/OfferGrid";
import PhotosGrid from "../../components/PhotosGrid/PhotosGrid";
import OfferLinks from "../../components/OfferLinks/OfferLinks";
import Contact from "../../components/Contact/Contact";

const Agency = props => {
	const gridItems = [
		{
			title: "Druk wielkoformatowy",
			text: [
                "Banery na budynki, płoty - banery, siatki mesh",
                "Reklamy na witryny sklepowe – folie zwykłe i One Way Vision",
                "Billboard’y i plakaty uliczne – papier blubeck",
                "Naklejki – folie, folie samoprzylepne, folie ",
                "Plakaty - papier 140g, 200g",
                "Powiększenia fotografii - papier foto 230g",
                "Reklamy na pojazdach - folie magnetyczne, folie samoprzylepne wylewane",
                "Tapety ścienne",
                "Wydruk zdjęć na płótnie - blejtramy",
                "Reklamy podświetlane do kasetonów - folie do podświetleń, banery do podświetleń",

            ],
            icon: "druk_wielkoformatowy",
		},
		{
			title: "Druk UV, cyfrowy",
			text: [
                "Plansze reklamowe - szyldy, druk na płytach PCV",
                "Druk na szkle (np. do wystroju wnętrz)",
                "Druk na płytach CD",
                "Wydruki niskonakładowe",
                "Bilety",
            ],
            icon: "druk_cyfrowy"
		},
		{
			title: "Druk offsetowy",
			text: [
                "wizytówki ",
                "ulotki",
                "katalogi",
                "kalendarze",
                "teczki ",
                "papiery firmowe",
                "notesy",
                "broszury ",
            ],
            icon: "druk_offsetowy",
		},
		{
			title: "Matriały reklamowe ",
			text: [
                "Znakujemy odzież ",
                "potykacze",
                "flagi, bumpery",
                "roll-upy",
                "materiały POS ",
                "stoiska targowe",
                "notesy",
                "torby reklamowe",
                "standy reklamowe",
                "horeca - materiały dla gastronomii i hoteli",
                "słodycze reklamowe ",
            ],
            icon: "materialy_reklamowe",
		},
		{
			title: "Gadżety reklamowe",
			text: [
                "dlugopisy",
                "breloki",
                "otwieracze ",
                "klipsy magentyczne",
                "buttony, piny",
                "mini flagi",
                "piłki plażowe",
                "kubki",
                "i wiele, wiele innych",
            ],
            icon: 'gadzety',
		}
	];
	const lightGridItems = [
		{
			title: "Marketing online",
			text:
                "Wspieramy naszych klientów w biznesie. Zapewniamy pełną obsługę e-marketingową, pomagamy ich markom zdobywać uznanie i wyprzedzać konkurencję!",
            icon: 'marketing_online',
		},
		{
			title: "Branding care",
			text:
                "Realizujemy kompleksowe zadania związane z kreowaniem logo, tworzeniem identyfikacji wizualnej i opracowaniu zasad komunikacji graficznej.",
            icon: 'agencja_reklamowa'
		},
		{
			title: "Projektowanie graficzne",
			text:
                "Zajmujemy się projektowaniem graficznym, tworzeniem reklam i nośników wizerunkowych na potrzeby druku, Internetu, jak również na potrzeby filmowe.",
            icon: "projekowanie_graficzne"
		}
	];
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="Agencja reklamowa 360°"
				lightTitle="Jak działamy?"
				featuresList={["projekt", "akceptacja", "realizacja"]}
			/>
			<PageContent>
				<Header text="Od projektu po realizacje" />
				<TextWithButton
					text={<React.Fragment><p>Jesteśmy agencją reklamową full service. Od 10  lat na rynku. 
                    Najpierw słuchamy, następnie dyskutujemy, potem działamy.
                    </p><p>
                    Powiedz nam czego oczekujesz, a my zajmiemy się resztą - zaawansowane projekty graficzne, instalacje reklamowe, wydruki wielkoformatowe lub kampanie reklamowe na zlecenie - to tylko część działań, które realizujemy każdego dnia. </p>
                    </React.Fragment>}
					button="Skontaktuj się z nami"
				/>
				<OfferGrid gridItems={gridItems} />
				<OfferGrid gridItems={lightGridItems} light={true} />

				<Header text="Wybrane realizacje" />
				<PhotosGrid folderName="agency" photosCount={6} />
				<OfferLinks active="agencja_reklamowa" />
				<Contact />
			</PageContent>
		</div>
	);
};

export default Agency;
