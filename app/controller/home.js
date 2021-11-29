'use strict';

const Controller = require('egg').Controller;
const { spawn } = require('child_process');
const fs = require('fs');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const out = fs.openSync(`./file/out.log`, 'a');
    const err = fs.openSync(`./file/err.log`, 'a');
    spawn('npm', ['run', 'build'], {
      cwd: `./file`,
      detached: true,
      stdio: [ 'ignore', out, err ],
    })
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
