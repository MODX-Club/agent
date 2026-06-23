import { LovableContainer } from '../../../lovable-ui/LovableContainer'
import {
  PageSectionDark,
  SectionEyebrow,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from '../styles'
import {
  TechCard,
  TechDescription,
  TechGrid,
  TechItem,
  TechList,
  TechTitle,
} from './styles'
import type { LovableTechProps } from './types'

export const LovableTech: React.FC<LovableTechProps> = ({ data }) => {
  return (
    <PageSectionDark id="tech">
      <LovableContainer>
        <SectionHeader>
          <SectionEyebrow>{data.eyebrow}</SectionEyebrow>
          <SectionTitle style={{ color: 'inherit' }}>{data.title}</SectionTitle>
          <SectionLead style={{ color: 'inherit', opacity: 0.75 }}>
            {data.lead}
          </SectionLead>
        </SectionHeader>

        <TechGrid>
          {data.groups.map((group) => (
            <TechCard key={group.id}>
              <TechTitle>{group.title}</TechTitle>
              <TechDescription>{group.description}</TechDescription>
              <TechList>
                {group.items.map((item) => (
                  <TechItem key={item}>{item}</TechItem>
                ))}
              </TechList>
            </TechCard>
          ))}
        </TechGrid>
      </LovableContainer>
    </PageSectionDark>
  )
}
