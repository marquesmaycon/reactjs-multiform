import { createContext, useReducer, useContext, ReactNode } from "react";

type State = {
   currentStep: number;
   name: string;
   level: string;
   email: string;
   github: string;
}
type Action = {
   type: FormActions;
   payload: any;
}
type ContextType = {
   state: State;
   dispatch: (action: Action) => void;
}
type FormProviderProps = {
   children: ReactNode;
}

const initialData: State = {
   currentStep: 0,
   name: '',
   level: 'aprendiz',
   email: '',
   github: ''
}
export enum FormActions {
   setCurrentStep,
   setName,
   setLevel,
   setEmail,
   setGithub
}

const FormContext = createContext<ContextType | undefined>(undefined);

const formReducer = (state: State, action: Action) => {
   switch (action.type) {

      case FormActions.setCurrentStep:
         return { ...state, currentStep: action.payload };
      case FormActions.setName:
         return { ...state, name: action.payload };
      case FormActions.setLevel:
         return { ...state, level: action.payload };
      case FormActions.setEmail:
         return { ...state, email: action.payload };
      case FormActions.setGithub:
         return { ...state, github: action.payload }
      default:
         return state;
   }
}

export const FormProvider = ({ children }: FormProviderProps) => {

   const [state, dispatch] = useReducer(formReducer, initialData);

   const value = {state, dispatch};

   return (
      <FormContext.Provider value={value}>
         {children}
      </FormContext.Provider>
   );
}

export const useForm = () => {

   const context = useContext(FormContext);

   if (context === undefined) {
      throw new Error('useform precisa ser usado dentro do FormProvider');
   }

   return context;
}