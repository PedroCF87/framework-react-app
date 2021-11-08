const ListItens = props =>   {
    if (!props.itens || props.itens.length === 0) {
        return (
          <div className="container bg-default page">
            <h3>Nenhum registro encontrado</h3>
            <span>A API de {props.itemName ? props.itemName : '?' } não retornou nenhum resultado.</span>
          </div>
        )
    }
    const { itens } = props
    const itensContent = itens.map(item => {
        const { id, title, userName, userEmail, body = null, completed = null } = item
        let itemLabel = '?'
        if (props.itemName === 'Postagens') itemLabel = 'Publicado por'
        if (props.itemName === 'Álbuns') itemLabel = 'Criado por'
        if (props.itemName === 'TO DOs') itemLabel = 'Responsável'

        return  <div key={id} className="col-12 col-md-6 col-xl-4 mb-3">
                    <div key={id} className="card">
                        <div className="card-body">
                            {completed !== null && <span class={completed ? "badge badge-success mb-2" : "badge badge-danger mb-2" }>
                                {completed ? "Tarefa concluída" : "Pendente"}
                            </span>}

                            <h4 className="card-title">{title}</h4>

                            {body && <p className="card-subtitle mb-2 text-muted">{body}</p>}

                            {userName && <a href={"mailto:"+userEmail} className="card-link btn btn-light">
                                <small>{itemLabel}</small> 
                                <strong className="d-inline-block ml-2">
                                    {userName}
                                </strong>
                            </a>}
                        </div>
                    </div>
                </div>
    })
    return (
        <div className="row">
            {itensContent}
        </div>
    )
}

export default ListItens
