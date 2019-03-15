import React from 'react';
import styles from './Agency.module.css';
import Hero from '../../components/Hero/Hero';
import PageContent from '../PageContent/PageContent';
import Header from '../../components/Header/Header';
import TextWithButton from '../../components/TextWithButton/TextWithButton';
import OfferGrid from '../../components/OfferGrid/OfferGrid';
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid';

const Agency = (props) => {
    const gridItems = [
        {
            title: "Druk wielkoformatowy",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
        {
            title: "Druk wielkoformatowy",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
        {
            title: "Druk wielkoformatowy",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
        {
            title: "Druk wielkoformatowy",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
        {
            title: "Druk wielkoformatowy",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
    ]
    const lightGridItems = [
        {
            title: "Marketing online",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
        {
            title: "Branding care",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
        {
            title: "Projektowanie graficzne",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto voluptatum explicabo hic, nihil ullam quas ipsum dicta magnam eius?"
        },
    ]
    return(
        <div className={styles.container}>
            <Hero
                mainHeader = "Agencja reklamowa 360°"
                lightTitle = "Jak działamy?"
                featuresList = {['projekt', 'akceptacja', 'realizacja']}
            />
            <PageContent>
                <Header
                    text = "Od projektu po realizacje"
                />
                <TextWithButton
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus suscipit facere, inventore, laudantium porro! Molestiae maiores, dignissimos id neque. Esse aliquid at voluptatem a, sapiente dicta dignissimos velit nemo culpa tempore aspernatur neque, quasi, mollitia fuga perferendis! Quo dicta necessitatibus ducimus temporibus, sint omnis natus officia unde reiciendis provident!"
                    button = "Skontaktuj się z nami"
                />
                <OfferGrid
                    gridItems = {gridItems}
                />
                <OfferGrid
                    gridItems = {lightGridItems}
                    light = {true}
                />

                <Header
                    text = "Wybrane realizacje"
                />
                <PhotosGrid
                    folderName= "agency"
                    photosCount = {6}
                />
            </PageContent>
        </div>
    );
};

export default Agency;
