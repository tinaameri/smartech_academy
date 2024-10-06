module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor-fork"
    ,
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
