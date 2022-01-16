
import { FC, useEffect, useState } from 'react'
import {  Portal, PopoverContent , PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, Select, Button, Flex  } from '@chakra-ui/react'
import axios from 'axios'

import { Formik } from 'formik';

const PopoverSelectServidor: FC = () => {

    const [servers, setServers] = useState([''])

    const urlGet = 'https://api.simacheck.com/' + 'worlds/'


    useEffect(() => {
        async function fetchMyAPI(){
            await axios.get(urlGet)
              .then(response => setServers(response.data))
              .catch((error)=>console.log(error))
        } fetchMyAPI()
    },[])

    return (
            <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mt='1.5rem'>
                        <Formik 
                            initialValues={{
                                servidor: ''
                            }}
                            onSubmit={(values)=> {
                                let serverSeleciona = values.servidor

                                localStorage.setItem('servidor', serverSeleciona)

                                window.location.href = "/radar/"
                                
                             }}
                        >
                            {
                                ({
                                    values,
                                    handleChange,
                                    handleSubmit
                                }) =>{
                                    return(
                                        <form onSubmit={handleSubmit}>
                                            <Select 
                                                isRequired
                                                placeholder='Selecione o Servidor'
                                                name='servidor'
                                                value={values.servidor}
                                                onChange={handleChange}>
                                                    {servers.map(server =>{
                                                        return(
                                                        <option value={server}>{server}</option>
                                                        )})
                                                    }
                                                    
                                            </Select>
                                            <Button type='submit' size='sm' mt='0.25rem' w='100%'>
                                                Ir!
                                            </Button>
                                        </form>
                                    )
                                }
                            }

                        </Formik>
                            
                           
                            
                        </PopoverBody>
                    </PopoverContent>
            </Portal>
            
         
          
  )
}

export default PopoverSelectServidor

