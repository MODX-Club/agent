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
import type { LovableFooterProps } from './types'

export const LovableFooter: React.FC<LovableFooterProps> = ({
  brandName,
  description,
  columns,
  copyright,
  onNavigate,
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
                  <LovableFooterLinkStyled
                    key={it.id}
                    // eslint-disable-next-line react/jsx-no-bind
                    onClick={() => onNavigate?.(it.href)}
                  >
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
