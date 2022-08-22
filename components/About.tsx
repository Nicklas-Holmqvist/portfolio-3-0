import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface About {}

export const About: React.FC<About> = () => {
  return (
    <>
      <InformationSection>
        <h2>Om mig</h2>
        <p>
          Jag heter Nicklas Holmqvist och är född under det underbara 80-talet.
          Född i Göteborg men uppvuxen i byarna Älekulla och Torestorp i Marks
          kommuns södra, kulliga och skogiga trakter. Här sprang jag, mina
          syskon, kusiner och klasskompisar runt på grannarnas tomter och lekte
          cowboy och indian, dunken, ta fatt och massa annat kul. Skogen var vår
          granne men vågade aldrig riktigt ut i den själv som barn och har väl
          inte för än mitt projekt tagit fart nu som vuxen som jag inte riktigt
          tänker onödiga tankar utan tar in energin där ute. Ett å annat
          vildsvin och älg har jag stött på och det är lika kusligt varje gång.
          Min blick går direkt mot ett träd som jag kan klättra upp i men så
          långt har det ju inte gått ännu.
          <br />
          <br />
          Kreativiteten har alltid flödat i mig och när jag blev tonåring
          pressade jag eget papper som jag sedan målade ett fjällandskap i
          akvarell på. Jag målade rätt mycket en tid men insåg snabbt då jag är
          röd-grön färgblind att jag inte kunde blanda till de färgerna jag
          ville. I 8:an fick jag en vanlig 35mm kamera som jag var ute med en
          god vän som lämnade oss allt för tidigt och fotograferade runt
          Hyltenäs kulle. Men när jag flyttade hem ifrån redan som 16-åring blev
          livet helt vänt kan man säga.
          <br />
          <br />
          Under lumpen 2004 köpte jag mig en 2.1mp HP kamera och den var med mig
          det sista halvåret ute i fält. Det var väl här resan började och man
          uppgradera kameran till en Konica-Minolta Z6 för att få lite mer
          brännvidd. Men kort därpå tog jag steget upp till systemkamerans värld
          då jag köpte mig en Nikon D50. Jag har därefter ägt en D80, D7000 och
          två D750 men har bara en D750 kvar idag. Glasen jag har är ett Sigma
          ART 24mm, Nikon 50mm 1.8G och Tamron 70-200 2.8 G2. Kan ju säga att
          Tamronet lever på kamerahuset för det mesta.
          <br />
          <br />
          2020 var året som mitt liv ändrades. Efter nästan 17år på ett å samma
          företag satte jag mig i skolbänken igen och utbildade mig till
          frontend-utvecklare på yrkeshögskolan i Göteborg. Det var två hektiska
          och lärorika år som jag precis hunnit landa i och få upp suget att
          utveckla mina kunskaper ännu mer. Jag sökte utbildningen för att
          själva kunna skapa det jag får till mig. Idéer sprudlar hela tiden och
          att själv kunna skapa det är ett sjukt häftigt verktyg. Inget jag
          ångrar idag, man ska våga ta steget som mina gamla jobbarkompisar
          alltid sa.
          <br />
          <br />
          Idag lever jag med min sambo och son i Varberg sedan sommaren 2022.
          Här omkring finns helt nya miljöer och gamla historiska platser att
          utforska. Så vi får se vad för fotografier som dyker upp här i
          framtiden.
        </p>
      </InformationSection>
      <ImageSection>
        <ImageContainer>
          <Image
            src={'/images/nicklas_holmqvist.jpg'}
            alt="Nicklas Holmqvist"
            width={600}
            height={600}
          />
        </ImageContainer>
      </ImageSection>
    </>
  );
};

const ImageSection = styled.section`
  box-sizing: border-box;
  max-width: 475px;
  width: 100%;
  display: flex;
  padding-bottom: 2rem;
  @media (max-width: 1300px) {
    padding-left: 2rem;
  }
  @media (max-width: 1100px) {
    padding-top: 2rem;
    padding-left: 0;
  }
`;

const InformationSection = styled.section`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  p {
    max-width: 650px;
  }
`;

const ImageContainer = styled.div`
  max-width: 465px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  @media (max-width: 1300px) {
    align-items: center;
  }
`;
