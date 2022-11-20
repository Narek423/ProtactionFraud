import React, { FC } from "react";
import styles from "./styles.module.scss";

type ProtectionAppStapProps = {
	text: string;
	num: string;
};

const ProtectionAppStap: FC<ProtectionAppStapProps> = (props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.num}>{props.num}</div>
			<br />
			<div className={styles.text}>{props.text}</div>
		</div>
	);
};

export default ProtectionAppStap;
