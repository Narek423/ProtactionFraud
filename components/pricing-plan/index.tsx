import React, { FC } from "react";
import styles from "./styles.module.scss";

type PicingPlanProps = {
	price: string;
	title: string;
	planLongevity: string;
	features: Array<any>;
	index: number;
};

const PicingPlan: FC<PicingPlanProps> = (props) => {
	return (
		<>
			<div className={styles.header}>
				{!props.index ? (
					<img src='/popularLogo.svg' className={styles.mark} />
				) : null}
				<div className={styles.price}>
					<span>£</span>
					{props.price}
				</div>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.planLongevity}>{props.planLongevity}</div>
			</div>
			<div className={styles.features_container}>
				{props.features.map((elem, index) => {
					return (
						<div
							className={
								props.features.length - 1 === index && props.index === 0
									? styles.features_item_cyan
									: styles.features_item
							}
							key={Math.random() + index}
						>
							<img src='/cheqIn.svg' />
							{elem}
						</div>
					);
				})}
				<div className={styles.botton_wrapper}>
					{props.index === 0 ? (
						<div className={styles.button_cyan}>Purchase</div>
					) : (
						<div className={styles.button}>Contact us</div>
					)}
				</div>
			</div>
		</>
	);
};

export default PicingPlan;
