import { Banner } from "./components/Banner";
import { Input } from "./components/InputsTxt";

function App() {
  return (
    <div className="App">
      <Banner />
      <Input name="Nome" placeholder="Digite seu nome" />
      <Input name="Cargo" placeholder="Digite seu cargo" />
      <Input name="Imagem" placeholder="Informe o endereço da imagem" />
    </div>
  );
}

export default App;
