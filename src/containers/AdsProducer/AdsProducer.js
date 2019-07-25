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
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "konstrukcje_reklamowe",
		},
		{
			title: "Reklamy świetlne",
			text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "reklamy_swietlne",
		},
		{
			title: "Litery przestrzenne",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "wykonanych_liter_3d",
		},
		{
			title: "Znakowanie obiektów",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "montaz_reklam",
		},
		{
			title: "Materiały pos",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "materialy_pos",
		},
		{
			title: "Stoiska wystawiennicze",
			text:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?",
            icon: "wystawiennicze",
		}
	];
	return (
		<div className={styles.container}>
			<Hero
				mainHeader="Producent reklam wysoka jakość"
				lightTitle="Jak działamy?"
				featuresList={["projekt", "akceptacja", "realizacja"]}
			/>
			<PageContent>
				<Header text="Od projektu do montażu" />
				<TextWithButton
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus suscipit facere, inventore, laudantium porro! Molestiae maiores, dignissimos id neque. Esse aliquid at voluptatem a, sapiente dicta dignissimos velit nemo culpa tempore aspernatur neque, quasi, mollitia fuga perferendis! Quo dicta necessitatibus ducimus temporibus, sint omnis natus officia unde reiciendis provident!"
					button="Skontaktuj się z nami"
				/>
				<OfferGrid gridItems={gridItems} />

				<Header text="Wybrane realizacje" />
				<PhotosGrid folderName="AdsProducer" photosCount={6} />
				<OfferLinks active="producent_reklam" />
				<Contact />
			</PageContent>
		</div>
	);
};

export default AdsProducer;
