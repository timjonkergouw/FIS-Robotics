### FIS Robotics – Website README

**Korte uitleg**

Dit is de website van **FIS Robotics**. De site laat zien wie we zijn, wat we doen en in welke domeinen we actief zijn.  
Deze README is geschreven in gewone taal zodat ook mensen zonder technische achtergrond snappen wat er op de site gebeurt.

---

### Navigatie van de site

- **Hoofdmenu bovenaan**
  - **Home**: startpagina met introductie en overzicht van de belangrijkste onderdelen.
  - **About / Over ons**: bevat de verschillende domeinen:
    - Zitschalen / Zitortheses
    - Creatieve Industrie
    - SmartCAM
    - Hardware
  - **Team**: overzicht van het team.
  - **Contact**: verwijst naar het contactgedeelte onderaan de pagina.

- **Taalkeuze**
  - De site ondersteunt meerdere talen (bijvoorbeeld Nederlands en Engels).
  - Teksten in het menu en op diverse pagina’s passen zich aan op basis van de gekozen taal.

- **Social media**
  - In het menu en in de footer staan links naar:
    - LinkedIn
    - Facebook
    - X
    - Instagram

---

### Homepagina (`/`)

**Wat ziet een bezoeker hier?**

- **Introductietekst links**  
  Een duidelijke titel en tekst over **FIS Robotics**: wie we zijn en waar we voor staan.

- **FIS Robotics logo rechts**  
  Het logo staat prominent in beeld voor herkenning en merkuitstraling.

- **Centrale quote / slogan**  
  In het midden van de pagina staat een opvallende quote die onze visie samenvat.

- **Carrousel met domeinen**  
  Onderaan de homepagina staat een carrousel met kaarten voor:
  - Zitschalen / Zitortheses
  - Creatieve Industrie
  - SmartCAM
  - Hardware  

  Elke kaart heeft een titel, korte beschrijving, afbeelding en link naar de bijbehorende detailpagina.

- **Footer**  
  Onderaan de pagina:
  - links naar de belangrijkste onderdelen (Zitschalen, Creatief, SmartCAM, Hardware)
  - social media links
  - contactinformatie / contactlink

---

### Zitschalen / Zitortheses (`/zitschalen`)

**Doel van de pagina**  
Uitleg over onze **op maat gemaakte zitschalen en zitortheses**.

**Inhoud in het kort**

- We ontwikkelen zitschalen die precies aansluiten op de lichaamsvorm van de gebruiker.
- Met **3D-scantechnologie** werken we tot op de millimeter nauwkeurig, voor optimaal comfort en ondersteuning.
- We gebruiken **hoogwaardige, medisch gecertificeerde materialen** die licht en duurzaam zijn.
- We werken samen met ergotherapeuten, fysiotherapeuten en revalidatieartsen zodat de oplossingen voldoen aan medische standaarden.
- We begeleiden het hele traject: van eerste consult tot en met de levering van de definitieve zitoplossing.

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

---

### SmartCAM (`/smartcam`)

**Doel van de pagina**  
Beschrijft **SmartCAM**, onze CAM-software voor geautomatiseerde en precieze productieprocessen.

**Inhoud in het kort**

- SmartCAM:
  - optimaliseert productieprocessen
  - vermindert verspilling
  - verhoogt efficiëntie
- Geschikt voor zowel kleine werkplaatsen als grote productielocaties.
- Maakt gebruik van **machine learning** om productiepatronen te analyseren en te verbeteren.
- Biedt **real-time monitoring** en bijsturing voor maximale nauwkeurigheid.
- Klanten ervaren doorgaans:
  - kortere productietijd
  - minder materiaalgebruik
  - hogere nauwkeurigheid
- We bieden ondersteuning en training, plus regelmatige updates van de software.

---

### Hardware (`/hardware`)

**Doel van de pagina**  
Laat de **hardware-oplossingen** van FIS Robotics zien.

**Inhoud in het kort**

- Robuuste en betrouwbare hardware voor verschillende toepassingen.
- Van losse elektronische componenten tot complete systemen op maat.
- We gebruiken onderdelen van **toonaangevende fabrikanten** en testen onder zware omstandigheden.
- Ondersteuning van **prototype** tot **serieproductie**.
- Onze hardware-engineers adviseren over de beste oplossing voor elke specifieke toepassing.

---

### Team (`/team`)

**Doel van de pagina**  
Stelt het **team achter FIS Robotics** voor.

**Inhoud in het kort**

- Bovenaan dezelfde navigatie als op andere pagina’s (Home, About, Team, Contact).
- In een centraal blok worden de teamleden getoond, meestal in twee rijen van drie en één persoon gecentreerd.
- Bij elk teamlid staat:
  - naam
  - rol/functie (meertalig, afhankelijk van taalinstelling)
- Onderaan staat dezelfde footer met links naar de belangrijkste domeinen en social media.

---

### Technische informatie (voor ontwikkelaars)

- De site is gebouwd met **Next.js** (React, app router).
- Belangrijke pagina’s:
  - `app/page.tsx`: homepagina
  - `app/zitschalen/page.tsx`: Zitschalen / Zitortheses
  - `app/creatief/page.tsx`: Creatieve Industrie
  - `app/smartcam/page.tsx`: SmartCAM
  - `app/hardware/page.tsx`: Hardware
  - `app/team/page.tsx`: Team
- Er is een **taalcontext** (`LanguageContext`) voor meertaligheid.
- Standaard development-start:

```bash
npm install
npm run dev
```

De site is vervolgens bereikbaar op `http://localhost:3000`.

