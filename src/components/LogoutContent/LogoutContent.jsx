

import { useDispatch, useSelector } from "react-redux";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logOut } from '../../redux/auth/auth-operations'
import { getIsError} from '../../redux/auth/auth-selectors'

import { ModalContainer, CloseBtn, Title, BtnContainer, ConfirmBtn, CancelBtn } from "./LogoutContent.styled"

const LogoutModal = ({ setOpenModal }) => {
    const dispatch = useDispatch();
    const isError = useSelector(getIsError)

    
    const handleClick = () => {
        if (isError) {
            toast.error('Something went wrong! Please, try again')
        }
   
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
