import { Container } from './styles';

type TitleProps = {
  title: string;
  subTitle: string;
};

export function Title({ title, subTitle }: TitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{subTitle}</span>
    </Container>
  );
}
