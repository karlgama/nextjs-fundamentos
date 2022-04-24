import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientPorCodigo() {
    const router = useRouter()
    return(
        <Layout titulo="Navegacao dinamica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}
