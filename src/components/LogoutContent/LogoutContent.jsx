

import {
    useDispatch} from "react-redux";

import { logOut } from '../../redux/auth/auth-operations'


import { ModalContainer, CloseBtn, Title, BtnContainer, ConfirmBtn, CancelBtn } from "./LogoutContent.styled"

const LogoutModal = ({ setOpenModal }) => {
    const dispatch = useDispatch();


    
    const handleClick = () => {
    
   
        dispatch(logOut());
        setOpenModal(false)
     
    }
    return (
       
        <ModalContainer>
             
        <CloseBtn type="button" onClick={()=>{setOpenModal(false)}}>X</CloseBtn>
            <Title>Are you sure you want to logout?</Title>
            <BtnContainer>
    <ConfirmBtn type="button" onClick={handleClick}>Ok</ConfirmBtn>
            <CancelBtn type="button" onClick={()=>{setOpenModal(false)}}>Cancel</CancelBtn>
            </BtnContainer>    

</ModalContainer>
                 
      
    )
}


export default LogoutModal;
