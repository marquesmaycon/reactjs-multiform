import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { Button } from '../../components/Button';

import * as C from './styles';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();

   useEffect(() => {

      if (state.name === '') {
         navigate('/')
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
         })
      }

   }, [])


   const handleNextStep = () => {
      navigate('/step3')
      
   }

   const setLevel = (level: string) => {
      dispatch({
         type: FormActions.setLevel,
         payload: level
      })
   }

   return (
      <Theme>
         <C.Container>
            <p>Passo 2/3</p>
            <h1>{state.name}, o que melhor te descreve?</h1>
            <p>Escolha a opção que melhor condiz com você profissionalmente.</p>
            <hr />

            <SelectOption
               title={'Sou iniciante'}
               description={'Comecei a programar há menos de 2 anos'}
               icon={'🧠'}
               selected={state.level === 'aprendiz' ? true : false}
               onSelect={() => { setLevel('aprendiz') }}
            />

            <SelectOption
               title={'Sou programador'}
               description={'Já programo há 2 anos ou mais'}
               icon={'🧑‍💻'}
               selected={state.level === 'experiente' ? true : false}
               onSelect={() => { setLevel('experiente') }}
            />

            <Button text={'Voltar'} path={'/'} isDisabled={false} ></Button>
            <Button text={'Próximo'} path={'/step3'} isDisabled={false} onClick={handleNextStep}></Button>
         </C.Container>
      </Theme>
   )
}