import style from "./style.module.scss";

let data = {
	title: "Anna Harutunyan",
	about:
		"Marilyn Monroe (born Norma Jeane Mortenson; June 1, 1926 – August 4, 1962) was an American actress. Famous for playing comedic blonde bombshel characters, she became one of the most popular sex symbols of the 1950s and early 1960s, as well as an emblem of the era's sexual revolution. She was a top-billed actress for a decade, and her films grossed $200 million (equivalent to $2 billion in 2021) by the time of her death in 1962.[3] Long after her death, ",
	month_statistic: [
		["PAGE VIEWS", "14K"],
		["VISITORS", "451K"],
		["SUBSCRIBERS", "85K"],
	],

	subscription: [
		[
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346",
			"15,110",
		],
		[
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/450px-YouTube_social_red_square_%282017%29.svg.png?20220808215335",
			"405,151",
		],
		[
			"https://paintestimating.com/wp-content/uploads/2018/07/pinterest-icon-297x300.png",
			"18,545",
		],
		[
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/900px-Facebook-icon-1.png?20150710035953",
			"154,780",
		],
		["https://cdn-icons-png.flaticon.com/512/124/124021.png", "45,151"],
		[
			"https://seeklogo.com/images/T/tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png",
			"128,545",
		],
	],
	audiance: { women: "78%", man: "22%", age_18_27: "75%", age_28_35: "25%" },
};

export default function Home() {
	return (
		<div className={style.wrapper}>
			<div className={style.body_a4}>
				<div className={style.title}>
					<div className={style.title_content}>{data.title}</div>
				</div>
				<div className={style.about}>
					<div className={style.about_title}>ABOUT</div>
					<div className={style.about_content}>
						<div className={style.about_content_img}>
							<img
								src='https://i.pinimg.com/736x/60/54/6f/60546f74efba545b92183c3e57690727.jpg'
								alt='Avatar'
								className={style.avatar_img}
							/>
						</div>
						<div className={style.about_content_text}>{data.about}</div>
					</div>
				</div>
				<div className={style.month_statistic}>
					{data.month_statistic.map(function (item, i) {
						return (
							<div key={i} className={style.month_statistic_box}>
								<span>{item[1]}</span>

								<span>
									MONTHLY <br /> {item[0]}
								</span>
							</div>
						);
					})}
				</div>
				<div className={style.subscription}>
					<div className={style.subscription_blocks}>
						{data.subscription.map(function (item, i) {
							return (
								<div key={i} className={style.subscription_blocks_items}>
									<img src={item[0]} className={style.subscription_img} />
									<span>{item[1]}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className={style.audiance}>
					<div className={style.about_title}>AUDIANCE</div>
					<div className={style.audiance_content}>
						<div className={style.audiance_content_wrapper}>
							<div className={style.audiance_persent_wrapper}>
								<span className={style.audiance_elements}>MAN 85%</span>
								<span className={style.audiance_elements}>WOMEN 45%</span>
							</div>
							<div className={style.audiance_persent_wrapper}>
								<span className={style.audiance_elements}>AGE 45-54 63%</span>
								<span className={style.audiance_elements}>AGE 45-54 33%</span>
							</div>
						</div>
						<div className={style.audiance_img_conteiner}>
							<img
								src='https://media.istockphoto.com/vectors/world-map-with-network-connections-on-orange-amber-background-vector-id523771654?b=1&k=20&m=523771654&s=612x612&w=0&h=vo9bA5NuIbTgFzTVNf7I3YjKO9mIwQKBB4G6yD6Vwhw='
								alt='Avatar'
								className={style.audiance_img}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
