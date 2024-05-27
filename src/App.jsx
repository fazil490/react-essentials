import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("");
  const handleSelect = (selectedBtn) => {
    setSelectedTab(selectedBtn);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept {...item} key={item.title}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTab === 'components' ? true : false} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTab === 'jsx' ? true : false} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTab === 'props' ? true : false} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTab === 'state' ? true : false} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTab ? (
              <div>
                <p>Please select any tab.</p>
              </div>
            ) : (
              <div>
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
