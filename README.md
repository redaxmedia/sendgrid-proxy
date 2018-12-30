SendGrid Proxy
==============

> A proxy server to unleash the SendGrid API without the need of user authentication.

[![Build Status](https://img.shields.io/travis/redaxmedia/sendgrid-proxy.svg)](https://travis-ci.org/redaxmedia/sendgrid-proxy)
[![NPM Version](https://img.shields.io/npm/v/sendgrid-proxy.svg)](https://npmjs.com/package/sendgrid-proxy)
[![License](https://img.shields.io/npm/l/sendgrid-proxy.svg)](https://npmjs.com/package/sendgrid-proxy)
[![Deploy Heroku](https://img.shields.io/badge/deploy-heroku-7056bf.svg)](https://heroku.com/deploy?template=https://github.com/redaxmedia/sendgrid-proxy)


Preview
-------

![Terminal Session](https://cdn.rawgit.com/redaxmedia/media/master/sendgrid-proxy/terminal-session.svg)


Installation
------------

Clone the repository:

```
git clone https://github.com/redaxmedia/sendgrid-proxy.git
```

Install the dependencies:

```
npm install
```


Setup
-----

Create a `.env` file to define your environment variables:

```
SENDGRID_API_ID=
PORT=
```


Usage
-----

```
bin/sendgrid-proxy
```


Deployment
----------

Trigger [Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/redaxmedia/sendgrid-proxy) and fill out the form.
