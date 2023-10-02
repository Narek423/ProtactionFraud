import React, { FC } from "react";
import styles from "./styles.module.scss";

const Footer: FC = () => {
	return (
		<div className={styles.body}>
			<div>© 2022 First Guardian Ltd. All rights reserved</div>
			<div className={styles.social_icons_container}>
				{["/twitter.svg", "/facebook.svg", "/instagram.svg"].map((elem, index) => (
					<img src={elem} key={Math.random() + index}/>
				))}
			</div>
		</div>
	);
};

export default Footer;
