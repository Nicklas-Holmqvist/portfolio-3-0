import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { NavLink } from './NavLink';

interface ProjectSection {}

export const ProjectSection: React.FC<ProjectSection> = () => {
  return (
    <>
      <ProjectInformation>
        <h2>Fotografiska projektet</h2>
        <h3>GLÖMD VÄRLD</h3>
        <p>
          Det hela började med en promenad längst den gamla vägen mellan gården
          Skoghem i Berghem och Hajom. Det var kall novembermorgon och jag gick
          längst den gräsklädda vägen som slingrade sig igenom landskapet mot
          Skoghem. Det hade regnat under natten till idag och daggen hängde i
          landskapet. Jag kom fram till en lycka och lucka i stenmuren som gick
          längst med vägen. Blickade ut över den vildvuxna åkern med dess
          murriga färger. Dimman hängde högt upp i trädkronorna och längre ut på
          åkern spretade ett gammalt träd ut sina kala och mossbeklädda grenar.
          Här i lyckan låg förr torpet Kvarnåsen med jordkällare och en mindre
          ladugård och den siste boende här var den sinnessjuka Emma Kristina
          Rylander.
        </p>
        <p>
          Efter den här promenaden blev jag nyfiken på var mer det fanns gamla
          boplatser i skogarna som kunde vara av intresse att fotografera. Jag
          började markera ut intressanta platser och tog korta promenader. Men
          jag reflekterade tidigt över att det fanns så många fler platser som
          också hade försvunnit än de jag tyckte var intressanta. Och på den
          vägen började mina timmars arbete på att markera ut alla platserna
          från Häradsekonomiska kartan som sammanställdes i slutet 1800-talet.
        </p>
        <p>
          Har inte hunnit markera ut allt än då livet också ska levas. Det här
          är ett hobbyprojekt som jag gör på min egen fritid utan någon koppling
          till en förening. Efter en tid kände jag att bara samla bilderna på
          datorn inte gjorde någon nytta och idén om att skapa Facebook-gruppen
          Glömd värld i marks härad kläcktes. Min första tanke var att bara dela
          bilder från platserna utan någon specifik historia och att mina nära å
          kära kan följa om så ville. Har aldrig haft målet med att tvinga någon
          på mina bilder och historier, vill man följa mig får man det och efter
          några år har gruppen snart 600 följare. Det är för mig helt
          mindblowing. Min blogg Glömd värld skapade jag lite senare med syfte
          att alla ska kunna ta del av mina och Charlottas berättelser om Marks
          Härad utan att behöva ett konto.
        </p>
        <p>
          Resan har nu varat i några år, ett antal sena kvällar och hundratals
          timmar nerlagt på mina berättelser om de glömda platser och
          människoöden som utspelade sig i våra skogar. Har även fått äran att
          få ställa ut mina bilder samt varit med i P4 Sjuhärad och flertalet
          lokala tidningar. Det finns inget slut på projektet utan det lever så
          länge det lever.
        </p>
        <Link
          href={'https://www.instagram.com/explore/tags/gl%C3%B6mdv%C3%A4rld/'}
        >
          <NavLink linkText={'#glömdvärld'} />
        </Link>
      </ProjectInformation>
      <ProjectReference>
        <h2>Utställningar och referenser</h2>
        <ul>
          <li>2020 - Utställning på Kinna Bibliotek</li>
          <li>2020 - Radio Sjuhärad på Sveriges radio P4</li>
          <li>2020 - Göteborgs posten</li>
          <li>2020 - Borås tidning</li>
          <li>2020 - Markbladet</li>
          <li>2021 - Utställning på Lundens trädgård i Älekulla</li>
          <li>2021 - Markbladet</li>
        </ul>
      </ProjectReference>
    </>
  );
};

const ProjectInformation = styled.section`
    max-width: 1000px;
    width: 100%;
    align-self: center;
    }
    p {
        max-width: 650px;
        width: 100%;
        line-height: 1.4rem;
        padding-bottom: 0.8rem;
    }
    @media (max-width: 1300px) {
        align-self: start;
      }
`;

const ProjectReference = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 475px;
  width: 100%;
  h2 {
  }
  li {
    margin-left: 1rem;
    padding: 0.2rem;
  }
  @media (max-width: 1300px) {
    padding-top: 2rem;
  }
`;
