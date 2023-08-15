# Build The React Code 
FROM node:18-alpine AS builder

WORKDIR /app/react-boilerplate

COPY package.json ./ 
COPY yarn.lock ./

RUN yarn install 

COPY src ./src
COPY public ./public

COPY .babelrc ./
COPY webpack.prod.config.js ./
COPY ./constant.js ./

COPY postcss.config.js ./
COPY tailwind.config.js ./

RUN yarn run build


FROM nginx:latest

WORKDIR /app/react-boilerplate

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/react-boilerplate/build /app/react-boilerplate/build