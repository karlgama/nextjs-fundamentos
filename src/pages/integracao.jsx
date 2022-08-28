import Layout from "../components/Layout";
import { useState } from "react";

export default function Integracao() {
  const [client, setClient] = useState({});
  const [codigo, setCodigo] = useState({});

  async function obterClient() {
    const res = await fetch(`http://localhost:3000/api/clients/123`)
    const dados = await res.json()
    setClient(dados)
    
    //   .then((res) => res.json())
    //   .then((dados) => setClient(dados));
  }

  return (
    <Layout>
      <div>
        <input
          onChange={(e) => setCodigo(e.target.value)}
          type="number"
          value={codigo}
        />
        <button onClick={obterClient}>Obter cliente</button>
      </div>
      <ul>
        <li>código: {client.id}</li>
      </ul>
    </Layout>
  );
}
