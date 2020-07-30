import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1024px;
  padding: 16px 32px;
  align-items: center;

  > * {
    margin-bottom: 32px;
  }

  .infoContainer {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .nameContainer > * {
    display: inline-block;
    text-transform: uppercase;
    &:last-child {
      margin-left: 16px;
    }
  }

  @media (max-width: 768px) {
    .infoContainer {
      flex-direction: column;
      align-items: center;
    }
  }
`
