module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ebcb64ee452a8a06f7b7498ffb465a8e'),
  },
});
