import styled from "styled-components"
import { FC, useState, useEffect } from 'react'
import { BaseBox } from '../BaseBox';
import RadarSvg from '../../pngs/radar.svg'
import PreviewSvg from '../../pngs/preview.svg'
import { Flex, Popover, PopoverTrigger } from '@chakra-ui/react'
import  PopoverSelectServidor  from '../PopoverServidorSelect'
import { useRouter } from "next/router";

import { Container } from './styles'

interface ServidorType{
  servidor: string
}

const Header = (server:ServidorType) => {

  const servidorSelecionado = server.servidor

    return (
    <Container>
       <BaseBox className="conteinerCentro">
          <ul className="esquerda">
            <li className="menuItem">
              <RadarSvg />
              Radar
            </li>
            <li className="menuItem">
              <PreviewSvg />
              Previsão
            </li>
          </ul>
          <div className="centro">
            <img className="logo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/LOGO+HORIZONTAL+BRANCO.png" alt="" />
          </div>
          <ul className="direito">
            <li className="menuItem">
            <Popover>
              <PopoverTrigger>
                <Flex className="card">
                  <h1>{servidorSelecionado}</h1>
                  <span>Trocar</span>
                </Flex>
              </PopoverTrigger>
              <PopoverSelectServidor />
            </Popover>
            </li>
            
            <li className="menuItem">
              Sair
            </li>
          </ul>
          
       </BaseBox>
    </Container>
  )
};

export default Header
