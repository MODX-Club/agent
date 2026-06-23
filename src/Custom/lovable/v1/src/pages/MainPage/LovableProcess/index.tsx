import { LovableContainer } from '../../../lovable-ui/LovableContainer'
import {
  PageSection,
  SectionEyebrow,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../styles'
import {
  ProcessImage,
  ProcessLayout,
  ProcessMedia,
  StepBody,
  StepItem,
  StepMarker,
  StepNum,
  StepText,
  StepTitle,
  StepsList,
} from './styles'
import type { LovableProcessProps } from './types'

export const LovableProcess: React.FC<LovableProcessProps> = ({
  data,
  imageSrc,
}) => {
  return (
    <PageSection id="how">
      <LovableContainer>
        <SectionHeader>
          <SectionEyebrow>{data.eyebrow}</SectionEyebrow>
          <SectionTitle>{data.title}</SectionTitle>
          <SectionLead>{data.lead}</SectionLead>
        </SectionHeader>

        <ProcessLayout>
          <StepsList>
            {data.steps.map((step) => (
              <StepItem key={step.id}>
                <StepNum>{step.num}</StepNum>
                <StepBody>
                  <StepMarker>{step.marker}</StepMarker>
                  <StepTitle>{step.title}</StepTitle>
                  <StepText>{step.description}</StepText>
                </StepBody>
              </StepItem>
            ))}
          </StepsList>

          <ProcessMedia>
            <ProcessImage
              src={imageSrc}
              alt={data.imageAlt}
              loading="lazy"
              width={1280}
              height={896}
            />
          </ProcessMedia>
        </ProcessLayout>
      </LovableContainer>
    </PageSection>
  )
}
