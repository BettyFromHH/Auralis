# AURALIS Skin

Auralis ist der ILIAS-Skin der Helmut-Schmidt-Universität / Universität der Bundeswehr Hamburg.  

## Allgemein

Der Auralis-Skin basiert auf dem Standard-Skin DELOS und stellt viele, zusätzliche Features bereit.  
Die grundlegende Maßgabe für die Entwicklung des Auralis-Skin war die Reversibilität. Der Auralis-Skin ist vollständig 
reversibel entwickelt worden, so dass keine zusätzlichen Patches für die Plattform benötigt werden.

<br>

### Version

Auralis-Version: 1.0 (ILIAS-Version: 9.14)

<br>

## Features

### Übersicht

- Copy-Link - Button
- Scroll-To-Top - Button
- Page-Position - Marker
- Content-Loader

<br>

### Features im Detail

#### <span><img src="images/icons/copylink.svg" width="24" height="24" alt="Copy Icon" style="vertical-align: middle;">&nbsp;</span> Copy-Link - Button

Erstellt ein Icon neben den Breadcrumbs, womit beim klicken auf das Icon der permanente Link zu dem aktuellen Objekt 
direkt in die Zwischenablage kopiert wird.
Gleichzeitig wird die Option aus dem Footer entfernt.

<br>

#### <span><img src="images/icons/arrow_up_1c1c1c.svg" width="20" height="20" alt="Copy Icon" style="border-radius: 50%; padding: 4px; border: 2px solid #1c1c1c; vertical-align: middle;">&nbsp;</span> Scroll-To-Top - Button

Fügt auf allen Seiten einen Scroll-To-Top Button ein, welcher beim scrollen auf der Seite eingeblendet wird. Beim 
klicken auf den Button wird ein sanfter Bildlauf zum Seitenanfang durchgeführt.

<br>

#### Page-Position - Marker

Der Page-Position - Marker zeigt unterhalb der Breadcrumbs die Scrollposition auf der Seite als waagerechter Balken an. 
Dies ermöglicht eine Orientierung über die Scrollposition auf der Seite auch bei ausgeblendeten Scrollleisten. 

<br>

#### <span><img src="images/media/loader.svg" width="12" height="12" alt="Copy Icon" style="vertical-align: middle;">&nbsp;</span> Content-Loader

So lange eine Seite geladen wird, wird das Loader-Icon angezeigt. Dies verhindert, dass Glitches, welche durch den 
Umbau des DOM durch den Skin erfolgen sichtbar werden.
Das Hauptmenü und der Header bleiben weiter sichbar.

<br>

## Lizenz

<pre> 
**CC BY-NC-ND 4.0**  
</pre> 

<br>

## Download und Setup

Zunächst muss in das root-Verzeichnis von der ILIAS-Installation gewechselt werden.  
Anschließend kann der Auralis-Skin aus den Repository in das skin-Verzeichnis gecloned werden.

**1. Skin-Verzeichnis erstellen, sofern dieses nicht vorhanden ist und in das Verzeichnis wechseln**

<pre>
mkdir ./Customizing/global/skin
cd ./Customizing/global/skin
</pre>

**2. Auralis-Skin clonen**
<pre>
git clone -b release_9 https://github.com/HSU-HH/Auralis.git auralis
</pre>

Nach dem clonen ist der Auralis-Skin direkt Einsatzbereit und kann über die Administration (Administration > Layout und 
Navigation > Layout - System-Styles) aktiviert und Nutzer*innen zugewiesen werden.  

<br>

## Kontakt

### Entwicklerin  

**Bettina Solzbacher**  
Technische Leitung ILIAS-Supportteam  
Koordinationsstelle E-Lernen  
Helmut-Schmidt-Universität / Universität der Bundeswehr Hamburg  
  
E-Mail: **ilias@hsu-hh.de**  

<br>

## Credits

Die Schriftart Montserrat unterliegt dem Copyright von Designer **Julieta Ulanovsky** und steht unter der freien, offenen SIL Open Font License für private und kommerzielle Projekte.

<br>

## Disclaimer

Dieses Projekt wurde an der Helmut-Schmidt-Universität / Universität der Bundeswehr Hamburg (HSU/UniBw H) entwickelt.

Die Software wird „as is“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Gewährleistung, 
einschließlich, aber nicht beschränkt auf Garantien der Fehlerfreiheit, der Handelsüblichkeit, der Eignung für einen 
bestimmten Zweck oder der Nichtverletzung von Rechten Dritter.

Die Nutzung der Software erfolgt ausschließlich auf eigene Verantwortung.
Die HSU/UniBw H sowie die Autorinnen und Autoren übernehmen keinerlei Haftung für Schäden, die aus der Verwendung 
dieser Software entstehen, soweit ein solcher Ausschluss gesetzlich zulässig ist.

<br>
<br>




