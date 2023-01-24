import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";

/** Metodo HTTP: 
       Get:  Sempre quando eu for buscar alguma informações(dados)
       Post: quando vai criar alguma coisa.
       Put: vai alterar algum recurso por completo
       Patch: quando eu vou alterar uma informaçao especifica de algum recurso.
       Delete: quando eu vou deletar algum recurso dentro do meu back-end
*/

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running')
})