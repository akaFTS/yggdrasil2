import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ClassesContainer from 'src/components/classes/ClassesContainer';
import EvolutionProvider from 'src/components/providers/EvolutionProvider';
import ClassesProvider from 'src/components/providers/ClassesProvider';
import ElectivesProvider from 'src/components/providers/ElectivesProvider';
import Sidebar from 'src/components/sidebar/Sidebar';

export default function Index() {
  return (
    <div className="montserrat bg-light-gray">
      <EvolutionProvider>
        <ClassesProvider>
          <ElectivesProvider>
            <Header />
            <div className="flex flex-column-reverse flex-row-l">
              <ClassesContainer />
              <Sidebar />
            </div>
            <Footer />
          </ElectivesProvider>
        </ClassesProvider>
      </EvolutionProvider>
    </div>
  );
}
