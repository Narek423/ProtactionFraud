import React, { FC } from "react";
import styles from "./styles.module.scss";

const AppDownload: FC = () => {
	return (
		<div className={styles.body}>
			<div className={styles.conteiner}>
				<div className={styles.informationDownload}>
					<div className={styles.title}>
						<span>Home Protection</span> <br /> in your pocket.
						<br /> Download the App
					</div>
					<img src='/line.svg' />
					<div className={styles.downloadText}>
						Download the Title Guardian mobile App from the App Store or Google
						Play to make protecting your home even easier. Registration is
						simple, secure and fast.
					</div>
					<div className={styles.downloadButton}>
						<div className={styles.appleButton}>
							<img src='/appstore.svg' />
						</div>
						<div className={styles.playMButton}>
							<img src='/googleplay.svg' />
						</div>
					</div>
				</div>
				<div className={styles.imgPart}>
					<img src='/phoneImg.svg' />
				</div>
			</div>
		</div>
	);
};

export default AppDownload;
