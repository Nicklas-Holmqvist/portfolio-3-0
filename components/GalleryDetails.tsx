import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface GalleryDetails {}

export const GalleryDetails: React.FC<GalleryDetails> = () => {
  return (
    <>
      <ImageSection>
        <ImageContainer>
          <Image
            src={'/images/details.jpg'}
            alt="Gamla hus"
            width={965}
            height={690}
          />
          <p>
            Det fina fönstret i solnedgångens varma toner i källaren på en
            välbevarad kvarn i Marks härad.
          </p>
        </ImageContainer>
      </ImageSection>
      <InformationSection>
        <h2>De vackra detaljerna</h2>
        <p>
          Vad är en vacker detalj? För mig är det en konstruktion av hur något
          byggts samman, olika dörrar och fönster. Det finns många fina dörrar
          och fönster med riktig patina efter många års övergivenhet. Självklart
          finns det vackra ting på gamla hus som än idag brukas. Det är dock det
          mer slitna som lockar mig till ett fotografi.
          <br />
          <br />
          När jag besöker gamla byggnader brukar jag gå runt och studera det
          från topp till tå. Ingen detalj är för liten att fotografera. På
          utsidan blir det främst dörrar och fönster då det är de som är av
          störst intresse. Men när man väl kommer in finns det detaljer lite
          överallt. På väggarna hänger bitar av sju lager tapet,
          tidningsartiklar från när huset flyttades eller renoverades. Är
          timmerväggen synlig kan man få se spåren hur fönster byggts igen eller
          öppnats, dörrar har flyttats. Om ändå väggarna kunde tala, vart stod
          huset innan det flyttades, hur många tragiska och lyckliga händelser
          har utspelats här igenom tiden.
          <br />
          <br />I några kvarnar jag besökt finns det mycket fina
          hantverksdetaljer att fotografer. De ihopsatta kugghjulen helt i träd
          drev maskineriet så att mjölet kunde malas. Men här har även mjölnarna
          och andra människor som besökt kvarnarna gjort sina avtryck. På dörrar
          och väggar finns blyertsskrifter med årtal och namn från de mänskorna.
          Det är som en tidsresa tillbaka över 100år att få stå och läsa de alla
          skrifterna.
        </p>
        <Link href={`/`}>
          <LinkButton>Visa galleri</LinkButton>
        </Link>
      </InformationSection>
    </>
  );
};

const ImageSection = styled.section`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const InformationSection = styled.section`
  box-sizing: border-box;
  max-width: 475px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-right: 3rem;
  @media (max-width: 1300px) {
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 1100px) {
    padding-right: 0rem;
    padding-bottom: 2rem;
  }
`;

const LinkButton = styled.a`
  margin-top: 2rem;
  padding: 0.4rem 1.1rem 0.5rem 1.1rem;
  border: 2px solid #d9d9d9;
  border-radius: 3px;
  transition-property: background-color, border-color;
  transition: 0.1s ease-out;
  cursor: pointer;
  &:hover {
    border-color: #f0f0f0;
    background-color: #d9d9d9;
    color: #2a2a2a;
    font-weight: 600;
  }
`;
