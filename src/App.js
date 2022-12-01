import Logo from "./componentes/Logo";
import Perguntas from "./componentes/Perguntas";
import Rodape from "./componentes/Rodape";


export default function App() {
  return (
    <div className="screen-container">
      <Logo/>
      <Perguntas/>
      <Rodape/>
    </div>
  );
}
