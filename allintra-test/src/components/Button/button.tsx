import * as S from "./style";

interface ButtonProps {
  onClick: () => void;
  title: string;
}

export const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <S.StyledButton onClick={onClick} type="button">
      {title}
    </S.StyledButton>
  );
};
