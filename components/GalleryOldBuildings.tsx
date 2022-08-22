import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface GalleryOldBuildings {}

export const GalleryOldBuildings: React.FC<GalleryOldBuildings> = () => {
  return (
    <>
      <InformationSection>
        <InformationContainer>
          <h2>Det glömda landskapet</h2>
          <p>
            I den mörkaste natt syntes på distans ett dovt ljussken. Det var
            från lyktan som hängde ifrån taket i köket i den lilla stugan längre
            fram. Jag närmade mig stugan och såg att ljuset fladdrade till och
            från i köksfönstret. Det var torparfrun som satt och vävde på den
            sena timman. De alla sju barnen hade för längesedan somnat in till
            den sprakande elden som värmde upp stugan. Hennes make satt på
            kökssoffan och lagade sina slitna sockar efter ett dagsverke på
            gården andra sidan skogen.
            <br />
            <br />
            Som artighet bjöds det på en liten sup och en pratstund om livet i
            stugan. De hade nyligen kommit hem från begravningen av deras yngste
            dotter som strök med i kikhosta förra helgen. I granntorpet hade
            sonen på 3år också gått bort i kikhosta. Tiden var svår men de
            gjorde vad de kunde. Efter några fler små supar och hustrun hade
            lagts sig intill en av döttrarna som frös var det dags för mig att
            lägga mig på höskullen ute i ladugården. Tog med mig en lyckta och
            klättrade upp för den rangliga stegen upp på loftet. Lade ut min
            långa och tunga rock på höet och somnade in till prasslet av mössen
            som sprang runt på loftet och kattugglans hoande.
            <br />
            <br />
            Jag vaknade till att den äldsta dottern i stugan började mjölka
            deras enda ko. Arbetsdagen började tidigt för alla och torparfrun
            stod redan och kokade till havregrynsgröt i sin trefots
            gjutjärnsgryta över den öppna elden i köket till alla de små. Maken
            hade redan givit sig i väg för sitt dagsverke och jag fick mig en
            litet fat med kaffe på bit innan min resa tog mig mot nya
            levnadsöden.
          </p>
          <Link href={`/`}>
            <LinkButton>Visa galleri</LinkButton>
          </Link>
        </InformationContainer>
      </InformationSection>
      <ImageSection>
        <ImageContainer>
          <Image
            src={'/images/old-buildings.jpg'}
            alt="Gamla hus"
            width={560}
            height={700}
          />
          <p>
            Man kan nästan se torpafrun stå där i fönstret och väntar in sin
            make.
          </p>
        </ImageContainer>
      </ImageSection>
    </>
  );
};

const ImageSection = styled.section`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-left: 2rem;
`;

const InformationSection = styled.section`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    padding-bottom: 2.5rem;
  }
`;

const InformationContainer = styled.div`
  max-width: 475px;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 560px;
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
