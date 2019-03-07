# hypernova-vue-test

## Setup

```bash
cp .example.env .env
sed -i .env -e "s#POSTGRES_PASSWORD=.*#POSTGRES_PASSWORD=$(openssl rand -base64 32)#"
```

## Develop

```bash
docker-compose up --build
# Also, open http://localhost:8000
```

## Publish

```bash
(
  cd docker;
  cp .example.production.env .production.env
  sed -i .production.env -e "s#POSTGRES_PASSWORD=.*#POSTGRES_PASSWORD=$(openssl rand -base64 32)#"
)
docker-compose -f docker/docker-compose.yml up -d --build
```

## Links

- [airbnb/hypernova-ruby: Ruby client for Hypernova.](https://github.com/airbnb/hypernova-ruby)
- [toptal/webpack-assets: Webpack Assets for Rails](https://github.com/toptal/webpack-assets)
- [Introduction | Vue Loader](https://vue-loader.vuejs.org/)

## License

(c) 2019 3846masa

[MIT License](./LICENSE)
