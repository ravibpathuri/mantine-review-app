# Build Docker Image, Deoploy to local and AWS Elastic Container Registry (ECR)

## Installation

**eficens-review-app** requires [Node.js](https://nodejs.org/) v7+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```

For production environments...

```sh
npm install --production
npm run build
```

## Docker

**eficens-review-app** requires [Docker](https://www.docker.com/products/docker-desktop/) to run.

[Docker Installation Help in Windows](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)

### Create Docker Image

_For developer environment._

```sh
docker build -t eficens-review-app-dev -f Dockerfile.dev .
```

_For production environment._

```sh
docker build -t eficens-review-app -f Dockerfile.prod .
```

### Create Docker containers in local

1. To START eficens-review-app **developer** image in docker container in local

   ```sh
   ./command/deploy.sh dev up
   ```

2. To STOP eficens-review-app **developer** image in docker container in local

   ```sh
   ./command/deploy.sh dev down
   ```

3. To START eficens-review-app **production** image in docker container in local
   ```sh
   ./command/deploy.sh prod up
   ```
4. To STOP eficens-review-app **production** image in docker container in local
   ```sh
   ./command/deploy.sh prod down
   ```

#### Examples

**eficens-review-app** is very easy to install and deploy in a Docker container.

Start Docker in Windows or Mac, then

run below command to START container in local

```sh
./command/deploy.sh dev up
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://localhost:8080/
```

run below command to STOP container

```sh
./command/deploy.sh dev down
```
