import React from 'react';
import styles from './About.module.css';
import Hero from '../../components/Hero/Hero';
import PageContent from '../PageContent/PageContent';
import Header from '../../components/Header/Header';
import Contact from '../../components/Contact/Contact';
import Button from '../../components/Button/Button';
import OfferLinks from '../../components/OfferLinks/OfferLinks';

const About = (props) => {
    return(
        <div className={styles.container}>
            <Hero
                mainHeader = "O nas"
                lightTitle = "Jak działamy?"
                featuresList = {['projekt', 'akceptacja', 'realizacja']}
            />
            <PageContent>
                <Header
                    text = {<React.Fragment>Dlaczego warto <br/>nam zaufać </React.Fragment>}
                    wide = {true}
                />
                <div className={styles.text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem unde modi possimus nulla laboriosam natus aliquid voluptatem delectus velit commodi, quos laudantium dolorum eligendi aliquam laborum vero! Sit illum commodi et cupiditate quas atque deserunt consequuntur temporibus esse reprehenderit doloremque at dolorum ipsa pariatur vitae veritatis repellat consequatur obcaecati illo culpa nihil velit, itaque? Incidunt tempore ea soluta quos voluptatem!
                    </p>
                    <div className={styles.buttonCont}>
                        <Button
                            caption = "Skontaktuj się z nami"
                            dark = {true}
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas possimus ipsam aliquid deleniti quibusdam asperiores aperiam natus illo quos illum nisi velit dolores voluptates, iusto perspiciatis accusamus. Saepe magni, alias veritatis? Voluptates deleniti magni adipisci magnam quo quam tempora sit, dignissimos eos natus accusamus, vel incidunt debitis commodi facere. Accusantium atque, beatae distinctio? Cumque optio animi nihil at qui quod.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, vero. Iure autem pariatur, facilis natus accusamus. Sed doloribus dolore corporis excepturi, illo, eaque, placeat consequatur officia unde ullam explicabo rem quasi dolorum repudiandae soluta. Molestias nostrum perspiciatis nobis delectus, dignissimos quia eaque. Voluptatem, repellat, ex.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque repellendus ea quas deleniti iste, asperiores natus aperiam ad non illum ut libero. Amet, odio nam inventore nihil magnam laboriosam nostrum quidem. Veniam voluptatibus, blanditiis eius est temporibus eveniet doloribus fugiat aut explicabo ratione amet modi officiis nam necessitatibus voluptatem id!
                    </p>

                </div>
                <OfferLinks
                    specialHeader = {<React.Fragment>Sprawdź naszą <br />ofertę</React.Fragment>}
                />
                <Contact />
            </PageContent>
        </div>
    );
};

export default About;
