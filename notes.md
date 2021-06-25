# Comandos Cli Typeorm
> migration:create -- -n CreateUsers  
`Cria uma Migration com Nome`  
> migration:run  
`Roda todas Migrations`  
> migration:revert  
`Reverte as Migrations`  

## Anotações

Entidade <-> ORM <-> BD
Orm Identifica qual tabela do BD vai ser usada baseado na entidade  
Repositório é o que executa todas as queries usando as entidades.

No @Column() pode ser definido nos parâmetros o nome da coluna no BD caso sue objeto não tenha o mesmo nome das colunas

Server Recebe a Request usando express.json() faz o parse do body, e roteia pro routes, o routes gerência essas rotas e manda pro controller que fica responsável por mandar as infos do body para o service que utiliza o repositório custom com uma entity mapeada

Interface fica no Service

Server -> Router -> Controller -> Service -> Repository(Entity)

No Service o Create usa a Entidade setada no repositorio