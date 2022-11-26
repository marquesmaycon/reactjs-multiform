import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { Button } from '../../components/Button';

import * as C from './styles';

export const FormStep3 = () => {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();
   const [btnDisable, setBtnDisable] = useState(true)

   useEffect(() => {

      if (state.name === '') {
         navigate('/')
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
         })
      }

      if (state.email.length > 5 &&
         state.github.length > 5) {
         setBtnDisable(false)
      }

   }, [state.email, state.github])

   const handleNextStep = () => {
      console.log(state)
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
            
            <Button text={'Voltar'} path={'/step2'} isDisabled={false} ></Button>
            <Button text={'Finalizar'} path={'/step4'} isDisabled={btnDisable} onClick={handleNextStep}></Button>
         </C.Container>
      </Theme>
   )
}