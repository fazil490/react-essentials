import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept {...item} key={item.title} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
