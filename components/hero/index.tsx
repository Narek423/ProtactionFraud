import React, { FC } from "react";
import styles from "./styles.module.scss";

const Hero: FC = () => {
	const inputImgLinks = ["/snow.svg", "/lowlogo.svg", "/actionFraud.svg"];
	return (
		<div className={styles.head_wrapper}>
			<div className={styles.head}>
				<div className={styles.input_header}>
					<div className={styles.input_header_text}>
						Enter your address to finde out if your property is at risk from
						fraud
					</div>
				</div>
				<div className={styles.input_search}>
					<div className={styles.input_search_wrapper}>
						<label htmlFor='search' className={styles.button_div} />
						<input id='search' placeholder='Start typing your address...' />
					</div>
				</div>
				<div className={styles.input_logos}>
					{inputImgLinks.map((elem, i) => (
						<img key={i + Math.random()} src={elem} />
					))}
				</div>
				<div className={styles.applDownloadLogo}>
					<div>
						<img src='/applDownloadLogo.svg' />
						Download Our App
					</div>
				</div>
				<div className={styles.input_advertiz}>
					<p>
						The level of fraud in the UK is such that it is a <br />
						<strong> National Security </strong>
						threat
					</p>
					<div className={styles.footer}>
						* UK Finance half year fraud update
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
