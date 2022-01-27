module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '55af5c6058e17c865836328f610406f0'),
  },
});
