
import styled from "styled-components";

export const Section = styled.section`




@media(min-width:768px)and(max-width:1279px){
position:relative;
}

@media(min-width:1280px){
// display:flex;
// justify-content:center;
// align-items:center;
}


`

export const ImgWrapper = styled.div`
display:none;

@media(min-width:768px){
    display:block;
    // display:flex;
    // justify-content:center;
    // align-items:center;
}

@media(min-width:1280px){
     padding:150px 0px 150px 75px;
     margin-right:38px;
}
`

export const Img = styled.img`

 @media(min-width: 768px )and(max-width:1279px){
     
     position:absolute;
     top:50px;
     left:80px;
     width:250px;
     height:260px
     
 }
 @media(min-width:1280px){
       width:435px;
     height:420px


 }
`

export const AppTitle = styled.h1`
margin-top:28px;
margin-bottom:0;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 1.5;
text-align:center;


@media(min-width:768px)and(max-width:1279px){
    position:absolute;
    top:150px;
    left:380px
}

`