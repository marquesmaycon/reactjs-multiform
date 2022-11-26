import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import * as C from './styles';


export const FormStep1 = () => {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();

   useEffect(() => {
      dispatch({
         type: FormActions.setCurrentStep,
         payload: 1
      })
    }, [])

   const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: FormActions.setName,
         payload: e.target.value
      });
   }

   const handleNextStep = () => {
      if (state.name.length > 5) {
         navigate('/step2')
      } else {
         alert('Preencha o nome completo')
         // mostrar no layout o erro como tarefa
      }
   }

   return (
      <Theme>
         <C.Container>
            <p>Passo 1/3</p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha o campo abaixo com seu nome completo.</p>
            <hr />

            <label>
               Nome completo
               <input
                  type="text"
                  autoFocus
                  value={state.name}
                  onChange={handleNameChange}
               />
            </label>

            <button disabled>Voltar</button>
            <button onClick={handleNextStep}>Próximo</button>
         </C.Container>
      </Theme>
   )
}