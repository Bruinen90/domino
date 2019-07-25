import React from "react";
import styles from "./ChallangeBlock.module.css";
// import icon from "../../img/icons/bilboardLight.png";
import ReactSVG from 'react-svg';

const ChallangeBlock = props => {
	let contStyle;
	if (props.moveLeft && window.innerWidth >= 768) {
		contStyle = { marginLeft: "-100%" };
	}
	return (
		<div className={styles.container} style={contStyle}>
			<div className={styles.top}>
				<div className={styles.iconWrapper}>
					<ReactSVG src={require(`../../img/icons/${props.icon}.svg`)} className={styles.icon} />
				</div>
				<h4 className={styles.number}>{props.number}</h4>
			</div>
			<div className={styles.description}>{props.title}</div>
		</div>
	);
};

export default ChallangeBlock;
