import React from 'react';
import styled from 'styled-components';

export interface Layout {}

export const Layout: React.FC<Layout> = () => {
  const Main = styled.main``;

  const Section = styled.section`
    height: 100vh;
    padding: 6rem 10rem;
  `;

  const Article = styled.article`
    height: 100vh;
    padding: 6rem 10rem;
  `;
  return (
    <Main>
      <Section role="contentinfo" aria-label="Bakgrundsbild för startsidan">
        Hero
      </Section>
      <Article
        role="contentinfo"
        aria-label="Information om det fotografiska projektet Glömd värld i Marks härad"
      >
        <h2>Glömd värld</h2>
      </Article>
      <Article
        role="contentinfo"
        aria-label='Information om fotogalleriet "Det glömda landskapet"'
      >
        <h2>&quot;Det glömda landskapet&quot;</h2>
      </Article>
      <Article
        role="contentinfo"
        aria-label='Information om fotogalleriet "Torp, backstuga och ladugård"'
      >
        <h2>&quot;Torp, backstuga och ladugård&quot;</h2>
      </Article>
      <Article
        role="contentinfo"
        aria-label='Information om fotogalleriet "De vackra detaljerna"'
      >
        <h2>&quot;De vackra detaljerna&quot;</h2>
      </Article>
      <Article role="contentinfo" aria-label="Vem är Nicklas Holmqvist">
        <h2>Om mig</h2>
      </Article>
    </Main>
  );
};
