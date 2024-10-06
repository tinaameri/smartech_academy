module.exports = {
  apps: [
    {
      name: "affilio_backend",
      script: "npm",
      args: "start",

      instances: "1",
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",

      // output: "./pm2out.log",
      // error: "./pm2error.log",
      // log: "./pm2combined.outerr.log",
      log_type: "json",
      log_date_format: "DD-MM-YYYY",
      merge_logs: true,

      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],


  deploy : {
    production : {
      user : 'root',
      host : '159.69.209.246',
      ref  : 'origin/cms_deploy',
      repo : 'git@g.smartech.ir:adtech/adtech-affilio-website.git',
      path : '/var/www/affilio/',
      // 'post-setup': 'pwd',
      // 'pre-deploy-local': "echo 'This is a local executed command' && pwd",
      // 'post-deploy' : 'pwd && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      // 'pre-setup': ''
      "pre-setup" : "echo 'PRE_SETUP: commands or local script path to be run on the host before the setup process starts'",
      "post-setup": "echo 'POST_SETUP: commands or a script path to be run on the host after cloning the repo'",
      "pre-deploy-local" : "echo 'PRE_DEPLOY_LOCAL'",
      "pre-deploy" : "echo 'PRE_DEPLOY'",
      "post-deploy" : "./deploy",
    }
  }
};
