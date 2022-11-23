import React, { FC } from "react";
import styles from "./styles.module.scss";

const FooterInformation: FC = () => {
	const footerButtonData = [
		["Company", "About", "Press", "Blog", "Partnerships"],
		["Useful Links", "FAQ’s", "Contact Us", "How it Works"],
		["Legacy", "Privacy", "Terms", "Cookies"],
		["Mobile"],
	];

	return (
		<div className={styles.body}>
			<div className={styles.pricing_container}>
				{footerButtonData.map((item, index) => {
					return (
						<div className={styles.pricing_col} key={Math.random() + index}>
							{item.map((elem, index) => {
								return (
									<div
										className={
											!index
												? styles.pricing_items_header
												: styles.pricing_items
										}
										key={Math.random() + index}
									>
										{elem}
									</div>
								);
							})}
							{footerButtonData.length - 1 === index ? (
								<>
									<div className={styles.buttonApp}>
										<img src='/appstore.svg' />
									</div>
									<div className={styles.buttonPlay}>
										<img src='/googleplay.svg' />
									</div>
								</>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FooterInformation;
