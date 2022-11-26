import * as C from './styles'

type Props = {
   title: string;
   description: string;
   icon: string;
   selected: boolean;
   onSelect: () => void
}
export const SelectOption = ({ title, description, icon, selected, onSelect }: Props) => {
   return (
      <C.Container onClick={onSelect} selected={selected}>
         <C.Icon>{icon}</C.Icon>
         <C.Info>
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>
         </C.Info>
      </C.Container>
   );
}