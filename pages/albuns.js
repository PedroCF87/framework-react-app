import PageContent from '../components/pageContent'
import { getData } from '../src/services/getData'
const errors = require('../src/constants/error')
const activePage = "Álbuns"

const Albuns = props => <PageContent appName={props.appName} activePage={activePage} itens={props.itens} />

export async function getServerSideProps() {
  const appName = process.env.APP_NAME
  try {
    const itens = await getData({ endpoint: 'albums' })

    return { props: { appName, itens } }
  } catch (error) {
    return { props: { ...errors.postNotFound, appName } }
  }
}

export default Albuns
