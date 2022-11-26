import * as C from './styles';

type Props = {
   children: React.ReactNode;
}

export const Footer =({children}: Props)=>{

   return (
      <C.Footer>
         <span>- Desenvolvido por <a href="https://github.com/marquesmaycon" target='_blank'>Maycon H. Marques</a> durante o curso de ReactJS da <a href="https://b7web.com.br/fullstack/" target='_blank'>B7Web</a>.</span>
         {children}
      </C.Footer>
   );
}