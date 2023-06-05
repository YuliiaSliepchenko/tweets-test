import styled from '@emotion/styled';

export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 8px solid #EBD8FF;
    width:100%;
  `
export const Logo = styled.img`
width:76px;
height:22px;
padding-left:20px;`
export const BgrImg = styled.img`
    margin-left: 35px;
    margin-top: -20px;
    margin-bottom: 10px;
    margin-right:20px;
    
width:308px;
height:168px;`


export const LinkStyle = styled.button`
width:10px;`
export const Card = styled.li`
@media (min-width: 320px) {
flex-direction: column;
background-color: #471CA9;
height: 100%;
width:380px;
border-radius: 20px;

display: flex;
justify-content: space-between;
padding: 20px 0px ;
margin:auto;
}
@media (min-width: 768px) { 
  background-color: #471CA9;
  }
@media (min-width: 1280px) {
  background-color: #471CA9;
} 
`
export const Avatar = styled.img`
width:80px;
height:80px;
margin-top: -52px;
margin-right: 25px;
border:solid 8px #EBD8FF;
border-radius: 50%;
box-shadow: 0px 0px 4px 1px #FBF8FF;
`
export const ListItem = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:16px;
    list-style: none;
    color:#EBD8FF;
`
export const Item = styled.li`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 1.222px;
margin-bottom:16px;
`


export const Btn = styled.button`
background-color:#EBD8FF;
border-radius: 10.3108px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 1,22px;

width:192px;
height:50px;`


export const Footer = styled.div`

`



