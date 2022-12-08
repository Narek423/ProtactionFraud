import Header from "../../components/header";
import Hero from "../../components/hero";
import Sabmition from "../../components/sabmition";
import ProtectionInformation from "../../components/protection-information";
import VictimsGalery from "../../components/victims-galery";
import ProtectionApp from "../../components/protaction-app";
import AppDownload from "../../components/app-download";
import Pricing from "../../components/pricing";
import RegisterProperty from "../../components/register-property";
import LogoName from "../../components/logo-name";
import FooterInformation from "../../components/footer-information";
import Footer from "../../components/footer";

export default function Home() {
	return (
		<div className='relative'>
			<Header />
			<Hero />
			<ProtectionInformation />
			<VictimsGalery />
			<Sabmition />
			<ProtectionApp />
			<AppDownload />
			<Pricing />
			<RegisterProperty />
			<LogoName />
			<FooterInformation />
			<Footer />
		</div>
	);
}
