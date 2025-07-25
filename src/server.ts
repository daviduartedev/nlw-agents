import fastify from "fastify";
import { serializerCompiler, type ZodTypeProvider, validatorCompiler } from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173'
})

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: env.PORT }).then(() => {
    console.log(`Port: ${process.env.PORT}`)
    console.log('HTTP server is Running!')
})
