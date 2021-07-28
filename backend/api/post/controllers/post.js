'use strict';
const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  import: async ctx => {
    const {data} = await axios.get('https://dbap.pt/wp-json/wp/v2/posts?per_page=100&page=4');
    const posts = await Promise.all(data.map(post => new Promise(async (resolve, reject) => {
      const {
        title: {rendered: titleRendered},
        slug,
        content: {rendered: contentRendered},
        date_gmt,
        featured_image_src
      } = post;
      try {
        const downloaded = await strapi.config.functions.download(featured_image_src);

        const fileId = await strapi.config.functions.upload(downloaded);
        const postData = {
          title: titleRendered,
          content: contentRendered,
          slug,
          image: fileId.id,
          date: date_gmt
        };
        const created = await strapi.services.post.create(postData);
        resolve(created)
      } catch (err) {
        reject(err)
      }
    })));

    ctx.send(posts);
  }
};
