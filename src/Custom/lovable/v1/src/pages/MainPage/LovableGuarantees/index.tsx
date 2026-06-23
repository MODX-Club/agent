import { LovableContainer } from '../../../lovable-ui/LovableContainer'
import {
  PageSectionAlt,
  SectionEyebrow,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../styles'
import {
  GuaranteeCard,
  GuaranteeIcon,
  GuaranteeText,
  GuaranteeTitle,
  GuaranteesGrid,
} from './styles'
import type { LovableGuaranteesProps } from './types'

export const LovableGuarantees: React.FC<LovableGuaranteesProps> = ({
  data,
}) => {
  return (
    <PageSectionAlt id="guarantees">
      <LovableContainer>
        <SectionHeader>
          <SectionEyebrow>{data.eyebrow}</SectionEyebrow>
          <SectionTitle>{data.title}</SectionTitle>
          <SectionLead>{data.lead}</SectionLead>
        </SectionHeader>

        <GuaranteesGrid>
          {data.items.map((item) => (
            <GuaranteeCard key={item.id}>
              <GuaranteeIcon aria-hidden="true">{item.icon}</GuaranteeIcon>
              <GuaranteeTitle>{item.title}</GuaranteeTitle>
              <GuaranteeText>{item.description}</GuaranteeText>
            </GuaranteeCard>
          ))}
        </GuaranteesGrid>
      </LovableContainer>
    </PageSectionAlt>
  )
}
