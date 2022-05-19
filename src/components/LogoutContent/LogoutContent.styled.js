import styled from 'styled-components'

export const ModalContainer = styled.div`
 width: 500px;
  height: 200px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 50%;
    cursor: pointer;
`

export const Title = styled.div`
padding-top:30px;
  font-family: Poppins;
  font-size: 25px;
  font-weight: 700;
  text-align:center;
//   text-transform: capitalize;
`

export const BtnContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:30px;
`

export const ConfirmBtn = styled.button`
width: 150px;
  height: 50px;
 margin-right:30px;
  background: var(--color-secondary);
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: transparent;
  color: var(--color-white);
`

export const CancelBtn = styled.button`
width: 150px;
  height: 50px;


  background: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);

`