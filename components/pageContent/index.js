import PageHead from '../head'
import Navbar from '../navbar'
import ListItens from '../listItens'

const PageContent = props =>  {
    if (!props.itens) {
      return (
        <div className="container bg-default page">
          <PageHead appName={props.appName} page={props.activePage} />
          <Navbar appName={props.appName} activePage={props.activePage} />
          <h3>Erro ao buscar as {props.activePage}</h3>
          <span>{props.error && props.error.message ? props.error.message : 'Erro desconhecido.' }</span>
        </div>
      )
    }
    const { itens, activePage } = props
    return (
      <div className="container-fluid bg-default page">
        <PageHead appName={props.appName} page={activePage} />
        <Navbar appName={props.appName} activePage={activePage} />
        <h1>{activePage}</h1>
        <ListItens itemName={activePage} itens={itens ? itens : null} />
      </div>
    )
}

export default PageContent
