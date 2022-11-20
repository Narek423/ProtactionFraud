import React, { FC } from "react";
import styles from "./styles.module.scss";

const VictimsGalery: FC = () => {
	const victimsData = [
		{
			imgLink: "/familiDog.svg",
			titel: "Real Victims of Fraud",
			story:
				"Title & property fraud is a growing risk to homeowners and landlords. This short video was designed to create awareness of how serious and real the issue is. We also highlight how simple these frauds were conducted. The devastation to homeowners affected by title fraud cannot be underestimated as this short video will demonstrate.",
		},
		{
			imgLink: "/redHouse.svg",
			titel: "​Luton clergyman loses his home",
			story:
				"Reverend Mike Hall told the BBC how his house had been sold without his knowledge via identity theft. He was away at the time and alerted by neighbours that someone was inside the property. Reverend Mike Hall subsequently attended the property to find the new owners renovating his property. ",
		},
		{
			imgLink: "/twoGuys.svg",
			titel: "Candy brothers fall for pensioners’ £6m sting",
			story:
				"The Candy brothers, two of London’s best known luxury property developers, were swindled by four pensioners who sold them a 47-acre Berkshire estate that they did not own. The brothers have emerged as the victims of an audacious quartet of fraudsters in their sixties and early seventies who were jailed for their part in the scam.",
		},
	];

	return (
		<div className={styles.victims_wrapper}>
			<div className={styles.head}>
				<div className={styles.text_conteiner}>
					<h1>
						<strong>Victims </strong> of Property Fraud​
					</h1>
					<p>
						Property & title fraud is an invisible digital threat that affects
						everyone. Here are just a few examples.
					</p>
				</div>
				<div className={styles.button_coneiner}>
					<span>
						<img className={styles.img_1} src='/leftArrow.png' />
						<img className={styles.img_2} src='/rightArrow.png' />
					</span>
				</div>
			</div>
			<div className={styles.victims_grid}>
				{victimsData.map((elem, index) => {
					return (
						<div className={styles.victims_story} key={Math.random() + index}>
							<div className={styles.img_wrapper}>
								<img src={elem.imgLink} />
							</div>
							<h1>{elem.titel}</h1>
							<p>{elem.story}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VictimsGalery;
