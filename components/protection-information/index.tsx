import React, { FC } from "react";
import Step from "../step";
import styles from "./styles.module.scss";

const ProtectionInformation: FC = () => {
	const date = [
		{
			img: "/targetProperty.svg",
			title: "Target Property",
			text: "Fraudsters search land registry to find a home they want to target",
			num: "01",
			style: styles.suggestion_step1,
		},
		{
			img: "/stealIdentity.svg",
			title: "Steal Identity ",
			text: "Fraudsters commit identity theft to assume your identity",
			num: "02",
			style: styles.suggestion_step2,
		},
		{
			img: "/executeFraud.svg",
			title: "Execute Fraud",
			text: "Fraudsters remortgage or sell your home leaving you homeless",
			num: "03",
			style: styles.suggestion_step3,
		},
	];
	return (
		<div className={styles.body}>
			<div className={styles.header}>
				<p>
					<span>Title Guardian</span> will <span>protect</span> your property
					from <span>identity theft</span> and <span>property hijacking</span>
				</p>
			</div>
			<img className={styles.line} src='/line.svg' />
			<div className={styles.suggestion}>
				<div className={styles.suggestion_title}>
					3 simple steps that can turn your world upside down
				</div>
				{date.map((elem, index) => {
					return (
						<div className={elem.style} key={Math.random() + index}>
							<Step
								img={elem.img}
								title={elem.title}
								text={elem.text}
								num={elem.num}
							/>
						</div>
					);
				})}
			</div>
			<div className={styles.bottomVideo}>
				<div className={styles.bottomVideoCont}>
					<div className={styles.videoScreen}>
						<img src='/playButton.svg' />
					</div>
					<div className={styles.bottomVideoContText}>
						<div className={styles.title}>How it Works</div>
						<div className={styles.line}></div>
						<p>
							Your home and family is your most valuable asset. Protecting them
							is now simple and secure with Title Guardian. Our technology will
							detect any attempt to hijack or tamper with your homes title
							deeds, giving you peace of mind.
							<br /> <br />
							Please take the time to watch our short video to learn more about
							the risks in todays environment.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProtectionInformation;
