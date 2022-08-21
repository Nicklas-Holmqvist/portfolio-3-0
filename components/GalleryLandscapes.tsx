import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface GalleryLandscapes {}

export const GalleryLandscapes: React.FC<GalleryLandscapes> = () => {
  return (
    <>
      <ImageSection>
        <ImageContainer>
          <Image
            src={'/images/landscapes.jpg'}
            alt="Gamla hus"
            width={965}
            height={690}
          />
          <p>
            Torplyckan Kvarnåsen under gården Skoghem i Berghem, blev öde början
            1900-talet.
          </p>
        </ImageContainer>
      </ImageSection>
      <InformationSection>
        <h2>Det glömda landskapet</h2>
        <p>
          I skogen runt om i bygderna döljer sig spåren efter de människor som
          brukade upp och livnärde sig på den ofta så magra jorden. Gärdesgårdar
          och odlingsrösen staplades upp med de stenar som plöjdes upp från de
          små åkerlotterna. Med hjälp av hävstänger, oxar och på sin höjd en
          häst slet de dagarna i ända tills åkern blev redo för sådd. Torparna
          fick ofta lön i natura men det räckte sällan alltid till och då var
          det lilla de själva kunde odla upp livsviktigt.
          <br />
          <br />
          Mellan torpet, backstugan och gårdarna gick det oftast
          vandringsstigar, väldigt sällan plats för häst och vagn. De här
          stigarna har till idag byggts om till grusvägar eller försvunnit helt,
          så som torparfamiljerna som en gång brukade och levde i våra skogar.
          Kvar finns bara stenmurarna, odlingsrösena, jordkällarna och
          husgrunderna. Lite artefakter som spänner och flaskor är ett vanligt
          fynd men då slängda i stenmurarna eller odlingsrösena.
          <br />
          <br />
          Kvarnar, såg och ålfiske var tre betydande verksamheter som brukades i
          våra många vattendrag. Stora som små kvarnar fanns det ett dämme för
          att lagra vattnet för att brukas effektivt. De lite mindre kvarnarna
          fanns placerade även i mindre bäckar långt upp i skogarna och brukades
          endast vid vårflod eller efter skyfall. Spåren efter de här kan vara
          betydligt svårare att hitta.
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
