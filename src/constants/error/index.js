module.exports = {
    contentApiError: {
      error: {
        code: 0,
        message: 'Erro ao buscar o conteúdo. \nAs variáveis de ambiente não estão configuradas.'
      }
    },

    // Post Errors: 1 - 9
    postNotFound: {
      error: {
        code: 1,
        message: 'Nenhuma postagem encontrada.'
      }
    },

    // Album Errors: 10 - 19
    albumNotFound: {
        error: {
          code: 10,
          message: 'Nenhum álbum encontrado.'
        }
    },

      // Post Errors: 20 - 29
    ToDosNotFound: {
        error: {
          code: 20,
          message: 'Nenhuma To Do encontrado.'
        }
    },
  }
  