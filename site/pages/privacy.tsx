import { Container } from '@components/ui'
import { Layout } from '@components/common'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Privacy() {
  const t = useTranslations('privacy')

  return (
    <div className="mt-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-5 mb-10">
          <div className="order-last flex flex-col self-center text-xl md:text-[20px]">
            {/* <p className="text-[30px] text-[#000000] leading-[40px] font-normal">
              {t('title-1')}
            </p> */}
            <h1 className="text-[30px] text-[#000000] leading-[40px] font-normal text-center">
              <span>Obchodn&eacute; podmienky</span>
              <br />
              <br />
            </h1>
            <p>
              <span>Trans logistic servis s.r.o.</span>
              <span>
                <br />
              </span>
              <span>
                Jenisejsk&aacute; 45A 040 12 Ko&scaron;ice - mestsk&aacute; časť
                Nad jazerom
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>IČO: 53312163</span>
              <span>
                <br />
              </span>
              <span>DIČ: 2121337845</span>
              <span>
                <br />
              </span>
              <span>IBAN: SK63 0200 0000 0043884517153</span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>tel.: +421919372404 /pondelok - piatok: 9.00 - 16.00</span>
            </p>
            <p>
              <span>mail: tatrahills@gmail.сom</span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>Kontaktn&aacute; osoba eshopu: Vladyslav Kolesnyk </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                V&yacute;dajn&eacute; miesto pre osobn&yacute;
                odber:&nbsp;Tatrahills . Osloboditeľov 42 Ko&scaron;ice. ( Areal
                Barca)
              </span>
            </p>
            <p>
              <span>
                (ďalej tiež len ako &bdquo;pred&aacute;vaj&uacute;ci&ldquo;)
              </span>
              <span>
                <br />
                <br />
              </span>
            </p>
            <ol>
              <li className="text-center">
                <strong className="text-[30px] text-[#000000] leading-[40px] font-normal text-center">
                  V&scaron;eobecn&eacute; ustanovenia
                  <br />
                  <br />
                </strong>
              </li>
            </ol>
            <p>
              <span>
                1.1 Tieto v&scaron;eobecn&eacute; obchodn&eacute; podmienky
                (ďalej tiež len ako &bdquo;obchodn&eacute; podmienky&ldquo;) sa
                vzťahuj&uacute; na n&aacute;kup v&nbsp;internetovom obchode
                pred&aacute;vaj&uacute;ceho, ktor&yacute; je
                prev&aacute;dzkovan&yacute; na webovej
                adrese&nbsp;www.tatrahills.com&nbsp;( ďalej tiež ako &bdquo;e-
                shop&ldquo;).
              </span>
            </p>
            <p>
              <span>
                1.2 Tieto obchodn&eacute; podmienky &scaron;pecifikuj&uacute;
                pr&aacute;va a&nbsp;povinnosti zmluvn&yacute;ch str&aacute;n
                t.j. pred&aacute;vaj&uacute;ceho a&nbsp;kupuj&uacute;ceho
                a&nbsp;tvoria neoddeliteľn&uacute; s&uacute;časť k&uacute;pnej
                zmluvy.
              </span>
            </p>
            <p>
              <span>
                1.3 V&nbsp;pr&iacute;pade, že pred&aacute;vaj&uacute;ci
                a&nbsp;kupuj&uacute;ci uzatvoria p&iacute;somn&uacute;
                k&uacute;pnu zmluvu, v&nbsp;ktorej si dohodn&uacute; podmienky
                odchylne od t&yacute;chto obchodn&yacute;ch podmienok,
                ustanovenia p&iacute;somnej k&uacute;pnej zmluvy maj&uacute;
                prednosť pred t&yacute;mito obchodn&yacute;mi podmienkami.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <ol>
              <li className="text-center">
                <strong className="text-[30px] text-[#000000] leading-[40px] font-normal text-center">
                  Použitie pr&aacute;vnych predpisov a&nbsp;v&yacute;klad pojmov{' '}
                  <br />
                  <br />
                </strong>
              </li>
            </ol>
            <p>
              <span>
                2.1 Zmluvn&eacute; vzťahy, na ktor&eacute; sa vzťahuj&uacute;
                tieto obchodn&eacute; podmienky sa spravuj&uacute;
                pr&iacute;slu&scaron;n&yacute;mi pr&aacute;vnymi predpismi
                platn&yacute;mi a&nbsp;&uacute;činn&yacute;mi na
                &uacute;zem&iacute; Slovenskej republiky.
              </span>
            </p>
            <p>
              <span>
                2.2 V&nbsp;pr&iacute;pade, ak je kupuj&uacute;cim spotrebiteľ,
                vzťahy neupraven&eacute; t&yacute;mito obchodn&yacute;mi
                podmienkami sa spravuj&uacute; nasledovn&yacute;mi
                z&aacute;konmi:
              </span>
            </p>
            <ul>
              <li>
                <span>
                  Z&aacute;kon č. 40/1964 Zb. Občiansky z&aacute;konn&iacute;k
                </span>
              </li>
              <li>
                <span>
                  Z&aacute;kon č. 250/2007 Z.z. o&nbsp;ochrane spotrebiteľa
                  v&nbsp;platnom znen&iacute;
                </span>
              </li>
              <li>
                <span>
                  Z&aacute;kon č. 102/2014 Z.z. o ochrane spotrebiteľa pri
                  predaji tovaru alebo poskytovan&iacute; služieb na
                  z&aacute;klade zmluvy uzavretej na diaľku alebo zmluvy
                  uzavretej mimo prev&aacute;dzkov&yacute;ch priestorov
                  pred&aacute;vaj&uacute;ceho a o zmene a doplnen&iacute;
                  niektor&yacute;ch z&aacute;konov
                </span>
              </li>
              <li>
                <span>
                  Z&aacute;kon č. 22/2004 Z.z. o elektronickom obchode a o zmene
                  a doplnen&iacute; z&aacute;kona č. 128/2002 Z. z. o
                  &scaron;t&aacute;tnej kontrole vn&uacute;torn&eacute;ho trhu
                  vo veciach ochrany spotrebiteľa a o zmene a doplnen&iacute;
                  niektor&yacute;ch z&aacute;konov v znen&iacute; z&aacute;kona
                  č. 284/2002 Z. z.
                </span>
              </li>
              <li>
                <span>
                  Z&aacute;kon č. 18/2018 Z. z. o&nbsp;ochrane osobn&yacute;ch
                  &uacute;dajov v&nbsp;znen&iacute; neskor&scaron;&iacute;ch
                  predpisov.
                </span>
              </li>
            </ul>
            <p>
              <span>
                2.3 V&nbsp;pr&iacute;pade, ak nie je kupuj&uacute;cim
                spotrebiteľ, vzťahy neupraven&eacute; t&yacute;mito
                obchodn&yacute;mi podmienkami sa spravuj&uacute; z&aacute;konom
                č. 513/1991 Zb. Obchodn&yacute; z&aacute;konn&iacute;k
              </span>
            </p>
            <p>
              <span>
                2.4 Spotrebiteľom sa rozumie fyzick&aacute; osoba alebo
                pr&aacute;vnick&aacute; osoby, ktor&aacute; nakupuje tovar pre
                osobn&uacute; potrebu (pri uzatv&aacute;ran&iacute;
                a&nbsp;plnen&iacute; zmluvy nejedn&aacute; v&nbsp;r&aacute;mci
                svojej obchodnej činnosti alebo inej podnikateľskej činnosti)
              </span>
            </p>
            <p>
              <span>
                2.5 Kupuj&uacute;ci, ktor&yacute; nie je spotrebiteľom, je
                podnikateľ, ktor&yacute; nakupuje tovar za &uacute;čelom svojho
                podnikania.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <p className="text-center">
              <strong className="text-[30px] text-[#000000] leading-[40px] font-normal text-center">
                Objedn&aacute;vka, sp&ocirc;sob uzatv&aacute;rania k&uacute;pnej
                zmluvy <br />
                <br />
              </strong>
            </p>
            <p>
              <span>
                3.1 Zmluvn&yacute; vzťah medzi pred&aacute;vaj&uacute;cim
                a&nbsp;kupuj&uacute;cim sa spravuje pr&aacute;vnymi predpismi
                platn&yacute;mi a&nbsp;&uacute;činn&yacute;mi na
                &uacute;zem&iacute; Slovenskej republiky a&nbsp;k&uacute;pnou
                zmluvou, ktorej neoddeliteľnou s&uacute;časťou s&uacute; tieto
                obchodn&eacute; podmienky.
              </span>
            </p>
            <p>
              <span>
                3.2 N&aacute;vrh na uzavretie k&uacute;pnej zmluvy zasiela
                kupuj&uacute;ci pred&aacute;vaj&uacute;cemu vo forme
                vyplnen&eacute;ho a&nbsp;odoslan&eacute;ho formul&aacute;ra
                (ďalej tiež ako &bdquo;objedn&aacute;vka&ldquo;), ktor&yacute;
                sa nach&aacute;dza na webovej adrese
                www.tatrahills.com&nbsp;a&nbsp;k&uacute;pna zmluva v&nbsp;takom
                pr&iacute;pade vznik&aacute; doručen&iacute;m formul&aacute;ra
                pred&aacute;vaj&uacute;cemu . Predmetom k&uacute;pnej zmluvy je
                odplatn&yacute; prevod vlastn&iacute;ckeho pr&aacute;va
                k&nbsp;tovaru označen&eacute;ho kupuj&uacute;cim za k&uacute;pnu
                cenu a&nbsp;za podmienok uveden&yacute;ch v&nbsp;tejto
                objedn&aacute;vke. Pred&aacute;vaj&uacute;ci je povinn&yacute;
                po odoslan&iacute; objedn&aacute;vky zaslať kupuj&uacute;cemu na
                jeho e-mailov&uacute; adresu uveden&uacute;
                v&nbsp;objedn&aacute;vke ozn&aacute;menie o&nbsp;prijat&iacute;
                objedn&aacute;vky do elektronick&eacute;ho syst&eacute;mu
                pred&aacute;vaj&uacute;ceho (ďalej tiež ako &bdquo;potvrdenie
                doručenia objedn&aacute;vky&ldquo;).
              </span>
            </p>
            <p>
              <span>
                3.3 Potvrdenie doručenia objedn&aacute;vky nie je
                akceptovan&iacute;m n&aacute;vrhu na uzavretie k&uacute;pnej
                zmluvy, ale sl&uacute;ži na to, aby bol kupuj&uacute;ci
                informovan&yacute;, že pred&aacute;vaj&uacute;cemu bola
                doručen&aacute; objedn&aacute;vka.
              </span>
            </p>
            <p>
              <span>
                3.4 V&nbsp;pr&iacute;pade, že objedn&aacute;vka
                kupuj&uacute;ceho bola zo strany pred&aacute;vaj&uacute;ceho
                akceptovan&aacute; (ďalej tiež ako &bdquo;akcept&aacute;cia
                objedn&aacute;vky&ldquo;) je tento povinn&yacute; zaslať na e-
                mailov&uacute; adresu kupuj&uacute;ceho o&nbsp;tejto skutočnosti
                inform&aacute;ciu.
              </span>
            </p>
            <p>
              <span>
                3.5 Akcept&aacute;cia objedn&aacute;vky obsahuje
                inform&aacute;ciu o n&aacute;zve a &scaron;pecifik&aacute;cii
                tovaru, ktor&eacute;ho predaj je predmetom k&uacute;pnej zmluvy,
                ďalej &uacute;daje o cene tovaru a/alebo in&yacute;ch služieb,
                &uacute;daj o predpokladanej dodacej lehote tovaru, n&aacute;zov
                a &uacute;daje o mieste, kde m&aacute; byť tovar dodan&yacute; a
                &uacute;daje o pr&iacute;padnej cene, podmienkach, sp&ocirc;sobe
                a term&iacute;ne prepravy tovaru do dohodnut&eacute;ho miesta
                doručenia tovaru pre kupuj&uacute;ceho, &uacute;daje o
                pred&aacute;vaj&uacute;com (obchodn&eacute; meno, s&iacute;dlo,
                IČO a pod.), pr&iacute;padne aj in&eacute; potrebn&eacute;
                &uacute;daje.
              </span>
            </p>
            <p>
              <span>
                3.6 K&uacute;pna zmluva sa považuje za uzatvoren&uacute;
                doručen&iacute;m akcept&aacute;cie objedn&aacute;vky v
                elektronickej alebo p&iacute;somnej podobe Kupuj&uacute;cemu a v
                pr&iacute;pade pochybnost&iacute; o doručen&iacute;
                akcept&aacute;cie objedn&aacute;vky Kupuj&uacute;cemu je
                k&uacute;pna zmluva uzavret&aacute; aj prevzat&iacute;m
                objednan&eacute;ho tovaru a zaplaten&iacute;m k&uacute;pnej ceny
                Kupuj&uacute;cim alebo n&iacute;m poverenou osobou.
              </span>
            </p>
            <p>
              <span>
                3.7 Uzatvoren&iacute;m k&uacute;pnej zmluvy vznik&aacute;
                pred&aacute;vaj&uacute;cemu z&aacute;v&auml;zok dodať
                kupuj&uacute;cemu dohodnut&yacute; tovar a&nbsp;previesť na neho
                vlastn&iacute;cke pr&aacute;vo k&nbsp;tomuto tovaru
                a&nbsp;z&aacute;v&auml;zok kupuj&uacute;ceho zaplatiť
                pred&aacute;vaj&uacute;cemu k&uacute;pnu cenu podľa
                dohodnut&yacute;ch platobn&yacute;ch podmienok
                a&nbsp;dodan&yacute; tovar prevziať.
              </span>
            </p>
            <p>
              <span>
                3.8 Kupuj&uacute;ci m&ocirc;že doručiť prostredn&iacute;ctvom
                elektronickej po&scaron;ty alebo telefonicky
                pred&aacute;vaj&uacute;cemu kedykoľvek pred exped&iacute;ciou
                tovaru od doručenia objedn&aacute;vky
                pred&aacute;vaj&uacute;cemu ozn&aacute;menie, že
                objedn&aacute;vku ru&scaron;&iacute;. Kupuj&uacute;ci je
                povinn&yacute; v ozn&aacute;men&iacute; o zru&scaron;en&iacute;
                objedn&aacute;vky uviesť meno, e-mail a popis objednan&eacute;ho
                tovaru. V pr&iacute;pade zru&scaron;enia objedn&aacute;vky
                pred&aacute;vaj&uacute;ci ne&uacute;čtuje kupuj&uacute;cemu
                žiadne poplatky s&uacute;visiace so zru&scaron;en&iacute;m
                objedn&aacute;vky. V pr&iacute;pade, že kupuj&uacute;ci zaplatil
                pred&aacute;vaj&uacute;cemu k&uacute;pnu cenu alebo jej časť v
                čase do zru&scaron;enia objedn&aacute;vky,
                pred&aacute;vaj&uacute;ci vr&aacute;ti už zaplaten&uacute;
                k&uacute;pnu cenu alebo jej časť v lehote do 14 dn&iacute; od
                zru&scaron;enia objedn&aacute;vky sp&ocirc;sobom ak&yacute; bol
                použit&yacute; pri platbe za tovar, pokiaľ objedn&aacute;vateľ
                nepožiada inak.
              </span>
            </p>
            <p>
              <span>
                3.9 Kupuj&uacute;ci uzatvoren&iacute;m k&uacute;pnej zmluvy
                potvrdzuje, že tieto obchodn&eacute; podmienky tvoria
                neoddeliteľn&uacute; s&uacute;časť k&uacute;pnej zmluvy, že sa
                s&nbsp;nimi dostatočn&eacute; obozn&aacute;mil, pričom mu bol na
                obozn&aacute;menie poskytnut&yacute; dostatočn&yacute;
                časov&yacute; priestor a&nbsp;že t&yacute;mto obchodn&yacute;m
                podmienkam rozumie.
              </span>
            </p>
            <p>
              <span>
                3.10 Pred&aacute;van&eacute; produkty s&uacute; z oblasti
                použit&eacute;ho oblečenia a doplnkov (second hand). Pri
                tak&yacute;chto produktoch nem&ocirc;žeme garantovať pravosť
                v&yacute;robkov, nakoľko sa nenakupuj&uacute; priamo od
                v&yacute;robcu alebo ofici&aacute;lneho distrib&uacute;tora
                tovaru.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>

            <ol>
              <li className="text-center">
                <strong className="text-[30px] text-[#000000] leading-[40px] font-normal text-center">
                  Dodacie podmienky <br />
                  <br />
                </strong>
              </li>
            </ol>
            <p>
              <span>
                4.1 Pred&aacute;vaj&uacute;ci je povinn&yacute;
                objedn&aacute;vku kupuj&uacute;ceho splniť a tovar
                kupuj&uacute;cemu dod&aacute; v čo najkrat&scaron;ej dobe po
                prijat&iacute; elektronick&eacute;ho formul&aacute;ru
                s&nbsp;objedn&aacute;vkou. Dodacia lehota je r&ocirc;zna
                v&nbsp;z&aacute;vislosti od jednotliv&yacute;ch produktov.
              </span>
            </p>
            <p>
              <span>
                4.2 V pr&iacute;pade, že pred&aacute;vaj&uacute;ci nie je
                schopn&yacute; dodať kupuj&uacute;cemu v&scaron;etok
                objednan&yacute; tovar v dohodnutom term&iacute;ne,
                upovedom&iacute; o tejto situ&aacute;ci&iacute; v čo
                najkrat&scaron;om čase kupuj&uacute;ceho a ozn&aacute;mi mu
                predpokladan&yacute; term&iacute;n dodania objednan&eacute;ho
                tovaru alebo mu navrhne dodanie n&aacute;hradn&eacute;ho
                tovaru.&nbsp;Ak pred&aacute;vaj&uacute;ci nedod&aacute; vec ani
                v tejto dodatočnej primeranej lehote, kupuj&uacute;ci je
                opr&aacute;vnen&yacute; odst&uacute;piť od zmluvy.
              </span>
            </p>
            <p>
              <span>
                4.3 Tovar bude dodan&yacute; s využit&iacute;m služieb
                tret&iacute;ch subjektov (zmluvn&yacute; prepravca,
                kuri&eacute;rska služba) alebo pred&aacute;vaj&uacute;ci
                dod&aacute; tovar vlastn&yacute;mi prostriedkami alebo na
                z&aacute;klade dohody s kupuj&uacute;cim bude tovar
                pripraven&yacute; u pred&aacute;vaj&uacute;ceho na odovzdanie.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                4.4 Kupuj&uacute;ci je povinn&yacute; prevziať tovar v mieste,
                ktor&eacute; je pred&aacute;vaj&uacute;cim alebo jeho
                z&aacute;stupcom, poveren&yacute;m doručiť tovar a
                kupuj&uacute;cim dohodnut&eacute; v k&uacute;pnej zmluve alebo
                in&yacute;m sp&ocirc;sobom v čase pred doručovan&iacute;m tovaru
                (ďalej len &bdquo;Miesto&ldquo;). Kupuj&uacute;ci je
                povinn&yacute; prevziať tovar v časovom rozsahu, ktor&eacute; je
                pred&aacute;vaj&uacute;cim alebo jeho z&aacute;stupcom,
                poveren&yacute;m doručiť tovar a kupuj&uacute;cim
                dohodnut&eacute; v k&uacute;pnej zmluve alebo in&yacute;m
                sp&ocirc;sobom v čase pred doručovan&iacute;m tovaru (ďalej len
                &bdquo;Časov&yacute; rozsah&ldquo;).
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                4.5 V pr&iacute;pade, ak pred&aacute;vaj&uacute;ci
                doprav&iacute; tovar kupuj&uacute;cemu na Miesto a v Časovom
                rozsahu, kupuj&uacute;ci je povinn&yacute; prevziať tovar osobne
                alebo zabezpečiť, aby tovar prevzala osoba, ktor&uacute;
                splnomocn&iacute; pre pr&iacute;pad svojej nepr&iacute;tomnosti
                na prevzatie tovaru a podp&iacute;sať protokol o
                zaplaten&iacute; k&uacute;pnej ceny a doručen&iacute; a
                odovzdan&iacute; tovaru. Tretia osoba splnomocnen&aacute; na
                prevzatie tovaru je povinn&aacute; predložiť
                pred&aacute;vaj&uacute;cemu origin&aacute;l alebo k&oacute;piu
                akcept&aacute;cie objedn&aacute;vky. Tovar sa považuje za
                dodan&yacute; a prevzat&yacute; okamihom doručenia tovaru
                kupuj&uacute;cemu. Doručen&iacute;m tovaru kupuj&uacute;cemu sa
                rozumie dodanie tovaru na Miesto, jeho prevzatie
                kupuj&uacute;cim alebo treťou osobou splnomocnenou
                kupuj&uacute;cim a podp&iacute;sanie protokolu o
                zaplaten&iacute; k&uacute;pnej ceny a doručen&iacute; a
                odovzdan&iacute; tovaru kupuj&uacute;cim alebo treťou osobou
                splnomocnenou kupuj&uacute;cim.
              </span>
            </p>
            <p>
              <span>
                4.6 Pred&aacute;vaj&uacute;ci je opr&aacute;vnen&yacute; vyzvať
                kupuj&uacute;ceho na prevzatie tovaru pred uplynut&iacute;m
                lehoty dohodnutej v k&uacute;pnej zmluve.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                4.7 Ak bude potrebn&eacute; dodanie tovaru opakovať z
                d&ocirc;vodu nepr&iacute;tomnosti kupuj&uacute;ceho na Mieste a
                v Časovom rozsahu alebo v pr&iacute;pade, ak kupuj&uacute;ci bez
                predch&aacute;dzaj&uacute;ceho p&iacute;somn&eacute;ho
                odst&uacute;penia od k&uacute;pnej zmluvy neprevezme tovar do 7
                dn&iacute; po m&aacute;rnom uplynut&iacute; Časov&eacute;ho
                rozsahu, vznik&aacute; pred&aacute;vaj&uacute;cemu n&aacute;rok
                na uplatnenie n&aacute;hrady za vzniknut&uacute; &scaron;kodu vo
                v&yacute;&scaron;ke skutočn&yacute;ch n&aacute;kladov na pokus o
                ne&uacute;spe&scaron;n&eacute; doručenie tovaru na Miesto.
                Pred&aacute;vaj&uacute;ci nezodpoved&aacute; za
                oneskoren&uacute; dod&aacute;vku tovaru zavinen&uacute;
                doručovateľom (po&scaron;ta, kuri&eacute;r) alebo udan&iacute;m
                nespr&aacute;vnej adresy kupuj&uacute;cim.
              </span>
            </p>
            <p>
              <span>
                4.8 Kupuj&uacute;ci je povinn&yacute; d&ocirc;kladne
                skontrolovať tovar pri jeho prevzat&iacute; od doručovateľa a
                potvrdiť svoj&iacute;m podpisom prevzatie tovaru na doklade o
                prevzat&iacute; tovaru. Pokiaľ je z&aacute;sielka viditeľne
                po&scaron;koden&aacute; alebo zničen&aacute;, kupuj&uacute;ci je
                povinn&yacute; bez prevzatia z&aacute;sielky ihneď kontaktovať
                pred&aacute;vaj&uacute;ceho. Reklam&aacute;ciu za
                pr&iacute;padn&eacute; nedodanie tovaru vinou doručovateľa alebo
                po&scaron;kodenie tovaru zavinen&eacute; doručovateľom je
                nutn&eacute; v tak&yacute;chto pr&iacute;padoch uplatňovať
                priamo u doručovateľa. Reklam&aacute;cie mechanick&eacute;ho
                po&scaron;kodenia tovaru zapr&iacute;činen&eacute;ho prepravou,
                prevzatie ktor&eacute;ho bez v&aacute;d potvrdil kupuj&uacute;ci
                doručovateľovi, nebud&uacute; pred&aacute;vaj&uacute;cim
                uznan&eacute; ako opr&aacute;vnen&eacute; a plnenie z takejto
                reklam&aacute;cie nebude kupuj&uacute;cemu poskytnut&eacute;.
              </span>
            </p>
            <p>
              <span>
                4.9 Kupuj&uacute;ci je opr&aacute;vnen&yacute; v pr&iacute;pade
                nedodania tovaru pred&aacute;vaj&uacute;cim v dohodnutej lehote
                odst&uacute;piť od k&uacute;pnej zmluvy a
                pred&aacute;vaj&uacute;ci je povinn&yacute; vr&aacute;tiť
                kupuj&uacute;cemu už zaplaten&uacute; časť k&uacute;pnej ceny v
                lehote 14 dn&iacute; od doručenia odst&uacute;penia od
                k&uacute;pnej zmluvy bezhotovostn&yacute;m prevodom na
                bankov&yacute; &uacute;čet kupuj&uacute;ceho určen&yacute;
                kupuj&uacute;cim, alebo sp&ocirc;sobom podľa dohody medzi
                Kupuj&uacute;cim a Pred&aacute;vaj&uacute;cim.
              </span>
            </p>
            <p>
              <span>
                4.10 V pr&iacute;pade, ak si kupuj&uacute;ci z&aacute;sielku z
                ak&yacute;chkoľvek d&ocirc;vodov neprevezme, je tak&eacute;to
                konanie považovan&eacute; za poru&scaron;enie
                k&uacute;pnopredajnej zmluvy medzi Kupuj&uacute;cim a
                Pred&aacute;vaj&uacute;cim, za čo si vyhradzujeme pr&aacute;vo
                pri každej ďal&scaron;ej objedn&aacute;vke kupuj&uacute;ceho
                žiadať platbu vopred bankov&yacute;m prevodom.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <ol>
              <li>
                <span> K&uacute;pna cena</span>
              </li>
            </ol>
            <p>
              <span>
                5.1. Kupuj&uacute;ci a&nbsp;pred&aacute;vaj&uacute;ci
                ber&uacute; na vedomie, že k&uacute;pna cena dohodnut&aacute;
                v&nbsp;k&uacute;pnej zmluve je uveden&aacute;
                v&nbsp;akcept&aacute;ci&iacute; objedn&aacute;vky, pričom
                k&uacute;pna cena zahŕňa len cenu za tovar (ďalej tiež ako
                &bdquo;k&uacute;pna cena&ldquo;).
              </span>
            </p>
            <p>
              <span>
                5.2 Kupuj&uacute;ci je povinn&yacute; zaplatiť
                pred&aacute;vaj&uacute;cemu k&uacute;pnu cenu tovaru
                dohodnut&uacute; v k&uacute;pnej zmluve a/alebo podľa
                cenn&iacute;ka pred&aacute;vaj&uacute;ceho platn&eacute;ho v
                čase uzatvorenia k&uacute;pnej zmluvy vr&aacute;tane
                n&aacute;kladov na doručenie tovaru (ďalej len ako "k&uacute;pna
                cena") formou hotovostnej platby pri prevzat&iacute; tovaru u
                kuri&eacute;ra, dobierkou v mieste dodania tovaru, alebo
                bezhotovostn&yacute;m prevodom na &uacute;čet
                pred&aacute;vaj&uacute;ceho, uveden&yacute; v
                z&aacute;v&auml;znej akcept&aacute;cii objedn&aacute;vky, do
                troch pracovn&yacute;ch dn&iacute; od odoslania
                objedn&aacute;vky; pokiaľ sa strany nedohodli inak.
              </span>
            </p>
            <p>
              <span>
                5.3 V pr&iacute;pade, ak kupuj&uacute;ci zaplat&iacute;
                pred&aacute;vaj&uacute;cemu k&uacute;pnu cenu
                bezhotovostn&yacute;m prevodom, za deň platby sa považuje deň,
                kedy bola cel&aacute; k&uacute;pna cena prip&iacute;san&aacute;
                na &uacute;čet pred&aacute;vaj&uacute;ceho. Ak platba nebude
                prip&iacute;san&aacute; na &uacute;čet
                pred&aacute;vaj&uacute;ceho do dvoch pracovn&yacute;ch
                dn&iacute; od odoslania objedn&aacute;vky kupuj&uacute;cim,
                objedn&aacute;vka bude považovan&aacute; za
                zru&scaron;en&uacute;.
              </span>
            </p>
            <p>
              <span>
                5.4 Kupuj&uacute;ci je povinn&yacute; zaplatiť
                pred&aacute;vaj&uacute;cemu k&uacute;pnu cenu za
                dohodnut&yacute; tovar v lehote podľa k&uacute;pnej zmluvy,
                najnesk&ocirc;r v&scaron;ak pri prevzat&iacute; tovaru.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                5.5 V pr&iacute;pade, ak kupuj&uacute;ci nezaplat&iacute;
                pred&aacute;vaj&uacute;cemu cel&uacute; k&uacute;pnu cenu do
                momentu dodania tovaru na Miesto, pred&aacute;vaj&uacute;ci je
                opr&aacute;vnen&yacute; odoprieť dodanie tovaru
                kupuj&uacute;cemu a&nbsp;odst&uacute;piť od zmluvy.
              </span>
              <span>
                <br />
                <br />
              </span>
            </p>
            <ol>
              <li>
                <span>
                  {' '}
                  Nadobudnutie vlastn&iacute;ckeho pr&aacute;va, prechod
                  nebezpečenstva &scaron;kody
                </span>
              </li>
            </ol>
            <p>
              <span>
                6.1 Kupuj&uacute;ci nadob&uacute;da vlastn&iacute;cke
                pr&aacute;vo prevzat&iacute;m tovaru na &bdquo;Mieste&ldquo; a
                &uacute;pln&yacute;m zaplaten&iacute;m celej k&uacute;pnej ceny
                za tovar.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                6.2 Nebezpečenstvo &scaron;kody na tovare prech&aacute;dza na
                kupuj&uacute;ceho s&uacute;časne s&nbsp;nadobudnut&iacute;m
                vlastn&iacute;ckeho pr&aacute;va t.j. v čase, keď
                kupuj&uacute;ci alebo tretia osoba splnomocnen&aacute;
                kupuj&uacute;cim prevezme tovar od pred&aacute;vaj&uacute;ceho
                alebo od jeho z&aacute;stupcu, poveren&eacute;ho doručiť tovar.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <p>
              <span>
                VII. Reklamačn&yacute; poriadok ( zodpovednosť za vady,
                z&aacute;ruka, reklam&aacute;cie)
              </span>
            </p>
            <p>
              <span>
                7.1 Reklamačn&yacute; poriadok sa vzťahuje na tovar
                zak&uacute;pen&yacute; kupuj&uacute;cim od
                pred&aacute;vaj&uacute;ceho vo forme elektronick&eacute;ho
                obchodu na internetovej str&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho.
              </span>
            </p>
            <p>
              <span>
                7.2 Kupuj&uacute;ci m&aacute; pr&aacute;vo uplatniť si u
                pred&aacute;vaj&uacute;ceho z&aacute;ruku len na tovar,
                ktor&yacute; vykazuje chyby, ktor&eacute; zavinil
                v&yacute;robca, dod&aacute;vateľ alebo
                pred&aacute;vaj&uacute;ci, vzťahuje sa naň z&aacute;ruka a bol
                zak&uacute;pen&yacute; u pred&aacute;vaj&uacute;ceho.
              </span>
            </p>
            <p>
              <span>
                7.3 Kupuj&uacute;ci je povinn&yacute; vykonať prehliadku tovaru
                pri prevzat&iacute; tovaru. Pokiaľ tak neurob&iacute;,
                m&ocirc;že uplatniť n&aacute;roky z v&aacute;d zisten&yacute;ch
                pri tejto prehliadke, len keď preuk&aacute;že, že tieto vady mal
                tovar už v čase prevzatia tovaru.
              </span>
            </p>
            <p>
              <span>
                7.4 Zodpovednosť za vady sa nevzťahuje na vady
                sp&ocirc;soben&eacute; nasledovn&yacute;m
                už&iacute;van&iacute;m:
              </span>
            </p>
            <ul>
              <li>
                <span>
                  nepredložen&iacute;m dokladu o zaplaten&iacute;, dodacieho
                  listu alebo z&aacute;ručn&eacute;ho listu,
                  pr&iacute;slu&scaron;enstva alebo dokument&aacute;cie tovaru,
                </span>
              </li>
              <li>
                <span>
                  neozn&aacute;men&iacute;m zjavn&yacute;ch ch&yacute;b pri
                  prevzat&iacute; tovaru,
                </span>
              </li>
              <li>
                <span>uplynut&iacute;m z&aacute;ručnej doby tovaru,</span>
              </li>
              <li>
                <span>
                  mechanick&yacute;m po&scaron;koden&iacute;m tovaru
                  sp&ocirc;soben&yacute;m kupuj&uacute;cim,
                </span>
              </li>
              <li>
                <span>
                  použ&iacute;van&iacute;m tovaru v podmienkach, ktor&eacute;
                  neodpovedaj&uacute; svojou vlhkosťou, chemick&yacute;mi a
                  mechanick&yacute;mi vplyvmi prirodzen&eacute;mu prostrediu,
                </span>
              </li>
              <li>
                <span>
                  neodborn&yacute;m zaobch&aacute;dzan&iacute;m, obsluhou alebo
                  zanedban&iacute;m starostlivosti o tovar,
                </span>
              </li>
              <li>
                <span>
                  po&scaron;koden&iacute;m tovaru nadmern&yacute;m
                  zaťažovan&iacute;m alebo použ&iacute;van&iacute;m v rozpore s
                  podmienkami uveden&yacute;mi v dokument&aacute;cii,
                  v&scaron;eobecn&yacute;mi z&aacute;sadami, technick&yacute;mi
                  normami alebo bezpečnostn&yacute;mi predpismi platn&yacute;mi
                  v SR,
                </span>
              </li>
              <li>
                <span>
                  po&scaron;koden&iacute;m tovaru neodvr&aacute;titeľn&yacute;mi
                  a/alebo nepredv&iacute;dateľn&yacute;mi udalosťami,
                </span>
              </li>
              <li>
                <span>
                  po&scaron;koden&iacute;m tovaru n&aacute;hodnou skazou a
                  n&aacute;hodn&yacute;m zhor&scaron;en&iacute;m,
                </span>
              </li>
              <li>
                <span>
                  neodborn&yacute;m z&aacute;sahom, po&scaron;koden&iacute;m pri
                  doprave, po&scaron;koden&iacute;m vodou, ohňom, statickou či
                  atmosf&eacute;rickou elektrinou alebo in&yacute;m
                  z&aacute;sahom vy&scaron;&scaron;ej moci,
                </span>
              </li>
              <li>
                <span>
                  z&aacute;sahom do tovaru k tomu neopr&aacute;vnenej osoby.
                </span>
              </li>
            </ul>
            <p>
              <span>
                7.5 Zodpovednosť za vady sa nevzťahuje taktiež i&nbsp;na
                bežn&eacute; opotrebenie tovaru (alebo jeho časti)
                sp&ocirc;soben&eacute; použ&iacute;van&iacute;m tovaru.
              </span>
            </p>
            <p>
              <span>
                7.6 Z&aacute;ručn&aacute; doba zač&iacute;na plyn&uacute;ť dňom
                prevzatia tovaru od prepravnej spoločnosti alebo priamo od
                pred&aacute;vaj&uacute;ceho ak si tovar preber&aacute;
                kupuj&uacute;ci osobne, v&nbsp;deň jeho prevzatia.
              </span>
            </p>
            <p>
              <span>
                7.7 Počas z&aacute;ručnej doby m&aacute; kupuj&uacute;ci
                pr&aacute;vo na bezplatn&eacute; odstr&aacute;nenie vady po
                predložen&iacute; tovaru vr&aacute;tane
                pr&iacute;slu&scaron;enstva, dokument&aacute;cie, spolu so
                z&aacute;ručn&yacute;m listom a dokladom o&nbsp;zaplaten&iacute;
                pred&aacute;vaj&uacute;cemu.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.8 Na vybavovanie reklam&aacute;ci&iacute; sa vzťahuje
                platn&yacute; reklamačn&yacute; poriadok
                pred&aacute;vaj&uacute;ceho, teda čl. 7 t&yacute;chto
                obchodn&yacute;ch podmienok. Kupuj&uacute;ci bol riadne
                obozn&aacute;men&yacute; s reklamačn&yacute;m poriadkom a
                informovan&yacute; o podmienkach a sp&ocirc;sobe
                reklam&aacute;cie tovaru vr&aacute;tane &uacute;dajov o tom, kde
                možno reklam&aacute;ciu uplatniť, a o vykon&aacute;van&iacute;
                z&aacute;ručn&yacute;ch opr&aacute;v v s&uacute;lade s ust.
                &sect; 18 ods. 1 z&aacute;kona č. 250/2007 Z . z. o ochrane
                spotrebiteľa a o zmene z&aacute;kona Slovenskej n&aacute;rodnej
                rady č. 372/1990 Zb. o priestupkoch v znen&iacute;
                neskor&scaron;&iacute;ch predpisov (ďalej len"Z&aacute;kon") v
                čase pred uzavret&iacute;m k&uacute;pnej zmluvy tak, že
                umiestnil tieto obchodn&eacute; a reklamačn&eacute; podmienky na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho a kupuj&uacute;ci mal
                možnosť si ich v čase pred odoslan&iacute;m objedn&aacute;vky
                preč&iacute;tať.
              </span>
            </p>
            <p>
              <span>
                7.9 Kupuj&uacute;ci je povinn&yacute; reklam&aacute;ciu uplatniť
                bezodkladne u&nbsp;pred&aacute;vaj&uacute;ceho, a&nbsp;to hneď
                po zisten&iacute; vady, inak kupuj&uacute;cemu zanik&aacute;
                pr&aacute;vo voči pred&aacute;vaj&uacute;cemu na
                bezplatn&eacute; odstr&aacute;nenie chyby.
              </span>
            </p>
            <p>
              <a
                className="font-bold"
                target={'_blank'}
                href="assets/reklamacny-formular.pdf"
              >
                <span>
                  Reklamačn&yacute; formul&aacute;r na stiahnutie &gt;&gt;
                </span>
              </a>
              <br />
              <br />
            </p>
            <p>
              <span>
                7.10 Ak tovar vykazuje vady, kupuj&uacute;ci m&aacute;
                pr&aacute;vo uplatniť reklam&aacute;ciu v prev&aacute;dzkarni
                pred&aacute;vaj&uacute;ceho v s&uacute;lade s ust. &sect; 18
                ods. 2 Z&aacute;kona tak, že doruč&iacute; tovar do
                prev&aacute;dzkarne pred&aacute;vaj&uacute;ceho a doruč&iacute;
                pred&aacute;vaj&uacute;cemu prejav v&ocirc;le kupuj&uacute;ceho
                uplatniť si svoje pr&aacute;vo podľa t&yacute;chto
                obchodn&yacute;ch podmienok (ďalej len &bdquo;Ozn&aacute;menie o
                uplatnen&iacute; reklam&aacute;cie&ldquo;).
                Pred&aacute;vaj&uacute;ci odpor&uacute;ča tovar pri jeho
                zasielan&iacute; na reklam&aacute;ciu poistiť. Z&aacute;sielky
                na dobierku pred&aacute;vaj&uacute;ci nepreber&aacute;.
                Kupuj&uacute;ci je povinn&yacute; v Ozn&aacute;men&iacute; o
                uplatnen&iacute; reklam&aacute;cie pravdivo uviesť v&scaron;etky
                požadovan&eacute; inform&aacute;cie, najm&auml; presne označiť
                druh a rozsah vady tovaru; kupuj&uacute;ci z&aacute;roveň
                uvedie, ktor&eacute; zo svojich pr&aacute;v
                vypl&yacute;vaj&uacute;cich z ust. &sect; 622 a 623 Občianskeho
                z&aacute;konn&iacute;ka uplatňuje.
              </span>
            </p>
            <p>
              <span>
                7.11 Reklamačn&eacute; konanie t&yacute;kaj&uacute;ce sa tovaru,
                ktor&yacute; sa d&aacute; doručiť pred&aacute;vaj&uacute;cemu
                zač&iacute;na dňom, kedy s&uacute; kumulat&iacute;vne
                splnen&eacute; v&scaron;etky nasleduj&uacute;ce podmienky:
              </span>
              <span>
                <br />
              </span>
              <span>
                a) doručenie Ozn&aacute;menia o uplatnen&iacute;
                reklam&aacute;cie pred&aacute;vaj&uacute;cemu,
              </span>
              <span>
                <br />
              </span>
              <span>
                b) doručenie reklamovan&eacute;ho tovaru od kupuj&uacute;ceho
                pred&aacute;vaj&uacute;cemu.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.12 Pred&aacute;vaj&uacute;ci vyd&aacute; kupuj&uacute;cemu
                potvrdenie o uplatnen&iacute; reklam&aacute;cie tovaru vo
                vhodnej forme zvolenej pred&aacute;vaj&uacute;cim, napr. vo
                forme e- mailu alebo v p&iacute;somnej podobe, v ktorom je
                povinn&yacute; presne označiť reklamovan&eacute; vady tovaru a
                e&scaron;te raz pouč&iacute; spotrebiteľa o jeho pr&aacute;vach,
                ktor&eacute; mu vypl&yacute;vaj&uacute; z ust. &sect; 622
                Občianskeho z&aacute;konn&iacute;ka a ust. &sect; 623
                Občianskeho z&aacute;konn&iacute;ka. Ak je reklam&aacute;cia
                uplatnen&aacute; prostredn&iacute;ctvom prostriedkov diaľkovej
                komunik&aacute;cie, pred&aacute;vaj&uacute;ci je povinn&yacute;
                potvrdenie o uplatnen&iacute; reklam&aacute;cie doručiť
                kupuj&uacute;cemu ihneď; ak nie je možn&eacute; potvrdenie
                doručiť ihneď, mus&iacute; sa doručiť bez zbytočn&eacute;ho
                odkladu, najnesk&ocirc;r v&scaron;ak spolu s dokladom o
                vybaven&iacute; reklam&aacute;cie; potvrdenie o uplatnen&iacute;
                reklam&aacute;cie sa nemus&iacute; doručovať, ak kupuj&uacute;ci
                m&aacute; možnosť preuk&aacute;zať uplatnenie reklam&aacute;cie
                in&yacute;m sp&ocirc;sobom.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.13 Kupuj&uacute;ci je opr&aacute;vnen&yacute; rozhodn&uacute;ť
                sa, ktor&eacute; zo svojich pr&aacute;v v zmysle ust. &sect; 622
                a ust. &sect; 623 Občianskeho z&aacute;konn&iacute;ka uplatňuje
                a z&aacute;roveň je povinn&yacute; bezodkladne inform&aacute;ciu
                o svojom rozhodnut&iacute; doručiť pred&aacute;vaj&uacute;cemu.
                Na z&aacute;klade rozhodnutia kupuj&uacute;ceho, ktor&eacute; zo
                svojich pr&aacute;v v zmysle ust. &sect; 622 a ust. &sect;623
                Občianskeho z&aacute;konn&iacute;ka uplatňuje je
                pred&aacute;vaj&uacute;ci alebo určen&aacute; osoba
                povinn&aacute; určiť sp&ocirc;sob vybavenia reklam&aacute;cie
                podľa ust. &sect; 2 p&iacute;sm. m) Z&aacute;kona č. 250/2007
                ihneď, v zložitej&scaron;&iacute;ch pr&iacute;padoch do 3
                dn&iacute; od začiatku reklamačn&eacute;ho konania, v
                od&ocirc;vodnen&yacute;ch pr&iacute;padoch, najm&auml; ak sa
                vyžaduje zložit&eacute; technick&eacute; zhodnotenie stavu
                tovaru najnesk&ocirc;r do 30 dn&iacute; odo dňa začiatku
                reklamačn&eacute;ho konania. Po určen&iacute; sp&ocirc;sobu
                vybavenia reklam&aacute;cie pred&aacute;vaj&uacute;ci alebo
                určen&aacute; osoba reklam&aacute;ciu vybav&iacute; ihneď, v
                od&ocirc;vodnen&yacute;ch pr&iacute;padoch možno
                reklam&aacute;ciu vybaviť aj nesk&ocirc;r. Vybavenie
                reklam&aacute;cie v&scaron;ak nesmie trvať dlh&scaron;ie ako 30
                dn&iacute; odo dňa uplatnenia reklam&aacute;cie. Po
                m&aacute;rnom uplynut&iacute; lehoty na vybavenie
                reklam&aacute;cie m&aacute; spotrebiteľ pr&aacute;vo od zmluvy
                odst&uacute;piť alebo m&aacute; pr&aacute;vo na v&yacute;menu
                tovaru za nov&yacute; tovar. O ukončen&iacute;
                reklamačn&eacute;ho konania a v&yacute;sledku reklam&aacute;cie
                informuje pred&aacute;vaj&uacute;ci kupuj&uacute;ceho formou
                dohodnutou medzi obidvoma zmluvn&yacute;mi stranami (e-mailom
                doporučen&yacute;m listom a&nbsp;pod.) a z&aacute;roveň bude
                kupuj&uacute;cemu spolu s tovarom doručen&yacute;
                reklamačn&yacute; protokol.
              </span>
            </p>
            <p>
              <span>
                7.14 Kupuj&uacute;ci nem&aacute; pr&aacute;vo uplatniť si
                pr&aacute;vo zodpovednosti za vady, o ktor&yacute;ch bol
                pred&aacute;vaj&uacute;cim v dobe uzatv&aacute;rania zmluvy
                upozornen&yacute;, alebo o ktor&yacute;ch s prihliadnut&iacute;m
                k okolnostiam, za ktor&yacute;ch bola k&uacute;pna zmluva
                uzatvoren&aacute;, musel vedieť.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.15 Pred&aacute;vaj&uacute;ci si vyhradzuje pr&aacute;vo
                nahradiť vadn&yacute; tovar za in&yacute; bezvadn&yacute; tovar
                s rovnak&yacute;mi alebo lep&scaron;&iacute;mi
                technick&yacute;mi parametrami, ak to kupuj&uacute;cemu
                nesp&ocirc;sob&iacute; z&aacute;važn&eacute; ťažkosti.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.16 Pred&aacute;vaj&uacute;ci je povinn&yacute; vybaviť
                reklam&aacute;ciu a ukončiť reklamačn&eacute; konanie
                jedn&yacute;m z&nbsp;nasleduj&uacute;cich sp&ocirc;sobov:
              </span>
              <span>
                <br />
              </span>
              <span>a) odovzdan&iacute;m opraven&eacute;ho tovaru,</span>
              <span>
                <br />
              </span>
              <span>b) v&yacute;menou tovaru,</span>
              <span>
                <br />
              </span>
              <span>c) vr&aacute;ten&iacute;m k&uacute;pnej ceny tovaru,</span>
              <span>
                <br />
              </span>
              <span>d) vyplaten&iacute;m primeranej zľavy z ceny tovaru,</span>
              <span>
                <br />
              </span>
              <span>
                e) p&iacute;somnou v&yacute;zvou na prevzatie
                pred&aacute;vaj&uacute;cim určen&eacute;ho plnenia,
              </span>
              <span>
                <br />
              </span>
              <span>
                f) od&ocirc;vodnen&yacute;m zamietnut&iacute;m reklam&aacute;cie
                tovaru.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.17 Pred&aacute;vaj&uacute;ci je povinn&yacute; o sp&ocirc;sobe
                určenia vybavenia reklam&aacute;cie a o vybaven&iacute;
                reklam&aacute;cie kupuj&uacute;cemu vydať p&iacute;somn&yacute;
                doklad najnesk&ocirc;r do 30 dn&iacute; odo dňa uplatnenia
                reklam&aacute;cie osobne, prostredn&iacute;ctvom e-mailu,
                prostredn&iacute;ctvom poskytovateľa po&scaron;tovej alebo
                kuri&eacute;rskej alebo don&aacute;&scaron;kovej služby. O
                v&yacute;sledku vybavenia reklam&aacute;cie bude
                pred&aacute;vaj&uacute;ci informovať kupuj&uacute;ceho
                bezprostredne po ukončen&iacute; reklamačn&eacute;ho konania
                telefonicky alebo e-mailom a z&aacute;roveň mu bude spolu s
                tovarom, resp. prostredn&iacute;ctvom e-mailu doručen&yacute;
                doklad o vybaven&iacute; reklam&aacute;cie.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                7.18 Z&aacute;ručn&aacute; doba je 12 mesiacov odo dňa doručenia
                tovaru, pokiaľ nie je pre konkr&eacute;tne pr&iacute;pady
                stanoven&aacute; z&aacute;ručn&aacute; doba in&aacute;
                a&nbsp;zač&iacute;na plyn&uacute;ť odo dňa prevzatia tovaru
                kupuj&uacute;cim.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.19 Z&aacute;ručn&aacute; doba sa predlžuje o dobu, po
                ktor&uacute; kupuj&uacute;ci nemohol použ&iacute;vať tovar z
                d&ocirc;vodu z&aacute;ručnej opravy tovaru.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.20 V pr&iacute;pade v&yacute;meny tovaru za nov&yacute;
                dostane kupuj&uacute;ci doklad, na ktorom bude uveden&aacute;
                inform&aacute;cia o v&yacute;mene tovaru, a
                pr&iacute;padn&eacute; ďal&scaron;ie reklam&aacute;cie sa
                uplatňuj&uacute; na z&aacute;klade k&uacute;pnej zmluvy a tohto
                reklamačn&eacute;ho dokladu. V pr&iacute;pade v&yacute;meny
                tovaru za nov&yacute; začne plyn&uacute;ť z&aacute;ručn&aacute;
                doba znovu od prevzatia nov&eacute;ho tovaru, ale iba na
                nov&yacute; tovar.
              </span>
            </p>
            <p>
              <span>
                7.21 V&scaron;etky z&aacute;ručn&eacute; opravy s&uacute; v
                pr&iacute;pade, ak do času ich uplatnenia nezanikol n&aacute;rok
                na uplatnenie z&aacute;ruky bezplatn&eacute;.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.22 Pokiaľ ide o odstr&aacute;niteľn&uacute; vadu, bude
                reklam&aacute;cia vybaven&aacute; v z&aacute;vislosti od
                rozhodnutia kupuj&uacute;ceho nasleduj&uacute;cim
                sp&ocirc;sobom:
              </span>
              <span>
                <br />
              </span>
              <span>
                a) pred&aacute;vaj&uacute;ci zabezpeč&iacute; odstr&aacute;nenie
                vady, alebo
              </span>
              <span>
                <br />
              </span>
              <span>
                b) pred&aacute;vaj&uacute;ci vadn&yacute; tovar vymen&iacute;.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.23 Pokiaľ ide o odstr&aacute;niteľn&uacute; vadu a
                kupuj&uacute;ci neurč&iacute; bezodkladne, ak&yacute;
                sp&ocirc;sobom m&aacute; byť reklam&aacute;cia vybaven&aacute;,
                pred&aacute;vaj&uacute;ci reklam&aacute;ciu vybav&iacute;
                odstr&aacute;nen&iacute;m vady.
              </span>
            </p>
            <p>
              <span>
                7.24 Pokiaľ sa jedn&aacute; o vadu, ktor&uacute; nemožno
                odstr&aacute;niť, alebo o jednu viackr&aacute;t opakovan&uacute;
                odstr&aacute;niteľn&uacute; vadu, alebo o
                v&auml;č&scaron;&iacute; počet r&ocirc;znych
                odstr&aacute;niteľn&yacute;ch v&aacute;d, ktor&eacute;
                br&aacute;nia tomu, aby mohol byť tovar riadne
                už&iacute;van&yacute; ako bez vady, pred&aacute;vaj&uacute;ci
                vybav&iacute; v z&aacute;vislosti od rozhodnutia
                kupuj&uacute;ceho reklam&aacute;ciu nasleduj&uacute;cim
                sp&ocirc;sobom:
              </span>
              <span>
                <br />
              </span>
              <span>
                a) v&yacute;menou tovaru za in&yacute; funkčn&yacute; tovar
                rovnak&yacute;ch alebo lep&scaron;&iacute;ch technick&yacute;ch
                parametrov, alebo
              </span>
              <span>
                <br />
              </span>
              <span>
                b) v pr&iacute;pade, že nem&ocirc;že pred&aacute;vaj&uacute;ci
                vykonať v&yacute;menu tovaru za in&yacute;, vybav&iacute;
                reklam&aacute;ciu vr&aacute;ten&iacute;m k&uacute;pnej ceny za
                tovar.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.25 Vybavenie reklam&aacute;cie sa vzťahuje len na vady
                uveden&eacute; v Ozn&aacute;men&iacute; o uplatnen&iacute;
                reklam&aacute;cie a v potvrden&iacute; o uplatnen&iacute;
                reklam&aacute;cie tovaru.
              </span>
            </p>
            <p>
              <span>
                7.26 Pre &uacute;čely reklam&aacute;cie sa za viac kr&aacute;t
                opakovan&uacute; odstr&aacute;niteľn&uacute; vadu považuje
                v&yacute;skyt jednej odstr&aacute;niteľnej vady viac ako dva
                kr&aacute;t.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.27 Pre &uacute;čely reklam&aacute;cie sa za
                v&auml;č&scaron;&iacute; počet r&ocirc;znych
                odstr&aacute;niteľn&yacute;ch v&aacute;d považuje v&yacute;skyt
                viac ako troch r&ocirc;znych odstr&aacute;niteľn&yacute;ch
                v&aacute;d s&uacute;časne.
              </span>
            </p>
            <p>
              <span>
                7.28 Pre &uacute;čely reklam&aacute;cie sa za dobu, počas ktorej
                po uzavret&iacute; k&uacute;pnej zmluvy nem&ocirc;že
                kupuj&uacute;ci pre vady tovaru riadne už&iacute;vať tovar,
                považuje doba, ktor&aacute; tvor&iacute; spolu viac ako 180
                dn&iacute;.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.29 Opr&aacute;vnenie kupuj&uacute;ceho na uplatnenie
                reklam&aacute;cie vady tovaru je po tom, ako využil svoje
                pr&aacute;vo a požiadal pred&aacute;vaj&uacute;ceho o
                odstr&aacute;nenie vady tovaru skonzumovan&eacute; a bez ohľadu
                na v&yacute;sledok reklam&aacute;cie už op&auml;tovne nie je
                opr&aacute;vnen&yacute; pre t&uacute; ist&uacute;
                jedinečn&uacute; vadu (nie vadu rovnak&eacute;ho druhu)
                uplatňovať reklam&aacute;ciu opakovane.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.30 Pred&aacute;vaj&uacute;ci nezodpoved&aacute; za vady tovaru
                vzniknut&eacute; po prechode nebezpečenstva &scaron;kody na veci
                bez zavinenia pred&aacute;vaj&uacute;ceho, za vady
                vzniknut&eacute; mechanick&yacute;m po&scaron;koden&iacute;m,
                bežn&yacute;m opotrebovan&iacute;m alebo v&nbsp;d&ocirc;sledku
                nespr&aacute;vneho zaobch&aacute;dzania, skladovania,
                už&iacute;vania, ako aj za chyby sp&ocirc;soben&eacute;
                kupuj&uacute;cim alebo treťou osobou.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                7.31 Pokiaľ spotrebiteľ nie je spokojn&yacute; so
                sp&ocirc;sobom, ktor&yacute;m pred&aacute;vaj&uacute;ci vybavil
                jeho reklam&aacute;ciu alebo ak sa domnieva, že
                pred&aacute;vaj&uacute;ci poru&scaron;il jeho pr&aacute;va,
                m&aacute; možnosť obr&aacute;tiť sa na
                pred&aacute;vaj&uacute;ceho so žiadosťou o n&aacute;pravu. Ak
                pred&aacute;vaj&uacute;ci na žiadosť o n&aacute;pravu odpovie
                zamietavo alebo na ňu neodpovie do 30 dn&iacute; odo dňa jej
                odoslania, spotrebiteľ m&aacute; pr&aacute;vo podať n&aacute;vrh
                na začatie alternat&iacute;vneho rie&scaron;enia svojho sporu
                podľa ustanovenia &sect; 12 z&aacute;kona č. 391/2015 Z. z. o
                alternat&iacute;vnom rie&scaron;en&iacute;
                spotrebiteľsk&yacute;ch sporov a o zmene a doplnen&iacute;
                niektor&yacute;ch z&aacute;konov.
                Pr&iacute;slu&scaron;n&yacute;m subjektom na alternat&iacute;vne
                rie&scaron;enie spotrebiteľsk&yacute;ch sporov s
                pred&aacute;vaj&uacute;cim Daniela Matejč&iacute;kov&aacute;
                &ndash; Butik Simona, je Slovensk&aacute; obchodn&aacute;
                in&scaron;pekcia, Bajkalsk&aacute; 21/A, 827 99 Bratislava, IČO:
                17331927,&nbsp;
              </span>
              <a href="http://www.soi.sk/">
                <span>http://www.soi.sk</span>
              </a>
              <span>
                &nbsp;, alebo in&aacute; pr&iacute;slu&scaron;n&aacute;
                opr&aacute;vnen&aacute; pr&aacute;vnick&aacute; osoba
                zap&iacute;san&aacute; v zozname subjektov alternat&iacute;vneho
                rie&scaron;enia sporov vedenom Ministerstvom hospod&aacute;rstva
                Slovenskej republiky (zoznam je dostupn&yacute; na
                str&aacute;nke&nbsp;
              </span>
              <a href="http://www.mhsr.sk/">
                <span>http://www.mhsr.sk</span>
              </a>
              <span>
                ); spotrebiteľ m&aacute; pr&aacute;vo voľby, na ktor&yacute; z
                uveden&yacute;ch subjektov alternat&iacute;vneho rie&scaron;enia
                spotrebiteľsk&yacute;ch sporov sa obr&aacute;ti. Spotrebiteľ
                m&ocirc;že podať sťažnosť aj prostredn&iacute;ctvom platformy
                alternat&iacute;vneho rie&scaron;enia sporov RSO, ktor&aacute;
                je dostupn&aacute; online na:&nbsp;
              </span>
              <a href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&amp;lng=SK">
                <span>
                  https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show&amp;lng=SK
                </span>
              </a>
              <span>
                . Sťažnosť tu m&ocirc;že podať spotrebiteľ žij&uacute;ci
                v&nbsp;E&Uacute; na obchodn&iacute;ka so s&iacute;dlom
                v&nbsp;E&Uacute;.
              </span>
            </p>
            <p>
              <span>
                7.32 Kupuj&uacute;ci berie na vedomie, že čl&aacute;nok 7
                t&yacute;chto obchodn&yacute;ch podmienok je
                &bdquo;Reklamačn&yacute;m poriadkom&ldquo; a&nbsp;potvrdzuje, že
                sa s&nbsp;t&yacute;mto reklamačn&yacute;m poriadkom v&nbsp;plnom
                rozsahu obozn&aacute;mil pred uzatvoren&iacute;m k&uacute;pnej
                zmluvy.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <p>
              <span>
                VIII. Pr&aacute;vo odst&uacute;piť od k&uacute;pnej zmluvy
              </span>
            </p>
            <p>
              <span>
                8.1 Ak pred&aacute;vaj&uacute;ci nem&ocirc;že splniť svoje
                povinnosti vypl&yacute;vaj&uacute;ce mu z k&uacute;pnej zmluvy z
                d&ocirc;vodu vypredania z&aacute;sob, nedostupnosti tovaru,
                alebo ak v&yacute;robca, dovozca alebo dod&aacute;vateľ tovaru
                dohodnut&eacute;ho v k&uacute;pnej zmluve vykonal tak
                z&aacute;važn&eacute; zmeny, ktor&eacute; znemožnili
                realiz&aacute;ciu splnenia povinnost&iacute;
                pred&aacute;vaj&uacute;ceho vypl&yacute;vaj&uacute;cich z
                k&uacute;pnej zmluvy alebo z d&ocirc;vodov vy&scaron;&scaron;ej
                moci alebo ak ani pri vynaložen&iacute; v&scaron;etk&eacute;ho
                &uacute;silia, ktor&eacute; možno od neho spravodlivo požadovať
                nie je schopn&yacute; dodať tovar z&aacute;kazn&iacute;kovi v
                lehote určenej t&yacute;mito obchodn&yacute;mi podmienkami alebo
                v cene, ktor&aacute; je uveden&aacute; v objedn&aacute;vke,
                pred&aacute;vaj&uacute;ci je povinn&yacute; o tejto skutočnosti
                okamžite informovať kupuj&uacute;ceho a z&aacute;roveň je
                povinn&yacute; pon&uacute;knuť kupuj&uacute;cemu
                n&aacute;hradn&eacute; plnenie alebo možnosť pre
                kupuj&uacute;ceho odst&uacute;piť od k&uacute;pnej zmluvy
                (stornovať objedn&aacute;vku). V pr&iacute;pade, ak
                kupuj&uacute;ci odst&uacute;pi od k&uacute;pnej zmluvy z
                d&ocirc;vodov uveden&yacute;ch v tomto bode t&yacute;chto
                obchodn&yacute;ch podmienok, je pred&aacute;vaj&uacute;ci
                povinn&yacute; vr&aacute;tiť kupuj&uacute;cemu už
                zaplaten&uacute; z&aacute;lohu za tovar dohodnut&yacute; v
                k&uacute;pnej zmluve v lehote 14 dn&iacute; od ozn&aacute;menia
                o odst&uacute;pen&iacute; od zmluvy prevodom na &uacute;čet
                určen&yacute; kupuj&uacute;cim.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                8.2 Kupuj&uacute;ci je opr&aacute;vnen&yacute; odst&uacute;piť
                od k&uacute;pnej zmluvy bez udania d&ocirc;vodu v s&uacute;lade
                s ust. &sect; 7 a nasl. Z&aacute;kona č.102/2014 Z.z. o ochrane
                spotrebiteľa pri predaji tovaru alebo poskytovan&iacute; služieb
                na z&aacute;klade zmluvy uzavretej na diaľku alebo zmluvy
                uzavretej mimo prev&aacute;dzkov&yacute;ch priestorov
                pred&aacute;vaj&uacute;ceho a o zmene a doplnen&iacute;
                niektor&yacute;ch z&aacute;konov (ďalej len &bdquo;Z&aacute;kon
                o ochrane spotrebiteľa pri predaji na diaľku&ldquo;) v lehote 14
                dn&iacute; od prevzatia tovaru.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                8.3 Kupuj&uacute;ci m&aacute; pr&aacute;vo v r&aacute;mci tejto
                lehoty po prevzat&iacute; tovar rozbaliť a
                odsk&uacute;&scaron;ať obdobn&yacute;m sp&ocirc;sobom ako je
                obvykl&eacute; pri n&aacute;kupe v klasickom
                &bdquo;kamennom&ldquo; obchode, a to v rozsahu potrebnom na
                zistenie povahy, vlastnost&iacute; a funkčnosti tovaru.
                Odsk&uacute;&scaron;ať v&scaron;ak neznamen&aacute; začať tovar
                použ&iacute;vať a n&aacute;sledne ho vr&aacute;tiť
                pred&aacute;vaj&uacute;cemu.
              </span>
            </p>
            <p>
              <span>
                8.4 Kupuj&uacute;ci m&ocirc;že odst&uacute;piť od k&uacute;pnej
                zmluvy, predmetom ktorej je k&uacute;pa tovaru aj pred
                začat&iacute;m plynutia lehoty na odst&uacute;penie od zmluvy.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.5 Odst&uacute;penie od zmluvy mus&iacute; kupuj&uacute;ci
                urobiť p&iacute;somnou formou sp&ocirc;sobom
                nevzbudzuj&uacute;cim pochybnosti, že do&scaron;lo k
                odst&uacute;peniu od zmluvy, alebo v podobe z&aacute;pisu na
                inom trvanlivom nosiči alebo pomocou formul&aacute;ra,
                ktor&yacute; tvor&iacute; pr&iacute;lohu č. 1 t&yacute;chto
                obchodn&yacute;ch podmienok. Lehota na odst&uacute;penie od
                zmluvy sa považuje za zachovan&uacute;, ak ozn&aacute;menie o
                odst&uacute;pen&iacute; od zmluvy bolo odoslan&eacute;
                pred&aacute;vaj&uacute;cemu najnesk&ocirc;r v posledn&yacute;
                deň lehoty podľa ust. &sect; 7 ods. 1 Z&aacute;kona o ochrane
                spotrebiteľa pri predaji na diaľku.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.6 Odst&uacute;penie od k&uacute;pnej zmluvy podľa
                prech&aacute;dzaj&uacute;ceho bodu t&yacute;chto
                obchodn&yacute;ch podmienok mus&iacute; obsahovať
                inform&aacute;cie požadovan&eacute; vo formul&aacute;ri
                odst&uacute;penia od k&uacute;pnej zmluvy, ktor&yacute;
                tvor&iacute; pr&iacute;lohu č. 1 t&yacute;chto obchodn&yacute;ch
                podmienok, najm&auml; identifik&aacute;ciu kupuj&uacute;ceho,
                č&iacute;slo a d&aacute;tum objedn&aacute;vky, presn&uacute;
                &scaron;pecifik&aacute;ciu tovaru, sp&ocirc;sob, ak&yacute;m
                m&aacute; pred&aacute;vaj&uacute;ci vr&aacute;tiť už
                prijat&eacute; plnenie, najm&auml; č&iacute;slo &uacute;čtu
                a/alebo po&scaron;tov&uacute; adresu kupuj&uacute;ceho.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.7 Ak kupuj&uacute;ci odst&uacute;pi od k&uacute;pnej zmluvy,
                zru&scaron;uje sa od začiatku aj každ&aacute; doplnkov&aacute;
                zmluva s&uacute;visiaca s k&uacute;pnou zmluvou, od ktorej
                kupuj&uacute;ci odst&uacute;pil.
              </span>
            </p>
            <p>
              <a
                className="font-bold"
                target={'_blank'}
                href="assets/formular-odstupenie-od-zmluvy.pdf"
              >
                <span>
                  Formul&aacute;r na odst&uacute;penie od zmluvy na stiahnutie
                  &gt;&gt;
                </span>
              </a>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                8.8 Kupuj&uacute;ci je povinn&yacute; bez zbytočn&eacute;ho
                odkladu, najnesk&ocirc;r v&scaron;ak v lehote do 14 dn&iacute;
                odo dňa odst&uacute;penia od k&uacute;pnej zmluvy zaslať tovar
                sp&auml;ť na adresu s&iacute;dla prev&aacute;dzkovateľa alebo ho
                odovzdať pred&aacute;vaj&uacute;cemu alebo osobe poverenej
                pred&aacute;vaj&uacute;cim na prevzatie tovaru. To
                neplat&iacute;, ak pred&aacute;vaj&uacute;ci navrhol, že si
                tovar vyzdvihne osobne alebo prostredn&iacute;ctvom n&iacute;m
                poverenej osoby. Lehota podľa prvej vety tohto bodu
                t&yacute;chto obchodn&yacute;ch podmienok sa považuje za
                zachovan&uacute;, ak bol tovar odovzdan&yacute; na prepravu
                najnesk&ocirc;r v posledn&yacute; deň lehoty.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.9 Kupuj&uacute;ci je povinn&yacute; doručiť
                pred&aacute;vaj&uacute;cemu tovar kompletn&yacute;
                vr&aacute;tane kompletnej dokument&aacute;cie,
                nepo&scaron;koden&yacute; a nepouž&iacute;van&yacute;.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.10 Z&aacute;sielky na dobierku pred&aacute;vaj&uacute;ci
                nepreber&aacute;. Pred&aacute;vaj&uacute;ci je povinn&yacute;
                bez zbytočn&eacute;ho odkladu, najnesk&ocirc;r do 14 dn&iacute;
                odo dňa doručenia ozn&aacute;menia o odst&uacute;pen&iacute; od
                zmluvy vr&aacute;tiť kupuj&uacute;cemu v&scaron;etky platby,
                ktor&eacute; od neho prijal na z&aacute;klade k&uacute;pnej
                zmluvy alebo v s&uacute;vislosti s ňou vr&aacute;tane
                n&aacute;kladov na dopravu, dodanie a po&scaron;tovn&eacute; a
                in&yacute;ch n&aacute;kladov a poplatkov.
                Pred&aacute;vaj&uacute;ci nie je povinn&yacute; vr&aacute;tiť
                kupuj&uacute;cemu platby podľa tohto bodu t&yacute;chto
                obchodn&yacute;ch podmienok pred t&yacute;m, ako mu je
                doručen&yacute; tovar alebo k&yacute;m kupuj&uacute;ci
                nepreuk&aacute;že zaslanie tovaru sp&auml;ť
                pred&aacute;vaj&uacute;cemu, ibaže pred&aacute;vaj&uacute;ci
                navrhne, že si tovar vyzdvihne osobne alebo
                prostredn&iacute;ctvom n&iacute;m poverenej osoby.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.11 Kupuj&uacute;ci zn&aacute;&scaron;a n&aacute;klady na
                vr&aacute;tenie tovaru pred&aacute;vaj&uacute;cemu alebo osobe
                poverenej pred&aacute;vaj&uacute;cim na prevzatie tovaru. To
                neplat&iacute;, ak pred&aacute;vaj&uacute;ci s&uacute;hlasil, že
                ich bude zn&aacute;&scaron;ať s&aacute;m alebo ak si nesplnil
                povinnosť podľa &sect; 3 ods. 1 p&iacute;sm. i) Z&aacute;kona o
                ochrane spotrebiteľa pri predaji na diaľku.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                8.12 Kupuj&uacute;ci zodpoved&aacute; len za zn&iacute;ženie
                hodnoty tovaru, ktor&eacute; vzniklo v d&ocirc;sledku
                tak&eacute;ho zaobch&aacute;dzania s tovarom, ktor&eacute; je
                nad r&aacute;mec zaobch&aacute;dzania potrebn&eacute;ho na
                zistenie vlastnost&iacute; a funkčnosti tovaru. Spotrebiteľ
                nezodpoved&aacute; za zn&iacute;ženie hodnoty tovaru, ak si
                pred&aacute;vaj&uacute;ci nesplnil informačn&uacute; povinnosť o
                pr&aacute;ve spotrebiteľa odst&uacute;piť od zmluvy podľa &sect;
                3 ods. 1 p&iacute;sm. h) Z&aacute;kona o ochrane spotrebiteľa
                pri predaji na diaľku.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.13 Pred&aacute;vaj&uacute;ci je povinn&yacute; vr&aacute;tiť
                kupuj&uacute;cemu k&uacute;pnu cenu za tovar rovnak&yacute;m
                sp&ocirc;sobom, ak&yacute; použil kupuj&uacute;ci pri svojej
                platbe, pokiaľ sa s kupuj&uacute;cim nedohodne na inom
                sp&ocirc;sobe vr&aacute;tenia platieb bez toho, aby
                kupuj&uacute;cemu v tejto s&uacute;vislosti boli
                &uacute;čtovan&eacute; ďal&scaron;ie poplatky.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                8.14 V pr&iacute;pade, že kupuj&uacute;ci odst&uacute;pi od
                zmluvy a doruč&iacute; pred&aacute;vaj&uacute;cemu tovar,
                ktor&yacute; je použ&iacute;van&yacute;, po&scaron;koden&yacute;
                alebo ne&uacute;pln&yacute;, zav&auml;zuje sa kupuj&uacute;ci
                uhradiť pred&aacute;vaj&uacute;cemu najm&auml;:
              </span>
              <span>
                <br />
              </span>
              <span>
                a) hodnotu, o ktor&uacute; sa zn&iacute;žila hodnota tovaru v
                zmysle ust. &sect; 457 Občianskeho z&aacute;konn&iacute;ka v
                skutočnej v&yacute;&scaron;ke
              </span>
              <span>
                <br />
              </span>
              <span>
                b) n&aacute;klady, ktor&eacute; vznikli
                pred&aacute;vaj&uacute;cemu v s&uacute;vislosti s opravou tovaru
                a jeho uveden&iacute;m do p&ocirc;vodn&eacute;ho stavu.
              </span>
              <span>
                <br />
              </span>
              <span>
                Kupuj&uacute;ci je povinn&yacute; v zmysle tohto bodu
                obchodn&yacute;ch podmienok uhradiť pred&aacute;vaj&uacute;cemu
                n&aacute;hrady najviac vo v&yacute;&scaron;ke rozdielu medzi
                k&uacute;pnou cenou tovaru a hodnotou tovaru v čase
                odst&uacute;penia od k&uacute;pnej zmluvy.
              </span>
            </p>
            <p>
              <span>&nbsp;</span>
            </p>
            <ol>
              <li>
                <span>
                  {' '}
                  Pr&aacute;va a&nbsp;povinnosti zmluvn&yacute;ch str&aacute;n
                </span>
              </li>
            </ol>
            <p>
              <span>
                9.1 Pred&aacute;vaj&uacute;ci jasn&yacute;m,
                jednoznačn&yacute;m, zrozumiteľn&yacute;m a
                nezameniteľn&yacute;m sp&ocirc;sobom informoval pred
                odoslan&iacute;m objedn&aacute;vky kupuj&uacute;ceho o
                predzmluvn&yacute;ch inform&aacute;ci&aacute;ch,
                t&yacute;kaj&uacute;cich sa reklamačn&yacute;ch,
                platobn&yacute;ch, obchodn&yacute;ch, prepravn&yacute;ch a
                in&yacute;ch podmienok tak, že:
              </span>
              <span>
                <br />
              </span>
              <span>
                a) o hlavn&yacute;ch vlastnostiach tovaru alebo charaktere
                služby v rozsahu primeranom použit&eacute;mu prostriedku
                komunik&aacute;cie a tovaru alebo službe informoval na
                pr&iacute;slu&scaron;nej katal&oacute;govej str&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                b) o obchodnom mene a s&iacute;dle pred&aacute;vaj&uacute;ceho
                informoval na pr&iacute;slu&scaron;nej podstr&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho a v
                čl. 1 t&yacute;chto obchodn&yacute;ch podmienok, ktor&eacute;
                s&uacute; umiestnen&eacute; na pr&iacute;slu&scaron;nej
                podstr&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                c) o telef&oacute;nnom č&iacute;sle pred&aacute;vaj&uacute;ceho
                a o ďal&scaron;&iacute;ch &uacute;dajoch, ktor&eacute; s&uacute;
                d&ocirc;ležit&eacute; pre kontakt kupuj&uacute;ceho s
                pred&aacute;vaj&uacute;cim, najm&auml; adresu jeho elektronickej
                po&scaron;ty a č&iacute;slo faxu, ak ich m&aacute; informoval na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho a v čl. 1 t&yacute;chto
                obchodn&yacute;ch podmienok, ktor&eacute; s&uacute;
                umiestnen&eacute; na pr&iacute;slu&scaron;nej podstr&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                d) o adrese pred&aacute;vaj&uacute;ceho, na ktorej m&ocirc;že
                kupuj&uacute;ci uplatniť reklam&aacute;ciu tovaru alebo služby,
                podať sťažnosť alebo in&yacute; podnet t&yacute;chto
                obchodn&yacute;ch podmienok, ktor&eacute; s&uacute;
                umiestnen&eacute; na pr&iacute;slu&scaron;nej podstr&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                e) o celkovej cene tovaru alebo služby vr&aacute;tane dane z
                pridanej hodnoty a v&scaron;etk&yacute;ch ostatn&yacute;ch
                dan&iacute; alebo ak vzhľadom na povahu tovaru alebo služby
                nemožno cenu primerane určiť vopred, sp&ocirc;sob, ak&yacute;m
                sa vypoč&iacute;ta, ako aj o n&aacute;kladoch na dopravu,
                dodanie, po&scaron;tovn&eacute; a in&eacute; n&aacute;klady a
                poplatky, alebo, ak tieto n&aacute;klady a poplatky nemožno
                určiť vopred o skutočnosti, že kupuj&uacute;ci ich bude
                povinn&yacute; uhradiť
              </span>
              <span>
                <br />
              </span>
              <span>
                informoval na pr&iacute;slu&scaron;nej katal&oacute;govej
                str&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                f) o platobn&yacute;ch podmienkach, dodac&iacute;ch podmienkach,
                o lehote, do ktorej sa pred&aacute;vaj&uacute;ci zav&auml;zuje
                dodať tovar alebo poskytn&uacute;ť službu, o inform&aacute;cii o
                postupoch uplatňovania a vybavovania reklam&aacute;ci&iacute;,
                sťažnost&iacute; a podnetov kupuj&uacute;ceho informoval v
                pr&iacute;slu&scaron;n&yacute;ch čl&aacute;nkoch t&yacute;chto
                obchodn&yacute;ch podmienok, ktor&eacute; s&uacute;
                umiestnen&eacute; na pr&iacute;slu&scaron;nej podstr&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                g) o inform&aacute;cii o pr&aacute;ve kupuj&uacute;ceho
                odst&uacute;piť od k&uacute;pnej zmluvy, o podmienkach, lehote a
                postupe pri uplatňovan&iacute; pr&aacute;va na odst&uacute;penie
                od zmluvy informoval v čl. 8 t&yacute;chto obchodn&yacute;ch
                podmienok, ktor&eacute; s&uacute; umiestnen&eacute; na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                h) o poskytnut&iacute; formul&aacute;ru na odst&uacute;penie od
                k&uacute;pnej zmluvy informoval v čl. 8 a v pr&iacute;lohe
                t&yacute;chto obchodn&yacute;ch podmienok, ktor&eacute;
                s&uacute; umiestnen&eacute; na pr&iacute;slu&scaron;nej
                podstr&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho; pred&aacute;vaj&uacute;ci
                z&aacute;roveň poskytol samotn&yacute; formul&aacute;r na
                odst&uacute;penie od k&uacute;pnej zmluvy v pr&iacute;lohe
                t&yacute;chto obchodn&yacute;ch podmienok, ktor&eacute;
                s&uacute; umiestnen&eacute; na pr&iacute;slu&scaron;nej
                podstr&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho
              </span>
              <span>
                <br />
              </span>
              <span>
                i) o inform&aacute;cii, že ak kupuj&uacute;ci odst&uacute;pi od
                k&uacute;pnej zmluvy, bude zn&aacute;&scaron;ať n&aacute;klady
                spojen&eacute; s vr&aacute;ten&iacute;m tovaru
                pred&aacute;vaj&uacute;cemu podľa &sect; 10 ods. 3 z&aacute;kona
                č. 102/2014 Z.z. o ochrane spotrebiteľa pri predaji tovaru alebo
                poskytovan&iacute; služieb na z&aacute;klade zmluvy uzavretej na
                diaľku alebo zmluvy uzavretej mimo prev&aacute;dzkov&yacute;ch
                priestorov pred&aacute;vaj&uacute;ceho a o zmene a
                doplnen&iacute; niektor&yacute;ch z&aacute;konov (ďalej len
                "Z&aacute;kon o ochrane spotrebiteľa pri predaji na diaľku"), a
                ak odst&uacute;pi od k&uacute;pnej zmluvy aj n&aacute;klady na
                vr&aacute;tenie tovaru, ktor&yacute; vzhľadom na jeho povahu nie
                je možn&eacute; vr&aacute;tiť prostredn&iacute;ctvom
                po&scaron;ty informoval v čl. 7 t&yacute;chto obchodn&yacute;ch
                a podmienok, ktor&eacute; s&uacute; umiestnen&eacute; na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                j) o povinnosti kupuj&uacute;ceho uhradiť
                pred&aacute;vaj&uacute;cemu cenu za skutočne poskytnut&eacute;
                plnenie podľa &sect; 10 ods. 5 Z&aacute;kona o ochrane
                spotrebiteľa pri predaji na diaľku, ak kupuj&uacute;ci
                odst&uacute;pi od zmluvy o služb&aacute;ch po tom, čo udelil
                pred&aacute;vaj&uacute;cemu v&yacute;slovn&yacute; s&uacute;hlas
                podľa &sect; 4 ods. 6 Z&aacute;kona o ochrane spotrebiteľa pri
                predaji na diaľku informoval v čl. 8 t&yacute;chto
                obchodn&yacute;ch podmienok, ktor&eacute; s&uacute;
                umiestnen&eacute; na pr&iacute;slu&scaron;nej podstr&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                k) o okolnostiach, za ktor&yacute;ch kupuj&uacute;ci
                str&aacute;ca pr&aacute;vo na odst&uacute;penie od zmluvy
                informoval v čl. 8 t&yacute;chto obchodn&yacute;ch podmienok,
                ktor&eacute; s&uacute; umiestnen&eacute; na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                l) o poučen&iacute; o zodpovednosti pred&aacute;vaj&uacute;ceho
                za vady tovaru podľa ust. &sect; 622 a 623 Občianskeho
                z&aacute;konn&iacute;ka informoval v čl. 7 t&yacute;chto
                obchodn&yacute;ch podmienok, ktor&eacute; s&uacute;
                umiestnen&eacute; na pr&iacute;slu&scaron;nej podstr&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                m) o povinnosti kupuj&uacute;ceho zaplatiť preddavok alebo
                poskytn&uacute;ť in&uacute; finančn&uacute; z&aacute;bezpeku na
                žiadosť pred&aacute;vaj&uacute;ceho a o podmienkach,
                ktor&eacute; sa na jeho poskytnutie vzťahuj&uacute;, ak z
                k&uacute;pnej zmluvy vypl&yacute;va pre kupuj&uacute;ceho
                tak&yacute;to z&aacute;v&auml;zok informoval na
                pr&iacute;slu&scaron;nej katal&oacute;govej str&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho a v
                t&yacute;chto obchodn&yacute;ch podmienkach, ktor&eacute;
                s&uacute; umiestnen&eacute; na pr&iacute;slu&scaron;nej
                podstr&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                n) o kompatibilite elektronick&eacute;ho obsahu s
                hardv&eacute;rom a softv&eacute;rom, o ktor&yacute;ch
                pred&aacute;vaj&uacute;ci vie alebo je rozumn&eacute;
                očak&aacute;vať, že o nich vie, ak je to vhodn&eacute;
                informoval na pr&iacute;slu&scaron;nej katal&oacute;govej
                str&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho a v t&yacute;chto obchodn&yacute;ch
                podmienkach, ktor&eacute; s&uacute; umiestnen&eacute; na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                o) o &uacute;konoch potrebn&yacute;ch na uzatvorenie
                k&uacute;pnej zmluvy tak, že tieto potrebn&eacute; &uacute;kony
                pop&iacute;sal v t&yacute;chto obchodn&yacute;ch podmienkach,
                ktor&eacute; s&uacute; umiestnen&eacute; na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                p) o tom, že k&uacute;pna zmluva bude uložen&aacute; v
                elektronickej podobe u predajcu a je kupuj&uacute;cemu
                dostupn&aacute; po tom, ako si ju kupuj&uacute;ci p&iacute;somne
                vyžiada informoval na pr&iacute;slu&scaron;nej
                katal&oacute;govej str&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho a v t&yacute;chto obchodn&yacute;ch
                podmienkach, ktor&eacute; s&uacute; umiestnen&eacute; na
                pr&iacute;slu&scaron;nej podstr&aacute;nke elektronick&eacute;ho
                obchodu pred&aacute;vaj&uacute;ceho,
              </span>
              <span>
                <br />
              </span>
              <span>
                q) o tom, že jazykom pon&uacute;kan&yacute;m na uzatvorenie
                zmluvy je slovensk&yacute; jazyk informoval na
                pr&iacute;slu&scaron;nej katal&oacute;govej str&aacute;nke
                elektronick&eacute;ho obchodu pred&aacute;vaj&uacute;ceho a v
                t&yacute;chto obchodn&yacute;ch podmienkach, ktor&eacute;
                s&uacute; umiestnen&eacute; na pr&iacute;slu&scaron;nej
                podstr&aacute;nke elektronick&eacute;ho obchodu
                pred&aacute;vaj&uacute;ceho.
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                9.2. Ak pred&aacute;vaj&uacute;ci nesplnil informačn&uacute;
                povinnosť o &uacute;hrade dodatočn&yacute;ch poplatkov alebo
                in&yacute;ch n&aacute;kladov podľa bodu 9.1 p&iacute;sm. e)
                t&yacute;chto obchodn&yacute;ch podmienok alebo o
                n&aacute;kladoch na vr&aacute;tenie tovaru podľa bodu 9.1
                p&iacute;sm. i) t&yacute;chto obchodn&yacute;ch podmienok,
                kupuj&uacute;ci nie je povinn&yacute; tieto dodatočn&eacute;
                n&aacute;klady alebo poplatky uhradiť.
              </span>
            </p>
            <p>
              <span>9.3 Pred&aacute;vaj&uacute;ci je povinn&yacute;:</span>
              <span>
                <br />
              </span>
              <span>
                a) dodať na z&aacute;klade objedn&aacute;vky potvrdenej
                akcept&aacute;ciou kupuj&uacute;cemu tovar v dohodnutom
                množstve, kvalite a lehote a zabaliť ho alebo vybaviť na
                prepravu sp&ocirc;sobom potrebn&yacute;m na jeho uchovanie a
                ochranu,
              </span>
              <span>
                <br />
              </span>
              <span>
                b) zabezpečiť, aby dodan&yacute; tovar spĺňal krit&eacute;ria
                určen&eacute; platn&yacute;mi pr&aacute;vnymi predpismi SR
              </span>
              <span>
                <br />
              </span>
              <span>
                c) bezodkladne po uzavret&iacute; k&uacute;pnej zmluvy,
                najnesk&ocirc;r v&scaron;ak spolu s dodan&iacute;m tovaru
                poskytn&uacute;ť kupuj&uacute;cemu potvrdenie o uzavret&iacute;
                k&uacute;pnej zmluvy na trvanlivom nosiči, napr&iacute;klad
                prostredn&iacute;ctvom emailu.
              </span>
              <span>
                <br />
              </span>
              <span>
                d) odovzdať kupuj&uacute;cemu najnesk&ocirc;r spolu s tovarom v
                p&iacute;somnej alebo elektronickej podobe v&scaron;etky doklady
                potrebn&eacute; na prevzatie a už&iacute;vanie tovaru a
                ďal&scaron;ie doklady predp&iacute;san&eacute; platn&yacute;mi
                pr&aacute;vnymi predpismi SR (z&aacute;ručn&yacute; list,
                dodac&iacute; list, daňov&yacute; doklad a&nbsp;pod.).
              </span>
              <span>
                <br />
              </span>
              <span>
                <br />
              </span>
              <span>
                9.4 Pred&aacute;vaj&uacute;ci m&aacute; pr&aacute;vo na riadne a
                včasn&eacute; zaplatenie k&uacute;pnej ceny od kupuj&uacute;ceho
                za dodan&yacute; tovar.
              </span>
            </p>
            <p>
              <span>
                9.5 Ak z d&ocirc;vodu vypredania z&aacute;sob alebo
                nedostupnosti tovaru nie je schopn&yacute;
                pred&aacute;vaj&uacute;ci dodať tovar kupuj&uacute;cemu v lehote
                dohodnutej v k&uacute;pnej zmluve alebo určenej t&yacute;mito
                obchodn&yacute;mi podmienkami alebo za dohodnut&uacute;
                k&uacute;pnu cenu, je pred&aacute;vaj&uacute;ci povinn&yacute;
                pon&uacute;knuť kupuj&uacute;cemu n&aacute;hradn&eacute; plnenie
                alebo možnosť pre kupuj&uacute;ceho odst&uacute;piť od
                k&uacute;pnej zmluvy (stornovať objedn&aacute;vku).
                Odst&uacute;piť od k&uacute;pnej zmluvy alebo stornovať
                objedn&aacute;vku m&ocirc;že kupuj&uacute;ci doručen&iacute;m
                e-mailu. V pr&iacute;pade, ak kupuj&uacute;ci už uhradil
                k&uacute;pnu cenu alebo jej časť, vr&aacute;ti
                pred&aacute;vaj&uacute;ci už uhraden&uacute; k&uacute;pnu cenu
                alebo jej časť v lehote 14 dn&iacute; odo dňa doručenia e-mailu
                o odst&uacute;pen&iacute; od k&uacute;pnej zmluvy resp.
                stornovania objedn&aacute;vky kupuj&uacute;cemu na n&iacute;m
                určen&yacute; &uacute;čet, pokiaľ sa zmluvn&eacute; strany
                nedohodn&uacute; inak. V pr&iacute;pade, ak kupuj&uacute;ci v
                primeranej lehote neprijme n&aacute;hradn&eacute; plnenie
                pon&uacute;kan&eacute; pred&aacute;vaj&uacute;cim ani
                neodst&uacute;pi od k&uacute;pnej zmluvy, je
                pred&aacute;vaj&uacute;ci opr&aacute;vnen&yacute;
                odst&uacute;piť od k&uacute;pnej zmluvy a v pr&iacute;pade, ak
                kupuj&uacute;ci už uhradil k&uacute;pnu cenu alebo jej časť,
                pred&aacute;vaj&uacute;ci je povinn&yacute; vr&aacute;tiť už
                uhraden&uacute; k&uacute;pnu cenu alebo jej časť v lehote 14
                dn&iacute; odo dňa doručenia odst&uacute;pen&iacute; od
                k&uacute;pnej zmluvy kupuj&uacute;cemu.
              </span>
            </p>
            <p>
              <span>
                9.6 Pred&aacute;vaj&uacute;ci si vyhradzuje pr&aacute;vo overiť
                totožnosť kupuj&uacute;ceho alebo osoby poveren&eacute; k odberu
                tovaru pri osobnom odbere tovaru na svojich predajniach a to v
                pr&iacute;padoch, kedy je dod&aacute;vka tovaru kupuj&uacute;cim
                platen&aacute; vopred kartou, prostredn&iacute;ctvom
                bankov&eacute;ho prevodu alebo prostredn&iacute;ctvom
                fakt&uacute;ry so splatnosťou.
              </span>
            </p>
            <p>
              <span>
                9.7 Kupuj&uacute;ci bol pred&aacute;vaj&uacute;cim
                obozn&aacute;men&yacute; s t&yacute;m, že s&uacute;časťou
                objedn&aacute;vky je povinnosť zaplatiť k&uacute;pnu cenu.
              </span>
            </p>
            <p>
              <span>9.8 Kupuj&uacute;ci je povinn&yacute;:</span>
              <span>
                <br />
              </span>
              <span>a) prevziať objednan&yacute; a dodan&yacute; tovar,</span>
              <span>
                <br />
              </span>
              <span>
                b) zaplatiť pred&aacute;vaj&uacute;cemu dohodnut&uacute;
                k&uacute;pnu cenu v dohodnutej lehote splatnosti vr&aacute;tane
                n&aacute;kladov na doručenie tovaru,
              </span>
              <span>
                <br />
              </span>
              <span>
                c) potvrdiť v dodacom liste prevzatie tovaru svoj&iacute;m
                podpisom alebo podpisom n&iacute;m poverenej osoby,
              </span>
              <span>
                <br />
              </span>
              <span>
                d) nepo&scaron;kodzovať dobr&eacute; obchodn&eacute; meno
                pred&aacute;vaj&uacute;ceho.
              </span>
            </p>
            <p>
              <span>
                <br />
              </span>
              <span>
                9.9 Kupuj&uacute;ci m&aacute; pr&aacute;vo na dodanie tovaru v
                množstve, kvalite, term&iacute;ne a mieste dohodnutom
                zmluvn&yacute;mi stranami.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
Privacy.Layout = Layout
