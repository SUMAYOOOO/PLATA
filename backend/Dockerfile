FROM node:18-alpine

WORKDIR /usr/src/app

# Copiar package.json
COPY package*.json ./
RUN npm install

# Copiar todo el código
COPY . .

# Generar Prisma Client
RUN npx prisma generate

# Compilar TypeScript
RUN npm run build

EXPOSE 3001

# Usar start:prod en lugar de start:dev para producción
CMD ["npm", "run", "start:prod"]
