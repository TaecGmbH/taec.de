import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "../app/layout";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
	title: "TAEC"
};

export default function Home() {
	const [message, setMessage] = useState<string>("");
	const [contactInfo, setContactInfo] = useState<string>("");
	const router = useRouter();

	const handleMessageChange = (e: ChangeEvent) => setMessage((e.target as HTMLTextAreaElement).value);
	const handleContactInfoChange = (e: ChangeEvent) => setContactInfo((e.target as HTMLInputElement).value);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const data = { message, contactInfo };

		try {
			const response = await fetch("https://replace-me/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				router.push("/");
			} else {
				console.error("Failed to send data");
			}
		} catch (error) {
			console.error("Error sending data:", error);
		}
	};

	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<Head>
				<title>TAEC - Digitale Baubeschaffung</title>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
				<link rel="alternate icon" type="image/x-icon" href="/favicon.png"/>
				<link rel="apple-touch-icon" type="image/x-icon" href="/favicon.png"/>
			</Head>
			<header className="flex justify-between md:justify-evenly items-center p-6">
				<Link href="/"><h1 style={{letterSpacing: "4px"}} className="text-5xl font-bold text-white">TAEC</h1></Link>
				<nav>
					<Link href="/#kontakt" className="flex items-center text-white px-4 py-2 font text-xl font-bold kontakt-btn-border">Kontakt <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="27" height="29" viewBox="0 0 27 29" fill="none">
						<path d="M13.5 0.5L25.7175 8.06C26.1225 8.31667 26.4375 8.66667 26.6625 9.11C26.8875 9.55333 27 10.02 27 10.51V25.7C27 26.47 26.7356 27.1292 26.2069 27.6775C25.6781 28.2258 25.0425 28.5 24.3 28.5H2.7C1.9575 28.5 1.32188 28.2258 0.793125 27.6775C0.264375 27.1292 0 26.47 0 25.7V10.51C0 10.02 0.1125 9.55333 0.3375 9.11C0.5625 8.66667 0.8775 8.31667 1.2825 8.06L13.5 0.5ZM13.5 16.81L24.03 10.3L13.5 3.79L2.97 10.3L13.5 16.81ZM13.5 20.1L2.7 13.38V25.7H24.3V13.38L13.5 20.1ZM13.5 25.7H24.3H2.7H13.5Z" fill="#F2F2F2"/>
					</svg>
					</Link>
				</nav>
			</header>
			<main className="flex justify-between md:justify-evenly items-start p-6">
				<div className="mb-6">
					<h1 className="text-3xl md:text-4xl font-bold">Mitgründer(in) gesucht!</h1>
					<h3 className="text-lg md:text-xl font-bold">Mit dem Studium (so gut wie) fertig?</h3>
					<br />
					<p>Hast du Lust, deine Karriere nach dem Studium ambitioniert fortzusetzen? Gründe <br className="hidden md:block" /> doch mit uns!</p>
					<br />
					<p>Wir sind Fabian und Patrick und haben uns Mitte Januar 2024 das Berliner Startup <br className="hidden md:block" /> Stipendium erfolgreich beworben. Dieses startet Februar 2024 und läuft für ein Jahr <br className="hidden md:block" />
						(bis Februar 2025), daraufhin führen wir (mit dir?) das Unternehmen und können von <br className="hidden md:block" />
						dort Gehalt beziehen. In das Stipendium können wir auch noch ein weiteres Mitglied <br className="hidden md:block" />
						einführen - zum Beispiel dich!
					</p>
					<br />
					<h3 className="text-xl font-bold">Was du machst</h3>
					<br />
					<p>Dabei wirst du <span className="font-bold">hauptsächlich folgende Aufgaben</span> übernehmen:</p>
					<ul className="dashed-list">
						<li className="ms-4">Grundlegende Buchhaltung</li>
						<li className="ms-4">Kontaktpflege zu Stakeholdern (Berliner Startup Stipendium, Investoren…)</li>
						<li className="ms-4">Kontaktpflege mit weiteren Externen (bspw. Anwälten, Beantworten von Lead-Anfragen)</li>
						<li className="ms-4">Finanzprojektionen bilden</li>
					</ul>
					<br />

					<span className="font-bold">Optional</span>, aber auch gut wäre es, wenn du auch folgendes hast:
					<ul className="dashed-list">
						<li className="ms-4">Erfahrung mit der Baubranche (Bestenfalls Bauausführung)</li>
						<li className="ms-4">Marketing-Wissen oder Erfahrung im Vertrieb</li>
						<li className="ms-4">Arbeiten im B2B-Umfeld</li>
						<li className="ms-4">Enthusiasmus für Nutzerfreundlichkeit (UI/UX)</li>
					</ul>
					<br />
					
					<h3 className="text-xl font-bold">Was ist TAEC eigentlich?</h3>
					<p>Es gibt in der Baubranche die <span className="font-bold">Bauplanung</span> und die <span className="font-bold">Bauausführung</span>.</p>
					<br />
					<p>In der <span className="font-bold">Bauplanung</span> arbeiten Architekten, Statiker, etc. daran, dass das Gebäude, <br className="hidden md:block" />
						heutzutage via 3D-Modell, als Konzept entsteht.
					</p>
					<br />
					<p>In der <span className="font-bold">Bauausführung</span> wird das Konzept dann realisiert - Auf der Baustelle. Stand jetzt <br className="hidden md:block" />
						gibt es viel Software, die mit dem 3D-Modell in der Planung umgeht. Das 3D-Modell auf <br className="hidden md:block" />
						der Baustelle zu nutzen ist allerdings tatsächlich ein grundlegend neuer Ansatz.
					</p>
					<br />
					
					<p>Wir nutzen das 3D-Modell und organisieren auf der Baustelle übliche Ressourcen über <br className="hidden md:block" />
						unsere Website, sodass Bauleiter und Vorarbeiter einen besseren Überblick über <br className="hidden md:block" />
						Termine haben und diese bspw. besser verschieben können.
					</p>
					<br />

					<h3 className="text-xl font-bold">Wie viel verdienst du?</h3>
					<p>Das <span className="font-bold">Berliner Startup Stipendium</span> zahlt <span className="font-bold">2.200€ brutto</span> pro <span className="font-bold">Monat</span> bis zum Februar 2025 <br className="hidden md:block" />
						aus. Daraufhin beziehen wir über das entstehende Unternehmen TAEC Gehalt - hier <br className="hidden md:block" />
						setzen wir für alle Gründer(innen) zZ anfangs ein Gehalt von <span className="font-bold">55.000€ brutto</span> pro <span className="font-bold">Jahr</span> <br className="hidden md:block" />
						an - das kann aber natürlich (für alle) variieren, je nach Investorensituation und <br className="hidden md:block" />Finanzprojektionen (die du dann erstellen würdest) 😄
					</p>
					<br />
					<p>Anteile sind als Mitgründer(in) selbstverständlich auch dabei.</p>
					<br />
					<h3>Schreib uns doch gerne, wenn du mehr wissen willst oder<br className="hidden md:block" /> einfach mit uns reden möchtest 🙂</h3>
					<br />
					<div className="contact-form">
						<p style={{ fontWeight: 600 }} className="text-2xl text-center mb-2">Beschreiben Sie Ihr Anliegen</p>
						<textarea onChange={handleMessageChange} style={{ resize: "none" }} className="w-full rounded-lg p-3" rows={4} placeholder="Unterstützt TAEC auch Mauerwerksbestellungen?"></textarea>
						<div className="mt-3 flex flex-wrap">
							<div className="w-full md:w-1/2 md:pe-1">
								<label style={{ fontWeight: 600 }} htmlFor="contact-form-sender" className="text-2xl">Wie können wir Sie erreichen?</label>
								<input id="contact-form-sender" onChange={handleContactInfoChange} placeholder="Ihre E-Mail oder Telefonnummer..." className="contact-form-sender p-2 w-full" type="email" />
							</div>
							<div className="w-full md:w-1/2 md:ps-1 mt-3 md:mt-0">
								<button className="contact-form-btn text-2xl md:text-3xl w-full h-full" onClick={handleSubmit} type="submit">Kontaktieren</button>
							</div>
						</div>
					</div>

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
