# Use Node.js 23.0.0 como imagem base
FROM node:23.0.0 AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o yarn.lock para o contêiner
COPY package.json yarn.lock ./

# Instale as dependências com Yarn
RUN yarn install

# Copie o restante do código
COPY . .

# Crie o build da aplicação
RUN yarn build

# Use Nginx para servir a aplicação
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
