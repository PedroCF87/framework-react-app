import PageHead from '../head'
import Navbar from '../navbar'
import Footer from '../footer'
import ListItens from '../listItens'

const PageContent = props =>  {
    if (props.error) return (
        <div className="container-fluid bg-default page">
          <PageHead appName={props.appName} page={props.activePage} />
          <Navbar appName={props.appName} activePage={props.activePage} />
          <h3>Erro ao buscar as {props.activePage}</h3>
          <span>{props.error && props.error.message ? props.error.message : 'Erro desconhecido.' }</span>
          <Footer />
          <div className="clearfix p-1"></div>
        </div>
      )
    const { itens, activePage } = props
    return (
      <div className="container-fluid bg-default page">
        <PageHead appName={props.appName} page={activePage} />
        <Navbar appName={props.appName} activePage={activePage} />
        <h1>{activePage}</h1>
        <ListItens itemName={activePage} itens={itens ? itens : null} />
        <Footer />
        <div className="clearfix p-1"></div>
      </div>
    )
}

export default PageContent
