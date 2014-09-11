_menuCloseDelay=500           // The time delay for menus to remain visible on mouse out
_menuOpenDelay=150            // The time delay before menus open on mouse over
_followSpeed=5                // Follow scrolling speed
_followRate=40                // Follow scrolling Rate
_subOffsetTop=12              // Sub menu top offset
_subOffsetLeft=-9             // Sub menu left offset
_scrollAmount=3               // Only needed for Netscape 4.x
_scrollDelay=20               // Only needed for Netcsape 4.x
fixMozillaZIndex=true;

with(style2=new mm_style()){
	onbgcolor="#ACD467";
	oncolor="#000000";
	offbgcolor="#FFFFFF";
	offcolor="#000000";
	bordercolor="#A5ABB9";
	borderstyle="solid";
	borderwidth=1;
	separatorcolor="#ffffff";
	separatorsize="1";
	separatoralign="center";
	separatorwidth="100%";
	padding=4;
	fontsize="11px";
	fontstyle="normal";
	fontfamily="Verdana, Arial, Geneva, Helvetica, sans-serif";
	subimage="http://img.chefkoch.de/img/arrow.gif";
	subimagepadding="2";
}

with(style3=new mm_style()){;
	onbgcolor="#ACD467";
	oncolor="#000000";
	offbgcolor="#FFFFFF";
	offcolor="#000000";
	bordercolor="#A5ABB9";
	borderstyle="solid";
	borderwidth=1;
	separatorcolor="#ffffff";
	separatorsize="1";
	separatoralign="center";
	separatorwidth="100%";
	padding=2;
	fontsize="11px";
	fontstyle="normal";
	fontfamily="Verdana, Tahoma, Arial";
	subimage="http://img.chefkoch.de/img/arrow.gif";
	subimagepadding="2";
	headercolor = "#000000";
	headerbgcolor = "#C1D7E4";
	headerborder="0px solid #000000";
}
	
	with(milonic=new menuname("magazin")){
		style=style2;
		zindex=12000;
		
		aI("text=Chefkoch.de Magazin;url=/magazin/;separatorcolor=#E6E8EA;");
		
		aI("text=<b>AEG-Electrolux</b> - <span style=\"font-family:Arial;\">Perfekt in Form und Funktion;url=/magazin/rs/14,0,0/navigation/;");
		aI("text=<b>Nestlé Ernährungsstudio</b> - <span style=\"font-family:Arial;\">Ihr Berater für gesunde Ernährung;url=/magazin/rs/16,0,0/navigation/;bgimage=http://img.chefkoch.de/img/navi-fade.gif;");
	}

	with(milonic=new menuname("rezepte")){
		style=style2;
		zindex=12000;
		
		aI("text=Rezeptsuche;url=/rezepte/;");
		aI("text=Kategorienbaum;url=/kochrezept.php;");
		aI("text=<strong>Markenrezepte</strong>;showmenu=marken;");
		aI("text=Neue Rezepte;url=/rs/s0o3/neue-rezepte.html;");
		aI("text=Neue Rezeptbilder;url=/rezeptbilder.php;");
		aI("text=Best of Chefkoch.de;showmenu=bestof;");
		aI("text=Rezeptsammlungen;url=/rezeptsammlung/;");
		aI("text=Zufallsrezept;url=/rezepte/zufallsrezept/;");
		aI("text=Rezept des Tages;url=/rezept-des-tages.php;");
		aI("text=Zutatenverwertung;url=/rezept-reste.php;separatorcolor=#E6E8EA;");
		aI("text=Rezepte eintragen;url=/rezepteingabe/;");
		aI("text=Rezepte auf Ihrer Homepage;url=/napping/;bgimage=http://img.chefkoch.de/img/navi-fade.gif;");
	}
	
		with(milonic=new menuname("bestof")){
			style=style3;
			zindex=12000;
			
			aI("text=... der letzten 14 Tage;url=/rs/s0o8e1j14/Rezepte.html;");
			aI("text=... der letzten 30 Tage;url=/rs/s0o8e1j30/Rezepte.html;");
		}
		
		with(milonic=new menuname("marken")){
			style=style3;
			zindex=12000;

			aI("text=Brunch;url=/user/rezepte/f9257a031e7adaa3bcdb8e270a149238/brunch-unilever.html;image=http://img.chefkoch.de/ck.de/comrezept-img/brunch/minilogo-brunch.gif;imagepadding=4 4 4 47;");			
			aI("text=Pflaumen Rezepte;url=/user/rezepte/1895f7307b9b860f871cbc94d5014ac8/BVEO.html;image=http://img.chefkoch.de/ck.de/comrezept-img/bveo/bveo_logo_mini.gif;imagepadding=4 4 4 72;");
			aI("text=McCain;url=/user/rezepte/c000066d1d75b07776c7826bd18552c6/McCain.html;image=http://img.chefkoch.de/ck.de/comrezept-img/mccain/mccain_logo_mini.gif;imagepadding=4 4 4 61;");
			aI("text=Rama Cremefine</b>;url=/user/rezepte/e11bfbb7c1d9999de0bc09f22adcb987/Rama.html;image=http://img.chefkoch.de/ck.de/comrezept-img/rama/rama_logo_mini.gif;imagepadding=4 4 4 64;");
			aI("text=Uncle Ben's</b>;url=/user/rezepte/6b1449e7c93e3b61f494590444a1cf5c/uncle-bens.html;image=http://img.chefkoch.de/ck.de/comrezept-img/uncle-bens/uncle-bens-mini.gif;imagepadding=4 4 4 19;");
		}
		
	with(milonic=new menuname("cktv")){
		style=style2;
		zindex=12000;
		
		aI("text=Alle Videos anzeigen;url=/video_gruppe.php;");
		aI("text=Alle chefkoch.tv Rezepte ;url=/user/rezepte/3d77e9e9eac9bbec988309f0ac1be384/chefkoch.html;");
		aI("text=chefkoch.tv Forum;url=/forum/1,74/chefkoch-tv.html;");
		aI("text=Hilfe zu chefkoch.tv;url=/faq/index.php?cid=16;");
	}
	
	with(milonic=new menuname("community")){
		style=style2;
		zindex=12000;
		
		aI("text=Diskussionsforen;showmenu=foren;");
		aI("text=Aktuelle Forenbeiträge;url=/forum/3,0/aktuelle-beitraege.html;separatorcolor=#E6E8EA;");
		aI("text=<strong>Chefkoch Fanartikel</strong><sup style=color:red;> <strong>neu</strong></sup>;url=/fanshop/;separatorcolor=#E6E8EA;");
		aI("text=Chefkoch-Gruppen;url=/groups/;separatorcolor=#E6E8EA;");
		aI("text=Chefkoch-Blogs;url=/blogs/;separatorcolor=#E6E8EA;");
		aI("text=Fotoalben;url=/foto-alben.php;separatorcolor=#E6E8EA;");
		aI("text=Umfragen;url=/poll.php;separatorcolor=#E6E8EA;");
		aI("text=Angemeldete User (online);url=/useronline.php;");
		aI("text=Hitlisten;url=/userrank.php;bgimage=http://img.chefkoch.de/img/navi-fade.gif;");
	}
	
		with(milonic=new menuname("foren")){
			style=style2;
			zindex=12000;
			
			aI("text=Kochforen;showmenu=kochforen;");
			aI("text=Backen;showmenu=backen;");
			aI("text=Getränke;showmenu=getraenke;");
			aI("text=Sonstige Kochthemen;showmenu=sonstige;");
			aI("text=Lifestyle;showmenu=lifestyle;separatorcolor=#E6E8EA;");
			aI("text=Sonstige Themen;showmenu=plauderecke;separatorcolor=gray;");
			aI("text=Forenmoderatoren;url=/forum/4/moderatoren.html;bgimage=http://img.chefkoch.de/img/navi-fade.gif;");
		}
		
			with(milonic=new menuname("kochforen")){
				style=style3;
				zindex=12000;
				overflow="scroll";
				
				aI("text=Vorspeisen;url=/forum/1,55/Vorspeisen.html;");
				aI("text=Suppen & Eintöpfe;url=/forum/1,58/Suppen.html");
				aI("text=Gemüse und Salat;url=/forum/1,53/Gemuese-und-Salat.html;");
				aI("text=Salatsaucen;url=/forum/1,73/Salatsaucen.html;");
				aI("text=Fisch & Meeresfrüchte;url=/forum/1,56/Fisch-Meeresfruechte.html;");
				aI("text=Fleisch;url=/forum/1,57/Fleisch.html");
				aI("text=Wurst & Räuchern;url=/forum/1,70/Wursten-Raeuchern.html");
				aI("text=Aufläufe;url=/forum/1,32/Auflaeufe.html;");
				aI("text=Menüs;url=/forum/1,33/Menues.html;");
				aI("text=Menüs: Prüfungsmenüs / Ausbildung;url=/forum/1,81/Pruefungsmenues-Ausbildungsfragen.html;");
				
				aI("text=Soßen, Aufstriche & Dips;url=/forum/1,54/Sossen-Aufstriche-Dips.html;");
				aI("text=Pastaherstellung & Pastasaucen;url=/forum/1,69/Pastaherstellung-Pastasaucen.html;");
				
				aI("text=Desserts & Süßspeisen;url=/forum/1,25/Desserts-Co.html;");
				aI("text=Grillen;url=/forum/1,21/Grillen.html;");
				aI("text=Partyrezepte;url=/forum/1,26/Partyrezepte.html;");
				aI("text=Fingerfood;url=/forum/1,75/Fingerfood.html;");
				aI("text=Lieblingsrezepte;url=/forum/1,17/Lieblingsrezepte.html;");
				aI("text=Günstig kochen - günstig leben;url=/forum/1,6/Guenstig-kochen-guenstig-leben.html;");
				aI("text=Exotisches & Urlaubsrezepte;url=/forum/1,5/Andere-Laendern-Urlaubsrezepte.html;");
				aI("text=Rezepte für Kids;url=/forum/1,11/Rezepte-fuer-Kids.html;");
				aI("text=Fortgeschrittene u. Profis;url=/forum/1,49/Fortgeschrittene-Profis.html;");
				aI("text=Kochsendungen und Fernsehköche;url=/forum/1,72/Kochsendungen-und-Fernsehkoeche.html;");
				aI("text=chefkoch.tv;url=/forum/1,74/chefkoch-tv.html;");
				
				aI("text=Sonstige Kochrezepte;url=/forum/1,1/Sonstige-Kochrezepte.html;");
				aI("text=Sonstige Küchenthemen;url=/forum/1,52/Sonstige-Kuechenthemen.html;separatorcolor=#E6E8EA;");
				
				aI("text=Feiertage und Feste;url=/forum/1,19/Feiertage.html;showmenu=feiertage;");
				
				aI("text=Einkochen & Haltbarmachen;url=/forum/1,15/Einkochen-Haltbarmachen.html;");
				aI("text=Geschenke aus der Küche;url=/forum/1,47/Geschenke-aus-der-Kueche.html;");
				aI("text=Zutaten;url=/forum/1,9/Zutaten.html;");
				aI("text=Resteverwertung;url=/forum/1,7/Resteverwertung.html;separatorcolor=#E6E8EA;");
				
				aI("text=Gesund Essen;url=/forum/1,16/Gesund-Essen.html;");
				aI("text=Vegetarisch;url=/forum/1,34/Vegetarisch.html;");
				aI("text=Ernährungsprogramme;url=/forum/1,50/Ernaehrungsprogramme.html;");
				aI("text=Allergien und Unverträglichkeiten;url=/forum/1,51/Nahrungsmittelallergien.html;showmenu=allergien;");
			}
				
				with(milonic=new menuname("feiertage")){
					style=style3;
					overflow="scroll";
					zindex=12000;
					
					aI("text=Hauptforum: Feiertage und Feste;url=/forum/1,19/Feiertage.html;");
					aI("text=Geschenke;url=/forum/1,61/Feste-Geschenke.html;");
					aI("text=Tischdeko & Einladungen;url=/forum/1,62/Feste-Tischdekoration-und-Einladungen.html;");
					aI("text=Spiele;url=/forum/1,63/Feste-Spiele.html;");
				}
				
				with(milonic=new menuname("allergien")){
					style=style3;
					overflow="scroll";
					zindex=12000;
					
					aI("text=Hauptforum: Allergien;url=/forum/1,51/Nahrungsmittelallergien.html;");
					aI("text=Allergiker Kochrezepte;url=/forum/1,64/Allergiker-Kochrezepte.html;");
					aI("text=Allergiker Backrezepte;url=/forum/1,65/Allergiker-Backrezepte.html;");
				}
				
			with(milonic=new menuname("backen")){
				style=style3;
				zindex=12000;
				
				aI("text=Torten & Kuchen;url=/forum/1,35/Torten-Kuchen.html;");
				aI("text=Motivtorten;url=/forum/1,77/Motivtorten.html;");
				aI("text=Motivtorten Fotos;url=/forum/1,82/Motivtorten-Fotos.html;");
				aI("text=Pizza & Pikantes;url=/forum/1,66/Pizza-Pikantes.html;");
				aI("text=Kleingebäck und Konfiserie;url=/forum/1,36/Kleingebaeck-und-Konfiserie.html;");
				aI("text=Brot & Brötchen;url=/forum/1,37/Brot-Broetchen.html;");
				aI("text=Sonstige Backthemen;url=/forum/1,14/Backen.html;");
			}
	
			with(milonic=new menuname("getraenke")){
				style=style3;
				zindex=12000;
				
				aI("text=Alkoholfreie Getränke;url=/forum/1,60/Alkoholfreie-Getraenke.html;");
				aI("text=Alkoholische Getränke;url=/forum/1,2/Alkoholische-Getraenke.html;");
				aI("text=Wein;url=/forum/1,20/Wein.html;");
			}
			
			with(milonic=new menuname("sonstige")){
				style=style3;
				zindex=12000;
				
				aI("text=Tipps u. Tricks;url=/forum/1,13/Tipps-Tricks.html;");
				aI("text=Pannenhilfe;url=/forum/1,10/Pannenhilfe.html;");
				
				aI("text=Kochbücher;url=/forum/1,38/Kochbucher.html;");
				aI("text=Kochbücher: Tauschecke;url=/forum/1,67/Kochbuecher-Tauschecke.html;");
				aI("text=Kochbücher: Wander-Kochbücher;url=/forum/1,79/Wander-Kochbuecher.html;");
				aI("text=Küchenausstattung;url=/forum/1,8/Kuechenausstattung.html;");
				aI("text=Kaufen u. Verkaufen;url=/forum/1,46/Kaufen-u-Verkaufen.html;");
				aI("text=Tauschbörse;url=/forum/1,76/Tauschboerse.html;");
				
				aI("text=Stellenmarkt;url=/forum/1,12/Stellenmarkt.html;");
				
				aI("text=Stellenmarkt: Rund um Job und Karriere;url=/forum/1,80/Rund-um-Job-und-Karriere.html;");
			}
			
			with(milonic=new menuname("lifestyle")){
				style=style3;
				zindex=12000;
				
				aI("text=Lifestyle u. Beauty;url=/forum/1,28/Lifestyle-Beauty.html;");
				aI("text=Freizeitvergnügen;url=/forum/1,44/Freizeitvergnuegen.html;");
				aI("text=Freizeitvergnügen: Wichteleien & Co.;url=/forum/1,68/Freizeit-Wichteleien-Co.html;");
				aI("text=Urlaub;url=/forum/1,41/Urlaub.html;");
				aI("text=Familie und Kinder;url=/forum/1,45/Familie-und-Kinder.html;");
				aI("text=Hund, Katze, Maus;url=/forum/1,29/Hund-Katze-Maus.html;");
				aI("text=Haus u. Garten;url=/forum/1,27/Haus-Garten.html;");
			}
			
			with(milonic=new menuname("plauderecke")){
				style=style3;
				zindex=12000;
				
				aI("text=Fragen zu Chefkoch.de;url=/forum/1,39/Fragen-zu-Chefkoch-de.html;");
				aI("text=Uservorstellungen;url=/forum/1,40/Uservorstellungen.html;");
				aI("text=Chefkoch.de Treffen;url=/forum/1,42/Chefkoch-Treffen.html;separatorcolor=#E6E8EA;");
				aI("text=Technisches, PC & Co;url=/forum/1,43/Technisches.html;");
				aI("text=Witziges;url=/forum/1,31/Witziges.html;separatorcolor=#E6E8EA;");
				aI("text=Spaß & Spiel;url=/forum/1,59/Spass-Spiel.html;");
				aI("text=Testen;url=/forum/1,71/Testen.html;");
				aI("text=Gratulationen / Glückwünsche;url=/forum/1,78/Gratulationen-Glueckwuensche.html;");
				aI("text=Plauderecke;url=/forum/1,22/Sonstiges.html;");
			}
			
	with(milonic=new menuname("shopping")){
		style=style2;
		zindex=12000;
		
		aI("text=All-Clad (Kochgeschirr f. Profis);url=/shop-go-to.php?shop_id=51;target=_blank;");
		aI("text=Allvendo (Espresso-& Kaffeewelt);url=/shop-go-to.php?shop_id=56;target=_blank;");
		aI("text=Börner Shop (Küchenhelfer)</sup>;url=/shop-go-to.php?shop_id=55;target=_blank;");	
		aI("text=Cake Company (Tortendekorationen);url=/shop-go-to.php?shop_id=15;target=_blank;");
		aI("text=Glutenfrei-supermarkt.de (Food);url=/shop-go-to.php?shop_id=48;target=_blank;");
		aI("text=Gourmantis (Spezialitäten);url=/shop-go-to.php?shop_id=20;target=_blank;");
		aI("text=Gourmetfleisch (frisches Fleisch);url=/shop-go-to.php?shop_id=52;target=_blank;");
		aI("text=Gourmet Versand (Feinkosthandel);url=/shop-go-to.php?shop_id=44;target=_blank;");
		aI("text=Gourvita.com (Kaffee, Tee, Genuss);url=/shop-go-to.php?shop_id=34;target=_blank;");
		aI("text=Gustini (Köstlich italienisch);url=/shop-go-to.php?shop_id=60;target=_blank;");
		aI("text=KochLand (alles rund ums Kochen);url=/shop-go-to.php?shop_id=54;target=_blank;");
		aI("text=New World Gourmet (Spezialitäten);url=/shop-go-to.php?shop_id=26;target=_blank;");
		aI("text=paul-schrader.de (Tee- & Genusswelt);url=/shop-go-to.php?shop_id=35;target=_blank;");
		aI("text=Soda-Club (Trinkwassersprudler);url=/shop-go-to.php?shop_id=30;target=_blank;");
		aI("text=Spreewaldshop (Genuss & Geschenk)<sup style=color:red;> <strong>neu</strong></sup>;url=/shop-go-to.php?shop_id=58;target=_blank;");
		aI("text=Superiore.de (ital. Spitzenweine);url=/shop-go-to.php?shop_id=43;target=_blank;");
		aI("text=Tafeldeko (das Auge isst mit);url=/shop-go-to.php?shop_id=57;target=_blank;");
		aI("text=Thar's Kräuterhaus (Gewürze & Co);url=/shop-go-to.php?shop_id=59;target=_blank;");
		aI("text=timeless-design (Designartikel);url=/shop-go-to.php?shop_id=25;target=_blank;");
		aI("text=tischwelt.de (Küche und Tafel);url=/shop-go-to.php?shop_id=37;");
		
		aI("text=<b>Ihr Shop/Artikel hier?</b>;url=/werbung.php;");
	}
	
	with(milonic=new menuname("mychefkoch"))
	{
		style=style2;
		zindex=12000;
		
		aI("text=Chefkoch.de Club;url=/register/club.php;");
		aI("text=Kochbuch;url=/mychefkoch/kochbuch/;");
		aI("text=Rezept-Fotos;url=/mychefkoch/rezeptfotos/;");
		aI("text=Fotoalben;url=/user-fotos-admin-1.php;");
		aI("text=Postfach;url=/mychefkoch/my-messages-list.php?show=inbox");
		aI("text=Freunde;url=/mychefkoch/freunde/;");
		aI("text=Foren Favoriten;url=/mychefkoch/favoriten/;");
		aI("text=Meine Gruppen;url=/groups/6/my-groups.html;");
		aI("text=Mein Blog;url=/mychefkoch/blog/;");
		aI("text=Einstellungen;url=/mychefkoch/einstellungen/;");
		aI("text=Meine Profilseite;url=/user/profil/;");
		aI("text=Logout;url=/index.php?log=out;");
	}

drawMenus();

