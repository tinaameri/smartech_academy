module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor-fork",
  },
  graphql: {
    config: {
      defaultLimit: 100, 
      maxLimit: 100, 
  }
  },
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },  
})
