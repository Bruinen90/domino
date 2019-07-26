import React from "react";
import styles from "./GridItem.module.css";
import iconDark from "../../../img/icons/bilboardDark.png";
import iconLight from "../../../img/icons/bilboardLight.png";
import ReactSVG from "react-svg";

const GridItem = props => {
    let textOutput = props.text;
    if(Array.isArray(textOutput)) {
        textOutput = textOutput.map(listItem => {
            return(
                <li className={styles.listItem}>
                    {listItem}
                </li>
            )
        });
    } 
	return (
		<div
			className={[
				styles.container,
				props.light && styles.light,
				props.img && styles.withImg
			].join(" ")}
		>
			<div className={styles.headerCont}>
				<div style={{color: props.light ? '#17105e' : '#41eeee'}}>
					<ReactSVG
						src={require(`../../../img/icons/${props.icon}.svg`)}
						className={styles.icon}
					/>
				</div>
				<div className={styles.line} />
				<h3 className={styles.header}>{props.title}</h3>
			</div>
            <div className={styles.text}>
                {textOutput}
            </div>
			{props.img && (
				<img
					src={require(`../../../img/${props.img}`)}
					alt={props.imgAlt}
					className={styles.img}
				/>
			)}
		</div>
	);
};

export default GridItem;
