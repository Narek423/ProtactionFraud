import React, { FC } from "react";
import ProtectionAppStap from "../protection-app-stap";
import styles from "./styles.module.scss";

const ProtectionApp: FC = () => {
	const stapData = [
		{
			style: styles.item_1,
			text: "Title Guardian will protect your property and enable friends and family to act as joint guardians. Ideal for elderly owners or people based overseas.",
			num: "01",
		},
		{
			style: styles.item_2,
			text: "Landlords can protect thier income by registering on our portfolio plan . We will provide landlords with complete cover along with updated portfolio valuations.",
			num: "02",
		},
		{
			style: styles.item_3,
			text: "Title Guardian has thousands of integrated data points enabling early stage notification of any activity on your property.",
			num: "03",
		},
	];

	return (
		<div className={styles.body}>
			<div className={styles.head}>
				<div className={styles.title}>
					<span>Protect</span> Your Property
				</div>
				<img src='/line.svg' />
				<div className={styles.text}>
					Title Guardian will protect your property from fraud and identy theft.
					Our smart technology will identify all activity on your property and
					alert you immediately
				</div>
			</div>
			<div className={styles.protecton_ilustretion}>
				<div className={styles.phone}>
					<img src='/phone.svg' />
				</div>
				{stapData.map((elem, index) => {
					return (
						<div key={Math.random() + index} className={elem.style}>
							<ProtectionAppStap text={elem.text} num={elem.num} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProtectionApp;
