import React from 'react'
import Container from '../shared/Container'
import SectionText from '../shared/SectionText'
import { SectionsTextContent } from '@/constants'

const Summary = () => {
  return (
    <section id="summary" className="scroll-mt-20">
      <Container>
        <SectionText 
        title={SectionsTextContent.summary.title}
        description={SectionsTextContent.summary.description}
        />
      </Container>
    </section>
  );
}

export default Summary