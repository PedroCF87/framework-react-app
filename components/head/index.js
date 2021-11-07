import Head from 'next/head'
const PageHead = props =>   <Head>
                                <title>{props.page} | {props.appName}</title>
                                <meta name="description" content="Página de postagens carregadas da API 'jsonplaceholder.typicode.com'." />
                            </Head>

export default PageHead
