import React  from "react";
import styled, { css } from "styled-components";
import TitleAndText from "../../styles/TitleAndText";
import Box from "../../styles/Box";
import Btn from "../../styles/Btn";


const StartPage = () => {
    // useEffect(()=>{console.log(iconClosed)},[])


    return (
        <Box
            // border={'orange 2px solid'}
            maxWidth={846}
            m={'0 auto'}
            p={{_: '150px 40px 0px 40px', tablet: '300px 80px 0px 80px', }}
            textAlign={'center'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignContent={'center'}
            position={'relative'}
        >
            <BoxStyledGradient/>
            <Box zIndex={'1'}>
               <TitleAndText variant={'title1'} mb={34}>Are you ready to grow your business with us?</TitleAndText>
               <TitleAndText variant={'textSmall'} mb={42} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
               </TitleAndText>
               <Btn variant={'dark'}  m={'0 auto'}>View Pricing</Btn>
            </Box>
        </Box>
    );
}

export default StartPage;

const BoxStyledGradient = styled(Box)`
  position: absolute;
  top: 0%;
  left: 60%;
  width: 510px;
  height: 510px;
  border-radius:50%;
  background: ${props => props.theme.gradients.gradientBlur};
  filter: blur(80px);
 `