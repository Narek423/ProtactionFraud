import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const LogoName: FC = () => {
	return (
		<div className={styles.logo}>
			<img src='/greenLogoName.svg' />
		</div>
	);
};

export default LogoName;
