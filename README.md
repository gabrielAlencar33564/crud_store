# crud_store
Esse projeto é um crud simples de clientes, tais quais poderão cadastrar, atualizar, listar ou deletar os contatos desejados.

Para seu desenvolvimento, foi utilizado a linguagem `Typescript` com seu poderoso framework `Node.js com o Express`.

<h2 align ='center'> Rodando a aplicação localmente: </h2>
### Primeiramente...
1 - Copie a chave SSH clicando no botão "Code" logo acima.
2 - Após ter feito a copia da chave SSH, abra seu terminal e digite o comando: `git clone` (ainda não aperte enter), mais o clone da "chave SSH".

### Após clonar o repositório...
3 - No terminal bash do projeto, rode o comando `yarn`, para que assim possa ser instalada todas as dependências.
4 - Quando todas as dependencias estiverem instaladas, crie um arquivo `.env` na "raiz" do projeto.
5 - Faça um cópia de tudo oque estiver no arquivo `.env.example` e cole no arquivo `.env`. Não esqueca de preencher suas informações no arquivo `.env`.

### Depois de preencher o arquivo .env...
6 - Vá para o terminal bash do projeto e rode a seguinte cadeia de comandos:

(obs: não se esqueça de criar seu banco de dados antes de fazer esse procedimento)

- primeiro - `yarn typeorm migration:create src/migrations/initialMigration`
- segundo - `yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts`
- terceiro - `yarn typeorm migration:run -d src/data-source.ts`
com esses três comandos será possivel criar as imagens das entidades do banco de dados, montar essas imagens e roda-las.

### terminando de popular o banco de dados...
7 - Rode o comando `yarn dev`, que irá abrir o servidor local para se utilizar da api. 


<h2 align ='center'> Funcionamento da api: </h2>
`post(https://localhost:3000/products)

`REQUEST`
```json
{
  "name": "Blusa",
  "category": "Roupas",
  "quantity": 100
}
```

`RESPONSE`
```json
{
	"name": "Blusa",
	"quantity": 100,
	"category": "Roupas",
	"deleted_at": "0000-00-00T00:00:00.0000",
	"id": "b3f1148f-4277-4030-b40c-6e129edffaf5",
	"status": "ACTIVE",
	"created_at": "2023-02-14T20:27:57.590Z",
	"updated_at": "2023-02-14T20:27:57.590Z"
}
```

`get(https://localhost:3000/products)`

`RESPONSE`
```json
[
	{
		"id": "b3f1148f-4277-4030-b40c-6e129edffaf5",
		"name": "Blusa",
		"status": "ACTIVE",
		"quantity": 100,
		"created_at": "2023-02-14T20:27:57.590Z",
		"updated_at": "2023-02-14T20:27:57.590Z",
		"deleted_at": "0000-00-00T00:00:00.0000",
		"category": {
			"id": "cefad6b0-b924-4428-b529-8a8e9efb1ab7",
			"name": "Roupas"
		}
	}
]
```

`get(https://localhost:3000/products/:id)`

`RESPONSE`
```json
{
	"id": "b3f1148f-4277-4030-b40c-6e129edffaf5",
	"name": "oi",
	"status": "ACTIVE",
	"quantity": 100,
	"created_at": "2023-02-14T20:27:57.590Z",
	"updated_at": "2023-02-14T20:27:57.590Z",
	"deleted_at": "0000-00-00T00:00:00.0000",
	"category": {
		"id": "cefad6b0-b924-4428-b529-8a8e9efb1ab7",
		"name": "teste"
	}
}
```

`patch(https://localhost:3000/products/:id)`

`REQUEST`
```json
{
	"name": "Brinco",
	"category": "Acessórios"
}
```

`RESPONSE`
```json
{
	"id": "b3f1148f-4277-4030-b40c-6e129edffaf5",
	"name": "Brinco",
	"status": "ACTIVE",
	"quantity": 100,
	"created_at": "2023-02-14T20:27:57.590Z",
	"updated_at": "2023-02-14T20:27:57.590Z",
	"deleted_at": "0000-00-00T00:00:00.0000",
	"category": "Acessórios"
}
```

`delete(https://localhost:3000/products/:id)`

```json
{
  "..."
  "status": "INACTIVE",
  "..."
}
```
