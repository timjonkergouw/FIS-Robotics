# FIS Robotics Website

Deze README is geschreven voor iemand met weinig technische ervaring.
Volg de stappen hieronder en je krijgt de website lokaal werkend.

## 1) Wat is dit?

Dit project is de FIS Robotics website met onder andere:
- Homepagina
- `zitschalen` pagina
- `creatief` pagina
- `team` pagina
- Nederlands en Engels (meertaligheid)

Techniek:
- Next.js (React)
- TypeScript

## 2) Wat heb je nodig?

Installeer eerst:
- Node.js (aanbevolen: LTS versie)
- npm (zit standaard bij Node.js)

Controleer in terminal:

```bash
node -v
npm -v
```

## 3) Project starten (lokaal)

Open terminal in de projectmap en voer uit:

```bash
npm install
npm run dev
```

Daarna open je:
- [http://localhost:3000](http://localhost:3000)

Stoppen van de server:
- `Ctrl + C` in de terminal

## 4) Belangrijkste bestanden

Gebruik deze als startpunt:
- `app/page.tsx` -> homepagina
- `app/zitschalen/page.tsx` -> zitschalen pagina
- `app/creatief/page.tsx` -> creatieve industrie pagina
- `app/team/page.tsx` -> teampagina
- `app/contexts/LanguageContext.tsx` -> alle teksten (NL + EN)
- `app/components/DetailPage.tsx` -> layout voor detailpagina's
- `app/components/ImageCarousel.tsx` -> slider met pijltjes
- `public/images` -> alle afbeeldingen

## 5) Teksten aanpassen (NL en EN)

Alle vertaalde teksten staan in:
- `app/contexts/LanguageContext.tsx`

Daar vind je twee blokken:
- `nl: { ... }`
- `en: { ... }`

Pas altijd beide aan als je wilt dat een tekst in beide talen klopt.

Voorbeeld sleutels:
- `zitschalen.heading1`
- `zitschalen.section1`
- `creatief.section2`

## 6) Afbeeldingen aanpassen

Afbeeldingen staan in:
- `public/images`

En worden gekoppeld in bijvoorbeeld:
- `app/zitschalen/page.tsx`
- `app/creatief/page.tsx`

Voorbeeld:

```ts
images: [
  "/images/zitschalen1.png",
  "/images/zitschalen2.jpg",
]
```

Let heel goed op:
- bestandsnaam moet exact kloppen
- extensie moet exact kloppen (`.jpg` is anders dan `.png`)
- hoofdletters/kleine letters moeten kloppen

## 7) Waarom een image soms niet zichtbaar is

Meest voorkomende oorzaken:
- verkeerd gespelde bestandsnaam (bijv. `funtie2.jpg` vs `functie2.jpg`)
- verkeerde extensie (`.png` gebruikt terwijl bestand `.jpg` is)
- bestand staat niet in `public/images`
- oude browsercache / oude dev build

Snelle fix:
1. Controleer naam in `public/images`
2. Controleer naam in de pagina-code
3. Herstart dev-server (`Ctrl + C`, daarna `npm run dev`)
4. Hard refresh in browser (`Ctrl + F5`)

## 8) Build voor productie

Controleer of project buildt:

```bash
npm run build
npm run start
```

## 9) Handige workflow bij wijzigingen

1. Pas tekst of image-link aan
2. Sla op
3. Bekijk direct in browser
4. Test in NL en EN
5. Controleer of slider-pijltjes en afbeeldingen nog goed werken

## 10) Veelgemaakte fouten

- Alleen NL aangepast, EN vergeten
- Image in map gezet, maar met andere naam dan in code
- Verkeerde map gebruikt (`public/images` is verplicht voor lokale image paden zoals `/images/...`)
- Typfout in sleutelnaam in `LanguageContext`

---

Als je deze README volgt, kun je de website starten, teksten aanpassen en afbeeldingen beheren zonder diepgaande programmeerkennis.

