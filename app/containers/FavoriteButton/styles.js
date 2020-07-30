import styled from 'styled-components'

export const FavoriteIconButton = styled.button`
  cursor: pointer;
  color: ${props => props.favorited ? 'red' : 'black'};
  outline: none;
  background: #ffde00;
  border: none;
  border-radius: 4px;
  transition: ease 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`
