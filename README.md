### FIS Robotics – Website README

**Korte uitleg**

Dit is de website van **FIS Robotics**. De site laat zien wie we zijn, wat we doen en in welke domeinen we actief zijn  
(met de nadruk op zitschalen/zitortheses en de creatieve industrie).

---

### Navigatie van de site

- **Hoofdmenu bovenaan**
  - **Home**: startpagina met introductie, grote achtergrondvideo en een overzicht van de twee hoofd­domeinen.
  - **About / Over ons** (submenu):
    - Zitschalen / Zitortheses
    - Creatieve Industrie
  - **Team**: overzicht van het team.

- **Taalkeuze**
  - De site ondersteunt meerdere talen (bijvoorbeeld Nederlands en Engels).
  - Teksten in het menu en op de pagina’s passen zich aan op basis van de gekozen taal.

- **Social media**
  - In het menu en in de footer staan links naar:
    - LinkedIn
    - Facebook
    - X
    - Instagram

- **Contact**
  - Er is geen aparte contactpagina meer.
  - E‑mailadres en adres staan in de footer op elke pagina.

---

### Homepagina (`/`)

**Wat ziet een bezoeker hier?**

- **Fullscreen achtergrondvideo**  
  - Bovenaan, direct onder de header, draait een video op de achtergrond over de volledige viewport.  
  - Er ligt een donkere overlay overheen zodat alle teksten goed leesbaar blijven.

- **Centraal FIS‑logo**  
  - In het midden van de hero staat het FIS Robotics‑logo met een lichte glow/hover‑animatie.

- **Twee ovale knoppen (domeinen)**
  - **Zitschalen / Zitortheses** (`/zitschalen`)
  - **Creatieve Industrie** (`/creatief`)
  - Op mobiel staan deze knoppen naast elkaar; op grotere schermen blijven ze compact en centraal.

- **Slogan + korte toelichting**
  - Een opvallende slogan in het Inter‑lettertype.
  - Een korte beschrijving onder de slogan die uitlegt wat FIS Robotics doet.

- **Onderste twee kaarten (domeinen)**
  - **Zitschalen / Zitortheses**
  - **Creatieve Industrie**
  - Elke kaart bevat:
    - wisselende afbeeldingen met:
      - pijltjes links/rechts
      - automatische slide elke 5 seconden
      - swipe‑support op mobiel
    - titel, toelichtende tekst en een brede knop “Meer details” onderaan de kaart.

- **Footer**
  - Links: logo.
  - Midden: contactblok met e‑mail en adres (zonder telefoonnummer).
  - Midden rechts: snelle links naar Zitschalen en Creatief.
  - Rechts onder: social media‑iconen.

---

### Zitschalen / Zitortheses (`/zitschalen`)

**Doel van de pagina**  
Uitleg over onze **op maat gemaakte zitschalen en zitortheses**.

**Inhoud in het kort**

- We ontwikkelen zitschalen die precies aansluiten op de lichaamsvorm van de gebruiker.
- Met **3D‑scantechnologie** werken we tot op de millimeter nauwkeurig, voor optimaal comfort en ondersteuning.
- We gebruiken **hoogwaardige, medisch gecertificeerde materialen** die licht en duurzaam zijn.
- We werken samen met ergotherapeuten, fysiotherapeuten en revalidatieartsen zodat de oplossingen voldoen aan medische standaarden.
- We begeleiden het hele traject: van eerste consult tot en met de levering van de definitieve zitoplossing.

De pagina gebruikt de generieke `DetailPage`‑layout: grote titel bovenaan, daarna afwisselend blokken met tekst en (optionele) afbeeldingen links/rechts.

---

### Creatieve Industrie (`/creatief`)

**Doel van de pagina**  
Laat zien wat we doen voor de **creatieve sector** (kunst, tentoonstellingen, musea enzovoort).

**Inhoud in het kort**

- We combineren **technologie en creativiteit** om:
  - interactieve kunstinstallaties
  - innovatieve tentoonstellingsoplossingen  
  te ontwikkelen.
- We werken samen met musea, galeries en kunstenaars om bezoekers te betrekken en te inspireren.
- Onze oplossingen zijn zowel **technisch betrouwbaar** als **esthetisch passend** in een artistieke omgeving.
- We zien technologie als een extra middel voor **artistieke expressie**.

Ook deze pagina gebruikt de `DetailPage`‑layout met afwisselend tekst‑ en beeldblokken.

---

### Team (`/team`)

**Doel van de pagina**  
Stelt het **team achter FIS Robotics** voor.

**Inhoud in het kort**

- Bovenaan dezelfde navigatie als op andere pagina’s (Home, About, Team).
- In een centraal blok worden de teamleden getoond, in rastervorm (meerdere rijen).
- Bij elk teamlid staat:
  - naam
  - rol/functie (meertalig, afhankelijk van taalinstelling)
- Onderaan staat dezelfde footer met links naar de belangrijkste domeinen en social media.

---

### Technische informatie (voor ontwikkelaars)

- De site is gebouwd met **Next.js** (React, app router).
- Belangrijke pagina’s:
  - `app/page.tsx`: Homepagina (met fullscreen achtergrondvideo en carrouselkaarten)
  - `app/zitschalen/page.tsx`: Zitschalen / Zitortheses (via `DetailPage`)
  - `app/creatief/page.tsx`: Creatieve Industrie (via `DetailPage`)
  - `app/team/page.tsx`: Team
- Er is een **taalcontext** (`LanguageContext`) voor meertaligheid.
- Standaard development‑start:

```bash
npm install
npm run dev
```

De site is vervolgens bereikbaar op `http://localhost:3000`.

