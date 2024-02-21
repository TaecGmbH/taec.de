import { ChangeEvent, useState } from "react";
import Link from "next/link";
import "../src/app/layout";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
	title: "TAEC"
};

export default function Home() {
	const [message, setMessage] = useState<string>("");
	const [contactInfo, setContactInfo] = useState<string>("");

	const handleMessageChange = (e: ChangeEvent) => setMessage((e.target as HTMLTextAreaElement).value);
	const handleContactInfoChange = (e: ChangeEvent) => setContactInfo((e.target as HTMLInputElement).value);

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (message.trim().length === 0 || contactInfo.trim().length === 0) {
			alert("Bitte fülle beide Felder aus!");
			return;
		}

		const data = {
			cardsV2: [
				{
					cardId: "createCardMessage",
					card: {
						header: {
							title: "Neue Bewerbung!",
							subtitle: "Erstellt auf der Website!",
							imageUrl: "https://taec.de/favicon.png",
							imageType: "SQUARE"
						},
						sections: [
							{
								header: "Bewerbungsinhalt",
								widgets: [
									{
										decoratedText: {
											text: contactInfo.trim(),
											startIcon: {
												knownIcon: "EMAIL"
											}
										}
									},
									{
										decoratedText: {
											text: message.trim(),
											startIcon: {
												knownIcon: "DESCRIPTION"
											}
										}
									}
								]
							}
						]
					}
				}
			]
		};

		const antiBotMeasurement1 = (3 - 3).toString();
		const antiBotMeasurement2 = Array(4).fill('A').join('');
		const antiBotMeasurement3 = 'waf= ken= fdac='.split(' ')[1];
		const antiBotMeasurement4 = 't.goo'
		const antiBotMeasurement5 = 'm/v1/sp'
		const antiBotMeasurement6 = 'ages?k'
		const antiBotMeasurement7 = 'ps:/'
		const antiBotMeasurement8 = 'O-lx'

		try {
			const response = await fetch("" +
				// We can also always disable the webhook if abused :)
				`htt${antiBotMeasurement7}/cha${antiBotMeasurement4}gleapis.co${antiBotMeasurement5}aces/${antiBotMeasurement2}tXPSBX${antiBotMeasurement1}/mess${antiBotMeasurement6}ey=AIzaSyDdI${antiBotMeasurement1}hCZtE6vySjMm-WEfRq3CPzqKqqsHI&to${antiBotMeasurement3}h-JjwGiDgWMlNXPsPqu9D2nvqBTTGkx58${antiBotMeasurement8}neVRLI` +
				"", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				// router.push("/"); // Bad, because user needs to see the success message
				alert("Deine Bewerbung ist erfolgreich eingegangen! Wir melden uns bei dir.");
			} else {
				alert("Es gab einen technischen Fehler, probier uns doch bitte direkt zu kontaktieren: info@taec.de");
				console.error("Failed to send data");
			}
		} catch (error) {
			alert("Es gab einen technischen Fehler, probier uns doch bitte direkt zu kontaktieren: info@taec.de");
			console.error("Error sending data:", error);
		}
	};

	return (
		<div className="flex flex-col relative bg-cover bg-center bg-no-repeat h-screen">
			<Head>
				<title>TAEC - Digitale Baubeschaffung</title>
				<meta property="og:site_name" content="TAEC"/>
				<meta property="og:description"
					  content="Wir bringen das BIM-Modell auf die Baustelle! Erfahren Sie, wie wir Prozesse und Liefertermine mit Ihrem Modell verknüpfen."/>
				<meta property="og:type" content="website"/>
				<link rel="icon" type="image/x-icon" href="/favicon.ico"/>
				<meta name="robots" content="noindex,nofollow"/>
				<link rel="alternate icon" type="image/x-icon" href="/favicon.png"/>
				<link rel="apple-touch-icon" type="image/x-icon" href="/favicon.png"/>
			</Head>
			<header className="flex justify-between md:justify-evenly items-center p-6 header-semi-brown-color">
				<Link href="/"><h1 style={{letterSpacing: "4px"}} className="text-5xl font-bold text-white">TAEC</h1>
				</Link>
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
					<p><span className="font-bold">Anteile</span> sind als Mitgründer(in) selbstverständlich auch
						dabei.</p>
					<br/>
					<h3>Schreib uns doch gerne, wenn du mehr wissen willst oder<br className="hidden md:block" /> einfach mit uns reden möchtest 🙂</h3>
					<br />
					<div className="contact-form">
						<p style={{ fontWeight: 600 }} className="text-2xl text-center mb-2">Schreib kurz über dich und warum du dich hierfür interessierst!</p>
						<textarea onChange={handleMessageChange} style={{ resize: "none" }} className="w-full rounded-lg p-3" rows={4} placeholder="Hi, ich bin..."></textarea>
						<div className="mt-3 flex flex-wrap">
							<div className="w-full md:w-1/2 md:pe-1">
								<label style={{ fontWeight: 600 }} htmlFor="contact-form-sender" className="text-xl">Wie können wir dich erreichen?</label>
								<input id="contact-form-sender" onChange={handleContactInfoChange} placeholder="beispiel@deine-mail.com (oder WhatsApp?)" className="contact-form-sender p-2 w-full" type="email" />
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
