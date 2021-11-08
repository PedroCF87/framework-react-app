import PageContent from '../components/pageContent'
import { getData } from '../src/services/getData'
const errors = require('../src/constants/error')
const activePage = "Postagens"

const Index = props => <PageContent appName={props.appName} activePage={activePage} itens={props.itens} error={props.error} />

export async function getServerSideProps() {
  const appName = process.env.APP_NAME ? process.env.APP_NAME : null
  try {
    if (appName === null) return { props: { ...errors.contentApiError, appName: "?" } }

    const itens = await getData({ endpoint: 'posts' })

    return { props: { appName, itens } }
  } catch (error) {
    return { props: { ...errors.postNotFound, appName } }
  }
}

export default Index
