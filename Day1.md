# Day 01
Para visualizar a prototipação do projeto [clique aqui](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-(Booster)?node-id=0%3A1)

A seguir, o passo-a-passo da instalação do ambiente de desenvolvimento.

## Iniciando o Node.JS

### Para iniciar um projeto node utilizar:
```
\$ npm init -y 
\$ npm install express
```
## Configurando e Utilizando TypeScript

### Tipagem para o *express* 
```
$ npm install @types/express -D
```
**Obs:** "-D" para dependência de desenvolvimento!

### Instalando o TS
```
$ npm install ts-node -D 
$ npm install typescript -D
```
### Criando arquivo de configuração TS
```
$ npx tsc --init
```
### Gerando JS
```
$ npx ts-node <dir>
```
### Pacote para reiniciar o server automaticamente
```
$ npm install ts-node-dev -D 
$ npx ts-node-dev <dir>
```
## Configurando ts-node-dev no package.json
### Para reiniciar automaticamente o servidor ao salvar arquivos.
Em *package.json*:
```
"scripts": {
  "dev": "ts-node-dev <dir>"
}
```
```
$ npm run dev 
   ou
$ yarn dev 
```
## Iniciando projeto React
```
$ npx create-react-app web --template=typescript
```
**Recomendações:**
* Whimsical: Aplicação web para criação de Fluxogramas

* Figma: Aplicação web para Prototipação / Wireframe

* Notion: To-do List</li>


