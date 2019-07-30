import React from "react";
import { withRouter } from "react-router-dom";
import ReactSVG from 'react-svg';

import styles from "./Branch.module.css";
// import "./Branch_svg.css";
import Button from "../Button/Button";

const Branch = props => {
    const iconUrl = props.icon ? props.icon : props.target;
	const icon = require(`../../img/icons/${iconUrl}.svg`);
	return (
		<div
			className={[
				styles.container,
				(props.light || props.active) && styles.light,
				props.active && styles.active,
				props.solid && styles.solid
			].join(" ")}
			onClick={() => {
				props.history.push(`/${props.target}`);
			}}
		>
			<div className={styles.default}>
                <div style={{color: `${props.active || props.light ? '#17105e' : '#41eeee'}`}}>
                    <ReactSVG
                        src={icon}
                        className={styles.icon}
                    />
                </div>
				<div className={styles.description}>{props.description}</div>
			</div>
			<div className={styles.buttonCont}>
				<Button />
			</div>
		</div>
	);
};

export default withRouter(Branch);
