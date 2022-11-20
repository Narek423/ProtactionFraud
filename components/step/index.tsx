import React, { FC } from "react";
import styles from "./styles.module.scss";

type StepProps = {
	img: string;
	title: string;
	text: string;
	num: string;
};

const Step: FC<StepProps> = (props) => {
	return (
		<div className={styles.body}>
			<div>
				<img src={props.img} alt='' />
			</div>
			<br />
			<div className={styles.title}>{props.title}</div>
			<div className={styles.text}>{props.text}</div>
			<div className={styles.num}>{props.num}</div>
		</div>
	);
};

export default Step;
