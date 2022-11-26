import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/theme';
import { Button } from '../../components/Button';
import * as C from './styles';

export const FormStep1 = () => {
   
   const navigate = useNavigate();
   const { state, dispatch } = useForm();
   const [btnDisable, setBtnDisable] = useState(true)

   useEffect(() => {
      dispatch({
         type: FormActions.setCurrentStep,
         payload: 1
      });
      isBtnDisabled();
   }, [])

   const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      isBtnDisabled();
      dispatch({
         type: FormActions.setName,
         payload: e.target.value
         
      });
   }

   const isBtnDisabled = () => {
      if (state.name.length > 3) {
         setBtnDisable(false)
      } else {
         setBtnDisable(true)
      };
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
            <Button text={'Voltar'} path={'/'} isDisabled={true} ></Button>
            <Button text={'Próximo'} path={'/step2'} isDisabled={btnDisable}></Button>

         </C.Container>
      </Theme>
   )
}