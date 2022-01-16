import { useEffect, useState, useMemo } from 'react'
import { ConteinerSlot } from './styles'

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



const BossSlot = ({ lista, tipo }) => {

  
  return(
    <ConteinerSlot>
      <h2></h2>
    </ConteinerSlot>
  
  )}

export default BossSlot;
