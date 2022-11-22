import React, { FC } from "react";
import PicingPlan from "../pricing-plan";
import styles from "./styles.module.scss";

const Pricing: FC = () => {
	const planData = [
		{
			price: "29.99",
			title: "Starter Plan",
			planLongevity: "Annual Subscription",
			features: [
				"24/7 activity monitoring ",
				"FREE copy of your title deeds",
				"Full 24hr support package",
				"Unlimited joint Guardians",
				"Property valuation tracking ",
				"Less than £2.50 per month",
			],
		},
		{
			price: "19.99",
			title: "Portfolio Plan",
			planLongevity: "Owners with 5+ Properties",
			features: [
				"24/7 activity monitoring ",
				"Protects your Portfolio",
				"FREE copy of your title deeds",
				"Full 24hr support package",
				"Unlimited joint Guardians",
				"Property valuation tracking ",
			],
		},
		{
			price: "199.99",
			title: "Lifetime Plan",
			planLongevity: "Homeowner life term Plan",
			features: [
				"24/7 activity monitoring ",
				"FREE copy of your title deeds",
				"Full 24hr support package",
				"Unlimited joint Guardians",
				"Transfers when you move home",
				"Property valuation tracking ",
			],
		},
	];

	return (
		<div className={styles.body}>
			<div className={styles.title}>
				<span>Title Guardian </span> Pricing
			</div>
			<div className={styles.line}></div>
			<div className={styles.text}>
				There are 3 subscription plans to suit your personal circumstances.
				Select your required plan and start below.
			</div>
			<div className={styles.pricing_container}>
				{planData.map((elem, index) => {
					return (
						<div className={styles.pricing_items} key={Math.random() + index}>
							<PicingPlan
								price={elem.price}
								title={elem.title}
								planLongevity={elem.planLongevity}
								features={elem.features}
								index={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Pricing;
