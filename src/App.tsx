import React from 'react';
import FirstAndSecond from './components/FirstAndSecond';
import Header from './components/Header';
import { Main, Section, Sticky } from './styles';
import GlobalStyles from './styles/Global';

const App: React.FC = () => {

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <GlobalStyles />

      <Header />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  )
}


export default App;
