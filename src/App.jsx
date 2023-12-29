
import { useState } from 'react';
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import { CORE_CONCEPTS } from './data.js';
import TabBarButton from './components/TabBarButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button to select a Topic');
  function handleClick(selctedButton) {
    console.log(selctedButton);
    setSelectedTopic(selctedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabBarButton onSelect={() => handleClick('Component')}>Component</TabBarButton>
            <TabBarButton onSelect={() => handleClick('JSX')}>JSX</TabBarButton>
            <TabBarButton onSelect={() => handleClick('Props')}>Props</TabBarButton>
            <TabBarButton onSelect={() => handleClick('State')}>State</TabBarButton>
          </menu>

        </section>
        {selectedTopic};
      </main>
    </div>
  );
}

export default App;
