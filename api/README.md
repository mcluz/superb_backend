Superb - Backend Booking System
===============================

# Requirements

- Node >= 14

# Get Started

Clone the project:

```
$ git clone git@github.com:mcluz/superb_backend.git
```

Initialize docker environment:

```
docker-compose up -d
```

# Installing

Install dependencies:

```
$ cd api
$ npm ci
```

Start webserver:

```
$ node . http
```

Start SQS Consumer:

```
$ node . consumer
```

Check codestyle:

```
$ npm nun lint
```

Run integration tests:

```
npm run test
```