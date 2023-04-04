const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const chalk = require('chalk');
const app = express();
const port = Number(process.env.npm_package_config_port);
const prefix = '/api';

const colorCodes = {
  7: 'magenta',
  5: 'red',
  4: 'yellow',
  3: 'cyan',
  2: 'green',
  1: 'green',
  0: 'yellow',
};

function printRoute(router, filename) {
  console.info('-'.repeat(21), filename, '-'.repeat(21));
  router.stack.forEach(function ({ route }) {
    if (!route) return;
    const method = route.stack[0].method;
    console.info(
      method.toUpperCase() + '\t' + prefix + '/' + filename + route.path,
    );
  });
  console.info('-'.repeat(50));
}

fs.readdirSync(`${__dirname}/routers`).forEach(async (file) => {
  const filename = file.split('.')[0];
  const routers = await import(`${__dirname}/routers/${file}`);
  printRoute(routers.default, filename);
  app.use(prefix + '/' + filename + '/', routers.default);
});

app.use(
  morgan(function (tokens, req, res) {
    const s = (tokens.status(req, res) / 100) | 0;
    const color = Object.prototype.hasOwnProperty.call(colorCodes, s)
      ? colorCodes[s]
      : 0;
    return [
      chalk.gray('<--'),
      chalk.bold(tokens.method(req, res)),
      chalk.cyan(tokens.url(req, res)),
      chalk[color](tokens.status(req, res)),
      chalk.gray(tokens['response-time'](req, res) + 'ms'),
    ].join(' ');
  }),
);

app.listen(port, () => {
  console.log(`start success !! listening on port ${port}`);
});
