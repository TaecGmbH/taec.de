import Image from "next/image";
import Link from "next/link";
import "../app/layout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "TAEC"
};

export default function Home() {
	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<header className="flex justify-between md:justify-evenly items-center p-6">
				<Link href="/"><h1 style={{ letterSpacing: "4px" }} className="text-5xl font-bold text-white">TAEC</h1></Link>
				<nav>
					<Link href="/#kontakt" className="flex items-center text-white px-4 py-2 font text-xl font-bold kontakt-btn-border">Kontakt <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
						<path d="M13.5 0.5L25.7175 8.06C26.1225 8.31667 26.4375 8.66667 26.6625 9.11C26.8875 9.55333 27 10.02 27 10.51V25.7C27 26.47 26.7356 27.1292 26.2069 27.6775C25.6781 28.2258 25.0425 28.5 24.3 28.5H2.7C1.9575 28.5 1.32188 28.2258 0.793125 27.6775C0.264375 27.1292 0 26.47 0 25.7V10.51C0 10.02 0.1125 9.55333 0.3375 9.11C0.5625 8.66667 0.8775 8.31667 1.2825 8.06L13.5 0.5ZM13.5 16.81L24.03 10.3L13.5 3.79L2.97 10.3L13.5 16.81ZM13.5 20.1L2.7 13.38V25.7H24.3V13.38L13.5 20.1ZM13.5 25.7H24.3H2.7H13.5Z" fill="#F2F2F2"/>
					</svg>
					</Link>
				</nav>
			</header>

			<main className="flex justify-evenly items-start p-6">
				<div>
					<h1 className="font-bold text-4xl">Impressum</h1>
					<p className="font-bold">Fabian Fischer & Patrick Hein</p>
					<p>Gustav-Adolf-Straße 115</p>
					<p>13086 Berlin</p>
					<p style={{ opacity: 0.4 }}>Sie erreichen uns unter der E-Mail:</p>
					<a href="mailto:info@taec.de">info@taec.de</a>
				</div>
			</main>
			<div className="mt-auto footer flex items-end justify-between md:justify-evenly p-6 md:p-12 footer-bg-color">
				<div>
					<p><Link href="/impressum">Impressum</Link></p>
					<p><Link href="/datenschutz">Datenschutz</Link></p>
				</div>
				<div>
					<p>TAEC 2024</p>
				</div>
			</div>
		</div>
	);
};
