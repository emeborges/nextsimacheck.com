import { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Container } from './styles'
import BossSlot from '../BossSlot'

interface typeListagem{
  bossDados: BossDados[]
}

interface BossDados{
  filter: any
  expect_in: number;
  drop_rate:number;
  prediction_frame: string[];
  current_prob: number;
  colour_frame: number;
  world_drop: string;
  overall_drop: string;
  days_since_last_view: number;
  last_view: string;
  boss: string;
  lore: string;
  wiki_url: string;
  server: string;
  image_url: string;
  display_name: string;
  is_premium_show: boolean;
}



const RadarPage = (lista:BossDados[]) => {
  const listagem = lista


  const teste = listagem.filter(boss =>{
    let retorno = false

    if(boss.overall_drop == "Most Wanted"){
      retorno = true
    }

    return retorno
  }) 

  
  return(
  <Container>
     
  </Container>
  
  )}

export default RadarPage;
