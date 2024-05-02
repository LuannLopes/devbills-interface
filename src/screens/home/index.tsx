import { Logo } from '../../components/logo';
import { Header } from './styles';

export function Home() {
  return (
    <Header>
      <Logo />

      <div>
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
    </Header>
  );
}
