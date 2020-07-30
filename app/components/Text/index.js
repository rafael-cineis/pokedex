/**
 *
 * Text
 *
 */

import styled, { css } from 'styled-components'

const BoldText = css`
  font-weight: bold;
`

const SemiBoldText = css`
  font-weight: 600;
`

const LightText = css`
  font-weight: 300;
`

const BigText = css`
  font-size: 20px;
`

const MediumText = css`
  font-size: 18px;
`

const SmallText = css`
  font-size: 14px;
`

const UppercaseText = css`
  text-transform: uppercase;
`

const WhiteText = css`
  color: white;
`

const Text = styled.p`
  margin: 0;

  font-size: 1em;
  color: #000000;

  ${props => props.big && BigText}
  ${props => props.medium && MediumText}
  ${props => props.small && SmallText}
  ${props => props.bold && BoldText}
  ${props => props.semiBold && SemiBoldText}
  ${props => props.light && LightText}
  ${props => props.uppercase && UppercaseText}
  ${props => props.white && WhiteText}
`

export default Text
