FROM node:18-alpine

WORKDIR /app

# Copiar package.json de la raíz
COPY package*.json ./

# Instalar todas las dependencias
RUN npm install

# Instalar TypeScript globalmente
RUN npm install -g typescript

# Copiar todo el código
COPY . .

# Compilar desde la raíz (no hacer cd backend)
RUN npm run build

# Generar Prisma Client
RUN npm run prisma:generate

EXPOSE 3000

CMD ["npm", "start"]
