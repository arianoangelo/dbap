module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'fcb8271865e6bf3203a93ae9e8e9fa3e'),
    },
  },
});
