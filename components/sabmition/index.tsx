import React, { FC } from "react";
import styles from "./styles.module.scss";

const Sabmition: FC = () => {
	return (
		<div className={styles.body}>
			<div className={styles.title}>
				Don't want to be the next victim of <br /> <span>Title Fraud?</span>
			</div>
			<img src='/line.svg' />
			<div className={styles.text}>
				Time to register and protect your most valuable asset- your Home and
				family. Registration is simple and secure and our technology will
				identify and register your property in minutes.
			</div>
			<div className={styles.button}>
				<img src='/mainLogo.svg' />I want to be protected
			</div>
		</div>
	);
};

export default Sabmition;
