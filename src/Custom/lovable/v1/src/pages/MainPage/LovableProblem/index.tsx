import { LovableContainer } from '../../../lovable-ui/LovableContainer'
import {
  PageSectionAlt,
  SectionEyebrow,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../styles'
import { ProblemCard, ProblemGrid, ProblemText, ProblemTitle } from './styles'
import type { LovableProblemProps } from './types'

export const LovableProblem: React.FC<LovableProblemProps> = ({ data }) => {
  return (
    <PageSectionAlt id="problem">
      <LovableContainer>
        <SectionHeader>
          <SectionEyebrow>{data.eyebrow}</SectionEyebrow>
          <SectionTitle>{data.title}</SectionTitle>
          <SectionLead>{data.lead}</SectionLead>
        </SectionHeader>

        <ProblemGrid>
          {data.points.map((point) => (
            <ProblemCard key={point.id}>
              <ProblemTitle>{point.title}</ProblemTitle>
              <ProblemText>{point.description}</ProblemText>
            </ProblemCard>
          ))}
        </ProblemGrid>
      </LovableContainer>
    </PageSectionAlt>
  )
}
