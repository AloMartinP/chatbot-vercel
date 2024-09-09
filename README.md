This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Running development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Projekt on lihtsa struktuuriga, üks leht ja api kus on post meetod openai-le päringute tegemiseks.
Kuna aeg oli piiratud ei hakanud lisama vestluste salvestamist ja muid ägedaid funktsioone.
Otsustasin teha midagi lihtsat ja töökindlat mida saab kasutada nii telefonis kui ka arvutis mugavalt.

Kasutaja mugavuse seisukohalt on rakendus intuitiivne. Sul on sõnumi esitamise riba ekraani all ning vasutsed jooksevad kesksel. Sinu esitatud sõnum ilmub paremale poole jutuaknas ning sellel on ka oranž kastikene ümber, et eristada ai tekstist.

Värviskeemi valikul lähtusin antud chati teema kohaselt, milleks on raketid.

Kasutasin shadcn komponente kuna tahtsin proovida uut tehnoloogiat ning kujundasin elemente tailwindcss abil. Ma pole kumbagi tehnoloogiat varem kuigi palju kasutanud ja tahtsi proovida midagi uut. Tailwind hakkas täitsa meeldima kuna seda oli väga lihtne ja mugav kasutada.
Olles varem MaterialUI komponente kasutanud siis peaks mainima et shadcn-ga kohaldumine tundus isegi kiirem ja lihtsam.

Testimisel kasutaksin kindlasti Vitesti unit testide jaoks ning cypressi integratsioonitestide jaoks. Neid saab peale buildimist github actionite abil ilusti jooksutada.

Antud rakenduse peamine oht on openai api kasutamine kuna see ei ole piiratud. Peaks lisama lihtsama autentimise rakendusele ja piirama mitte autentitud kasutajate päringuid.
