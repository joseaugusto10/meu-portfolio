# Use a imagem base com Node.js 23 e Yarn
FROM node:23

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json, yarn.lock
COPY package.json yarn.lock ./

# Instale as dependências usando Yarn
RUN yarn install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta onde o React vai rodar (porta padrão: 3000)
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento com Yarn
CMD ["yarn", "start"]
