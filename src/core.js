const proxy = require('express-http-proxy');
const server = require('express')();
const wordingObject = require('../wording.json');

let spinner;

/**
 * run
 *
 * @since 1.0.0
 *
 * @param {object} runObject
 *
 * @return {void}
 */

function run(runObject)
{
	server.use('/', proxy('api.sendgrid.com',
	{
		https: true,
		proxyReqOptDecorator: proxyReqOpts =>
		{
			proxyReqOpts.headers['Authorization'] = 'Bearer ' + runObject.apiKey;
			proxyReqOpts.headers['Content-Type'] = 'application/json';
			return proxyReqOpts;
		},
		userResDecorator: (proxyRes, proxyResData, userReq, userRes) =>
		{
			userRes.set('Access-Control-Allow-Origin', '*');
			if (userRes.statusCode > 399 && userRes.statusCode < 600)
			{
				spinner.fail(userReq.method + ' ' + userReq.path + ' ' + userRes.statusCode);
			}
			else
			{
				spinner.succeed(userReq.method + ' ' + userReq.path + ' ' + userRes.statusCode);
			}
			return proxyResData;
		}
	}));

	/* listen */

	server.listen(runObject.port, () =>
	{
		spinner.start(wordingObject.listen_on + ' ' + wordingObject.colon + runObject.port);
	});
}

/**
 * construct
 *
 * @since 1.0.0
 *
 * @param {object} injectorObject
 *
 * @return {object}
 */

function construct(injectorObject)
{
	const exports =
	{
		run
	};

	/* handle injector */

	if (injectorObject.spinner)
	{
		spinner = injectorObject.spinner;
	}
	return exports;
}

module.exports = construct;
