SendGrid Proxy
==============

> A dead simple HTTP proxy to unleash the SendGrid API.

[![Build Status](https://img.shields.io/github/workflow/status/redaxmedia/sendgrid-proxy/ci.svg)](https://github.com/redaxmedia/sendgrid-proxy/actions?query=workflow:ci)
[![NPM Version](https://img.shields.io/npm/v/sendgrid-proxy.svg)](https://npmjs.com/package/sendgrid-proxy)
[![License](https://img.shields.io/npm/l/sendgrid-proxy.svg)](https://npmjs.com/package/sendgrid-proxy)
[![Deploy Heroku](https://img.shields.io/badge/deploy-heroku-7056bf.svg)](https://heroku.com/deploy?template=https://github.com/redaxmedia/sendgrid-proxy)


Installation
------------

```
npm install sendgrid-proxy
```


Setup
-----

Create a `.env` file to define your environment variables:

```
SENDGRID_API_ID=
PORT=3000
```


Usage
-----

Serve local HTTP proxy:

```
sendgrid-proxy
```

Browse your working copy:

```
http://localhost:3000/v3
```


Deployment
----------

Trigger [Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/redaxmedia/sendgrid-proxy) and fill out the form.
