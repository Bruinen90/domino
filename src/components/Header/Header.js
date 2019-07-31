import React from "react";
import styles from "./Header.module.css";

const Header = props => {
	return (
		<h2
			className={[
				styles.container,
				props.wide && styles.wide,
				props.bottomMargin && styles.bottomMargin,
			].join(" ")}
		>
			<div className={styles.text}>{props.text}</div>
		</h2>
	);
};

export default Header;
