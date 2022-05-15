# labb2_js

I din Readme på Github ska du skriva ett resonemang kring och argumentera för sina tekniska val och avvägningar kring tillgänglighet, semantik, kompatibilitet och anpassning för olika enheter:



Jag anser att Kompabiliteten på hemsidan fungerar bra, jag har primärt använt mig utav firefox när jag har testat hemsidan men den fungerar även bra i Microsoft edge.
Hemsidan kunde med lite mer arbete varit snyggare rent estetiskt, jag hade t.ex kunnat lägga till en hamburger meny för enklare navigering i mobila enheter.
Gällande semantiken så har jag använt mig av "Nav" "Article" och "Footer" elementen iställt för Div-taggen.
Jag använder dock Div-taggen som ett underelement i vissa klasser då jag inte hittade någon mer relevant tagg för deras användbarhet.

I förhållande till tillgänglighet så använder jag mig av skarpa kontraster för att särskilja de olika elementen på hemsidan, vidare så är det ganska minimalt med information vilket gör att använderen inte presenteras av för mycket material samtidigt.

Nedan går jag igenom kompabiliteten mellan webbläsare och de javascript funktioner som jag använder mig av:

getElementById - Fungerar på samtliga aktuella webbläsare i senaste versionen.

addEventListener - Fungerar på samtliga webbläsare med undantag för Internet explorer 6-8,
jag anser inte att detta är något problem för merparten av användarna då windows nyligen ersatte IE med Edge som har kompabilitet, sålendes är det en liten
målgrupp som eventuellt inte har uppdaterat webläsaren.

 fetch API och "then" - Fungerar på samtliga webbläsare med undantag för Internet explorer, här resonerar jag likadant som på föregående fråga.
 
 map - Stöd på aktuella versioner av de stora webbläsarna.

Definitionen av samtliga webbläsare i texten ovan anser jag vara de som används främst komersiellt (Edge, Firefox, Safari, Chrome, Opera), mindre webbläsare som 
QQ browser, Kai os browser och liknande som presenteras på "caniuse.com" är inriktade på mindre målgrupper som eventuellt använder dessa webbläsare för speciella applikationer utvecklade för dessa enheter.

Om hemsidan skulle vara tillgänglig för dessa typer av enheter så hade man eventuellt behövt att göra sidan enklare (kanske utan att använda sig av react)
Man hade exempelvis också fått använda sig av äldre och mer bakåtkompatibla funktioner (exempelvis  XMLDocument API istället för fetch API som har stöd för äldre versioner av webbläsare).

Jag anser att jag har gjort bra tekniska val för denna uppgiften, är dock besviken på att jag inte fick inhämtningen av CV:t att fungera i react (här får jag felet att
"innerHTML" är null) detta beror antagligen på att scriptet körs före den inbäddade HTML-koden.
Detta har jag felsökt länge (provade t.ex att använda "dangerouslySetInnerHTML" utan framgång).

Jag lyckades att implementera liknande funktionallitet genom att använda  useState och returnera HTML-kod men då uppgiftens krav var att jag skulle använda Vanilla-JS så hamnade inte denna lösningen med i det slutliga projektet.



