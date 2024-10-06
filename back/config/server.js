module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  //url: env('SERVER_URL', ''),
  //url: "https://affilio.ir/api"
  //url: process.env.NODE_ENV === 'production' ? env('SERVER_URL', '') : env('LOCAL_URL', '')
  //url:env('URL', '/')
});
