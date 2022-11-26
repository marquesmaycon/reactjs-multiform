import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { Button } from '../../components/Button';

import * as C from './styles';

export const FormStep4 = () => {
   const navigate = useNavigate();
   const { state, dispatch } = useForm();

   useEffect(() => {

      if (state.name === '') {
         navigate('/')
      } else {
         dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
         })
      }
   }, [])

   const handleRenew = () => {
      dispatch({
         type: FormActions.setName,
         payload: ''
      })
      dispatch({
         type: FormActions.setLevel,
         payload: 'iniciante'
      })
      dispatch({
         type: FormActions.setEmail,
         payload: ''
      })
      dispatch({
         type: FormActions.setGithub,
         payload: ''
      })
   }

   return (
      <Theme>
         <C.Container>
            <p>Finalizado</p>
            <h1>Pronto {state.name}, agora é com a gente.</h1>
            <p>Entraremos em contato assim que avaliarmos seu perfil e portfólio</p>
            <hr />
            <h2>Suas informações</h2>
            Nome: <span>{state.name}</span> <br />
            Nível: <span>{state.level}</span> <br />
            Email: <span>{state.email}</span> <br />
            GitHub: <span>{state.github}</span> <br />

            <Button text={'Novo cadastro'} path={'/'} onClick={handleRenew} />
         </C.Container>
      </Theme>
   )
}