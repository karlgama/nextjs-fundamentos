import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
    }}>
      <Navegador destino="/estiloso" texto="estiloso" />
      <Navegador destino="/exemplo" texto="exemplo" cor="crimson"/>
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
      <Navegador destino="/cliente/sp/123" texto="Navegação #02" cor="blue"/>
      {Math.random()}
    </div>
  );
}
