FROM node:18
# Create app directory
WORKDIR /api-talento
COPY . .
RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
EXPOSE 3000
CMD [ "node", "dist/app.js" ]