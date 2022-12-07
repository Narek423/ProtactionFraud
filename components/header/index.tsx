import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Header: FC = () => {
	const [navStyle, setNavStyle] = useState(styles.navbar);
	const navbarButtons = [
		"Home",
		"Property Fraud",
		"Partners",
		"FAQ",
		"Contact",
	];

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
				{navbarButtons.map((elem, i) => (
					<div className={styles.nav_buttons} key={i + Math.random()}>
						{elem}
					</div>
				))}
			</div>
			<div className={styles.auth_buttons}>
				<div className={styles.signin}>Sign in</div>
				<div className={styles.register}>Register</div>
			</div>
			<div className={styles.sideBarButton}>
				<img src='/sideBar.svg' />
			</div>
		</div>
	);
};

export default Header;
