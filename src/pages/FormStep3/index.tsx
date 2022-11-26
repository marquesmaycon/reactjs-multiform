import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';

import * as C from './styles';

export const FormStep3 = () => {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();

   useEffect(() => {

      if (state.name === '') {
         navigate('/')
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
         })
      }

   }, [])

   // Desenvolver + telas
   const handleNextStep = () => {
      if (state.email.length > 4 && 
         state.github.length > 6 ) {
         alert('Finalizou')
         console.log(state)
      } else {
         alert('Preencha os campos corretamente')
         // mostrar no layout o erro como tarefa
      }
   }
   const handlePrevStep = () => {
      navigate('/step2')
   }

   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: FormActions.setEmail,
         payload: e.target.value
      })
   }
   const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: FormActions.setGithub,
         payload: e.target.value
      })
   }

   return (
      <Theme>
         <C.Container>
            <p>Passo 3/3</p>
            <h1>Legal {state.name}, onde te achamos? </h1>
            <p>Preencha os campos para entrarmos em contato.</p>
            <hr />

            <label>
               Qual seu email?
               <input
                  type="email"
                  value={state.email}
                  onChange={handleEmailChange}
               />
            </label>

            <label>
               Qual seu GitHub?
               <input
                  type="url"
                  value={state.github}
                  onChange={handleGithubChange}
               />
            </label>

            {/* Componetizar os botões. Botoes com cores condicionais */}
            <Link to="/step2"><button onClick={handlePrevStep}>Voltar</button></Link>
            <button onClick={handleNextStep}>Finalizar Cadastro</button>
         </C.Container>
      </Theme>
   )
}