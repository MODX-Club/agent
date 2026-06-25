import { LovableContainer } from '../LovableContainer'
import {
  LovableFooterBottomStyled,
  LovableFooterBrandNameStyled,
  LovableFooterBrandStyled,
  LovableFooterColumnListStyled,
  LovableFooterColumnStyled,
  LovableFooterColumnTitleStyled,
  LovableFooterDescriptionStyled,
  LovableFooterGridStyled,
  LovableFooterLinkStyled,
  LovableFooterStyled,
} from './styles'
import { LovableFooterColumn } from './types'

export interface LovableFooterProps {
  brandName: string
  description: string
  columns: LovableFooterColumn[]
  copyright: string
}

export const LovableFooter: React.FC<LovableFooterProps> = ({
  brandName,
  description,
  columns,
  copyright,
}) => {
  return (
    <LovableFooterStyled>
      <LovableContainer>
        <LovableFooterGridStyled>
          <LovableFooterBrandStyled>
            <LovableFooterBrandNameStyled>
              {brandName}
            </LovableFooterBrandNameStyled>
            <LovableFooterDescriptionStyled>
              {description}
            </LovableFooterDescriptionStyled>
          </LovableFooterBrandStyled>
          {columns.map((col) => (
            <LovableFooterColumnStyled key={col.id}>
              <LovableFooterColumnTitleStyled>
                {col.title}
              </LovableFooterColumnTitleStyled>
              <LovableFooterColumnListStyled>
                {col.items.map((it) => (
                  <LovableFooterLinkStyled key={it.id} href={it.href}>
                    {it.label}
                  </LovableFooterLinkStyled>
                ))}
              </LovableFooterColumnListStyled>
            </LovableFooterColumnStyled>
          ))}
        </LovableFooterGridStyled>
        <LovableFooterBottomStyled>
          <span>{copyright}</span>
          <span>Made for safe MODX modernization</span>
        </LovableFooterBottomStyled>
      </LovableContainer>
    </LovableFooterStyled>
  )
}
