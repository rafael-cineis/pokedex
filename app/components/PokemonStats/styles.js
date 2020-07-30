import styled from 'styled-components'
import Field from 'components/Field'

export const Wrapper = styled.div`
display: inline-block;
padding: 16px;
border: 1px solid rgba(0, 0, 0, 0.125);
border-radius: 20px;
box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);

.statsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`

export const StatsField = styled(Field)`
display: inline-block;
margin: 4px;
padding: 4px 8px;
background-color: ${props => props.color};
border-radius: 8px;
min-width: 80px;
text-align: center;
`
