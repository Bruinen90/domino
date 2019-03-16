import React from 'react';
import styles from './Mounting.module.css';
import Hero from '../../components/Hero/Hero';
import PageContent from '../PageContent/PageContent';
import Header from '../../components/Header/Header';
import TextWithButton from '../../components/TextWithButton/TextWithButton';
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid';
import OfferLinks from '../../components/OfferLinks/OfferLinks';
import Contact from '../../components/Contact/Contact';
import SideBySide from '../../components/SideBySide/SideBySide';

const Mounting = (props) => {
    const sideBySideData = [
        {
            title: 'Montaż reklam',
            text: <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maxime dolor ipsum totam laborum laboriosam adipisci doloremque dicta quae dignissimos eligendi asperiores veritatis impedit ipsam architecto obcaecati, minima, id quod.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium accusamus excepturi illum necessitatibus, voluptatibus quisquam minima voluptatum natus sunt asperiores.
                    </p>
                </div>
        },
        {
            title: 'Usługi zwyżką',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, consectetur. Inventore blanditiis veniam consequatur, recusandae temporibus, doloribus. Vero, animi fugiat excepturi in quidem optio maxime. Dolores harum tenetur possimus itaque facere nesciunt, reprehenderit magnam? Obcaecati adipisci cumque ut reprehenderit enim.',
            img: 'zwyzka.png'
        },

    ]
    return(
        <div className={styles.container}>
            <Hero
                mainHeader = "Montaż reklam usługi zwyżką"
                lightTitle = "Jak działamy?"
                featuresList = {['projekt', 'akceptacja', 'realizacja']}
            />
            <PageContent>
                <TextWithButton
                    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta temporibus suscipit facere, inventore, laudantium porro! Molestiae maiores, dignissimos id neque. Esse aliquid at voluptatem a, sapiente dicta dignissimos velit nemo culpa tempore aspernatur neque, quasi, mollitia fuga perferendis! Quo dicta necessitatibus ducimus temporibus, sint omnis natus officia unde reiciendis provident!"
                    button = "Skontaktuj się z nami"
                />

                <SideBySide
                    data = {sideBySideData}
                />

                <Header
                    text = "Wybrane realizacje"
                />
                <PhotosGrid
                    folderName= "Mounting"
                    photosCount = {6}
                />
                <OfferLinks
                    active = "montaz_reklam"
                />
                <Contact />
            </PageContent>
        </div>
    );
};

export default Mounting;
