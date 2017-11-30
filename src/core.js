const proxy = require('express-http-proxy');
const server = require('express')();
const wordingArray = require('../wording.json');

let spinner;

/**
 * run
 *
 * @since 1.0.0
 *
 * @param runArray array
 */

function run(runArray)
{
	server.use('/', proxy('api.sendgrid.com',
	{
		https: true,
		proxyReqOptDecorator: proxyReqOpts =>
		{
			proxyReqOpts.headers['Authorization'] = 'Bearer ' + process.env.SENDGRID_API_ID;
			return proxyReqOpts;
		},
		userResDecorator: function(proxyRes, proxyResData, userReq, userRes)
		{
			if (userRes.statusCode === 200)
			{
				spinner.pass(userReq.method + ' ' + userReq.path + ' ' + userRes.statusCode);
			}
			else
			{
				spinner.fail(userReq.method + ' ' + userReq.path + ' ' + userRes.statusCode);
			}
			return proxyResData;
		}
	}));

	/* listen */

	server.listen(runArray.port, () =>
	{
		spinner.start(wordingArray.listen_on + ' ' + wordingArray.colon + runArray.port);
	});
}

/**
 * construct
 *
 * @since 1.0.0
 *
 * @param dependency object
 *
 * @return object
 */

function construct(dependency)
{
	const exports =
	{
		run: run
	};

	/* inject dependency */

	if (dependency.spinner)
	{
		spinner = dependency.spinner;
	}
	return exports;
}

module.exports = construct;