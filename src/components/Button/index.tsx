import * as C from './styles'
import { Link } from "react-router-dom";

type Props = {
   text: string;
   path: string;
   isDisabled?: boolean;
   onClick?: () => void
}

export const Button = ({ text, path, isDisabled, onClick }: Props) => {

   return (
      <Link to={path}>
         <C.Button onClick={onClick} disabled={isDisabled}>{text}</C.Button>
      </Link>
   );
}