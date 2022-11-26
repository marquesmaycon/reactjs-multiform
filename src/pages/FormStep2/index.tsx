import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';

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
      if (state.level === 0 || state.level === 1) {
         navigate('/step3')
      } else {
         alert('Selecione uma opção!')
         // mostrar no layout o erro como tarefa
      }
   }
   const handlePrevStep = () => {
      navigate('/')
   }

   const setLevel = (level: number) => {
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
               selected={state.level === 0}
               onSelect={() => { setLevel(0) }}
            />

            <SelectOption
               title={'Sou programador'}
               description={'Já programo há 2 anos ou mais'}
               icon={'🧑‍💻'}
               selected={state.level === 1}
               onSelect={() => { setLevel(1) }}
            />

            {/* Componetizar os botões. Botoes com cores condicionais */}
            <Link to="/"><button onClick={handlePrevStep}>Voltar</button></Link>
            <button onClick={handleNextStep}>Próximo</button>
         </C.Container>
      </Theme>
   )
}