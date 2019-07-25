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
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "druk_wielkoformatowy",
		},
		{
			title: "Druk UV, cyfrowy",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "druk_cyfrowy"
		},
		{
			title: "Druk offsetowy",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "druk_offsetowy",
		},
		{
			title: "Matriały reklamowe ",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "materialy_reklamowe",
		},
		{
			title: "Gadżety reklamowe",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: 'gadzety',
		}
	];
	const lightGridItems = [
		{
			title: "Marketing online",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: 'marketing_online',
		},
		{
			title: "Branding care",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: 'agencja_reklamowa'
		},
		{
			title: "Projektowanie graficzne",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
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
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus suscipit facere, inventore, laudantium porro! Molestiae maiores, dignissimos id neque. Esse aliquid at voluptatem a, sapiente dicta dignissimos velit nemo culpa tempore aspernatur neque, quasi, mollitia fuga perferendis! Quo dicta necessitatibus ducimus temporibus, sint omnis natus officia unde reiciendis provident!"
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
