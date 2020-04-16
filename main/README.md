![Logo](logo.png)

# GoBarber

> Book barber service 💈.

Separate projects are available below:

* Back-end: [https://github.com/diegomais/gobarber-backend](https://github.com/diegomais/gobarber-backend)
* Front-end: [https://github.com/diegomais/gobarber-web](https://github.com/diegomais/gobarber-web)
* Mobile: [https://github.com/diegomais/gobarber-mobile](https://github.com/diegomais/gobarber-mobile)

## Getting Started

These instructions will get you a copy of the full project up and running on your local machine for development and testing purposes.

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system.

* **Npm** is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

* **Yarn** is a package manager built by Facebook Team and seems to be faster than npm in general.  [Download Yarn](https://yarnpkg.com/en/docs/install)

* **React Native CLI** is a package that contains tools and helpers for React Native projects in form of a command line tool.  [Download React Native CLI](https://facebook.github.io/react-native/docs/getting-started)

### Setting up Databases and Services

The project uses [PostgreSQL](https://www.postgresql.org), [MongoDB](https://www.mongodb.com) and [Redis](https://redis.io).

We recommend use [Docker](https://www.docker.com) to install and run the databases and services above.

1. Install [Docker Desktop](https://www.docker.com/get-started).
2. Start a PostgreSQL instance:
`docker run --name gobarber-pg -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`
3. Start a MongoDB instance:
`docker run --name gobarber-mongo -p 27017:27107 -d mongo`
4. Start a Redis instance:
`$ docker run --name gobarber-redis -p 6379:6379 -d redis`

### Back-end

* To download the project follow the instructions bellow:

```
1. git clone https://github.com/diegomais/gobarber-backend.git
2. cd gobarber-backend
```

* Install the dependencies and start the server:

```
3. yarn install
4. yarn dev
```

or

```
3. npm install
4. npm dev
```

### Front-end

* To download the project follow the instructions bellow:

```
1. git clone https://github.com/diegomais/gobarber-frontend.git
2. cd gobarber-frontend
```

* Install the dependencies and start the project:

```
3. yarn install
4. yarn start
```

or

```
3. npm install
4. npm start
```

### Mobile

* To download the project follow the instructions bellow:

```
1. git clone https://github.com/diegomais/gobarber-mobile.git
2. cd gobarber-mobile
```

* Start the application:

```
3. react-native run-ios
```

## Author

Diego Mais
* [diegomais@live.com](mailto:diegomais@live.com)
* [diegomais.github.io](http://diegomais.github.io)
* [github.com/diegomais](http://github.com/diegomais)
* [linkedin.com/in/diegomais](http://linkedin.com/in/diegomais)

 ## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
