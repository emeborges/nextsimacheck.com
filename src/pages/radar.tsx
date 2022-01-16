import { useEffect, useState } from 'react'
import axios from 'axios'

import { Container } from '../styles/pages/Radar'
import { BaseBox } from '../styles/components/BaseBox'
import RadarPage from '../styles/components/RadarPage'
import  Header  from '../styles/components/Header'
import  Loader  from '../styles/components/Loader'

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

const Radar = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const [servidor, setServidor] = useState()
  const [listaBosses, setListaBosses] = useState<BossDados[]>()


  useEffect(() => {
  
  const getLista = async() => {
    setLoading(true)
    const servidorSelecionado:any = localStorage.getItem('servidor')

    setServidor(servidorSelecionado)

    const chamadaAxios = await axios.get('https://api.simacheck.com' + '/server/' + 'Kalibra')
      .then(res => {
        setListaBosses(res.data) 
        setLoading(false)
        })
      .catch(err => console.log(err))
  
  }
  getLista()
  }, [])

  



  return (
    <Container>
      <Header servidor={servidor} />
        
        {loading == true ? <Loader />: <RadarPage lista={listaBosses}/>} 

    </Container>
  )
};

export default Radar

/***/