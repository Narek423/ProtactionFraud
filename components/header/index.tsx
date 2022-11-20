import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Header: FC = () => {
	const [navStyle, setNavStyle] = useState(styles.navbar);

	const onScroll = () => {
		if (window.scrollY > window.innerHeight) {
			setNavStyle(styles.navbarAbs);
		} else {
			setNavStyle(styles.navbar);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className={navStyle}>
			<div className={styles.logo}>
				<img src='/mainLogo.svg' /> Title Guardian
			</div>
			<div className={styles.center_butten_conteiner}>
				<div className={styles.nav_buttons}>Home</div>
				<div className={styles.nav_buttons}>Property Fraud</div>
				<div className={styles.nav_buttons}>Partners</div>
				<div className={styles.nav_buttons}>FAQ</div>
				<div className={styles.nav_buttons}>Contact</div>
			</div>
			<div className={styles.auth_buttons}>
				<div className={styles.signin}>Sign in</div>
				<div className={styles.register}>Register</div>
			</div>
		</div>
	);
};

export default Header;
