
import { FC, useEffect, useState } from 'react'
import { Container } from '../styles/pages/Home'
import { Flex, Popover, PopoverTrigger, } from '@chakra-ui/react'


import { BaseBox } from '../styles/components/BaseBox';
import  PopoverSelectServidor  from '../styles/components/PopoverServidorSelect';

const Home: FC = () => {
  
    return (
    <Container>
      <div className="initial">
        <Flex className="background">
            <img  className="imagemFundo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimaCapa.png" alt="" />
            <img className="imagemFundo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/CyfCapa.png" alt="" />
            <img className="imagemFundo primeira" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/bttCapa.png" alt="" />
        </Flex>
      </div>
      <BaseBox className="boxInicio">
        <img className="logo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/LOGO+HORIZONTAL+BRANCO.png" alt="" />
        <h2 className="frase">Seu BossCheck nunca mais será o mesmo..</h2>
        <Flex className="boxCards">
          <Popover>
            <PopoverTrigger>
              <Flex className="card">
                <h4>Radar</h4>
              </Flex>
            </PopoverTrigger>
            <PopoverSelectServidor />
          </Popover>
          <Flex className="card">
            <h4>Entenda Como Funciona</h4>
          </Flex>
          <Flex className="card">
            <h4>Quem somos?</h4>
          </Flex>
          <Flex className="card">
            <h4>Comunidade</h4>
          </Flex>
        </Flex>
      </BaseBox>
    </Container>
  )
};

export default Home
