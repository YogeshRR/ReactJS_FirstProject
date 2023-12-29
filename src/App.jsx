
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import { CORE_CONCEPTS } from './data.js';
import TabBarButton from './components/TabBarButton.jsx';

function App() {
  function handleClick() {
    console.log("Hello World - selected");
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
            <TabBarButton onSelect={handleClick}>Component</TabBarButton>
            <TabBarButton onSelect={handleClick}>JSX</TabBarButton>
            <TabBarButton onSelect={handleClick}>Props</TabBarButton>
            <TabBarButton onSelect={handleClick}>State</TabBarButton>
          </menu>

        </section>

      </main>
    </div>
  );
}

export default App;
