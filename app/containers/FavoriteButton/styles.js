import styled from 'styled-components'

export const FavoriteIconButton = styled.button`
  cursor: pointer;
  color: ${props => props.favorited ? 'red' : 'black'};
  outline: none;
  background: none;
  border: none;
  border-radius: 4px;
  transition: ease 0.2s;
  font-size: 24px;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`
