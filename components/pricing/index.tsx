import React, { FC } from "react";
import styles from "./styles.module.scss";

const Pricing: FC = () => {
	return (
		<div className={styles.body}>
			<div className={styles.title}>
				<span>Title Guardian </span> Pricing
			</div>
			{/* divov gic sarqel */}
			<div className={styles.text}>
				There are 3 subscription plans to suit your personal circumstances.
				Select your required plan and start below.
			</div>
			<div className={styles.pricing_container}>
				{[1, 2, 3].map((elem, index) => {
					return <div key={Math.random() + index}>{elem}</div>;
				})}
			</div>
		</div>
	);
};

export default Pricing;
