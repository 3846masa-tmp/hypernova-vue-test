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
