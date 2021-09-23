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

# Endpoints



Booking:
--------

Get bookings
```
GET /booking
```

Create new booking
```
POST /booking

Params:

date: 2019-09-02
time: 16
name: "Lorem Ipsum"
mail: "lorem@ipsum.com"
guests: 5
```

Delete a booking
```
DELETE /booking/:id
```

Restaurant Open/Close Time:
---------------------------

Get restaurant time
```
GET /timerange
```

Set restaurant time
```
POST /timerange

Params:

open: 8
close: 20
```

Tables:
-------

Get tables
```
GET /tables
```

Create table
```
POST /tables
```

Delete table
```
DELETE /tables/:id
```