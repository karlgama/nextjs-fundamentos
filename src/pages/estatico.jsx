import Layout from '../components/Layout'
// gera um conteudo estatico por exemplo de uma api que n muda com frequencia
export async function getStaticProps() {
    // pode ser usado para chamar uma api uma vez q é assincrona
    return {
        props:{
            numero: Math.random()
        }
    }
}
// getServerSideProps gera um novo conteudo a cada request
export default function Estatico(props){
    return (
        <Layout tituto="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}