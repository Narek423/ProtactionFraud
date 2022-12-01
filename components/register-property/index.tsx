import React, { FC } from "react";
import styles from "./styles.module.scss";

const RegisterProperty: FC = () => {
	return (
		<div className={styles.body}>
			<div className={styles.conteiner}>
				<div className={styles.titel}>
					<img src='/mainLogo.svg' />
					Relax and enjoy your time with those you love and take comfort knowing
					we have you protected
				</div>
				<div className={styles.button}>Register My Property </div>
			</div>
		</div>
	);
};

export default RegisterProperty;
