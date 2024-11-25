import { CORE_CONCEPTS } from "../data"
import CoreConcepts from "./CoreConcepts"
import Section from "./Section"

export default function CoreConcept () {

    return (
        <Section title={'Time to get started'} id='core-concepts'>
         
          <ul>

            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}

          </ul>
        </Section>
    )
}