import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs"

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const handleSelect = (selectedBtn) => {
    setSelectedTab(selectedBtn);
  };

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === "components" ? true : false}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx" ? true : false}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props" ? true : false}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state" ? true : false}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      ></Tabs>

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
    </Section>
  );
};

export default Examples;
