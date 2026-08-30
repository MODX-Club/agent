import styled from 'styled-components'
import { HeaderCustomStyled } from './Header/styles'
import { ConceptsViewStyled } from 'src/components/pages/Concepts/View/styles'
import { ConceptViewStyled } from 'src/components/pages/Concepts/Concept/View/styles'

export const LayoutCustomStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;

  ${HeaderCustomStyled} {
    position: sticky;
    top: 0;
  }
`

export const LayoutCustomMainStyled = styled.main`
  display: contents;

  ${ConceptsViewStyled}, ${ConceptViewStyled} {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }
`
