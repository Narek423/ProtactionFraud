import Header from "../components/header";
import Hero from "../components/hero";
import Sabmition from "../components/sabmition";
import ProtectionInformation from "../components/protection-information";
import VictimsGalery from "../components/victims-galery";
import ProtectionApp from "../components/protaction-app";

export default function Home() {
	return (
		<div className='relative'>
			<Header />
			<Hero />
			<ProtectionInformation />
			<VictimsGalery />
			<Sabmition />
			<ProtectionApp /> //Home project@ page anel meke Pricing@ page ane
			myusner@ komponent
		</div>
	);
}
