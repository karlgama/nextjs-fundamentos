import Layout from "../components/Layout";
import styles from "./Estiloso.module.css";

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de css modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS módulos</h1>
      </div>
    </Layout>
  );
}
