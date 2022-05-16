import styled from 'styled-components';

export const MobileCard = styled.div`
  position: relative;
  display: block;
  width: 280px;
  border-radius: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: var( --color-white); 
  border-left: 5px solid color: ${props => (props.type === 'income' ? 'var(--color-secondary)' : 'var(--color-tertiary)')};
  &:not(:last-child) {
    margin-bottom: 7px;
  } 
`;
export const MobileCardGroup = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border);
  }
`;
export const MobileCardItem = styled.p`
font-weight: 700;
`;
export const MobileCardItemValue = styled.p`
text-align: right;
`;
export const MobileCardCosts = styled.div`
border-left: 5px solid var(--color-tertiary);
`;
export const MobileCardIncome = styled.div`
border-left: 5px solid var(--color-secondary);
`;
export const MobileCardItemColor = styled.p`
color: ${props => (props.type === 'income' ? 'var(--color-secondary)' : 'var(--color-tertiary)')};`

