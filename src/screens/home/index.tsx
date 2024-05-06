import { InputMask } from '@react-input/mask';

import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Filters, Header, InputGroup, Main, Section } from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button>Nova transação</Button>
          <Button>Nova categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subTitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Início"
                placeholder="dd/mm/yyyy"
              />
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Início"
                placeholder="dd/mm/yyyy"
              />
              {/* <Input variant="dark" label="Início" placeholder="dd/mm/aaaa" />
              <Input variant="dark" label="Fim" placeholder="dd/mm/aaaa" /> */}
            </InputGroup>
          </Filters>
        </Section>
      </Main>
    </>
  );
}
