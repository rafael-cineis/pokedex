import styled from 'styled-components'

export const StyledPokemonCard = styled.a`
  padding: 8px;
  margin: 8px 16px;
  background: #fff;
  cursor: pointer;
  transition: ease 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 20px;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1.00);
  }
`
export const PokemonName = styled.h4`
  font-weight: bold;
`

export const NumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageWrapper = styled.div`
  height: 300px;

  img {
    width: 300px;
    height: auto;
    max-height: 100%;
  }
`
