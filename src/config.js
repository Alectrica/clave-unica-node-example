const {
  PORT = 5000,
  NODE_ENV = 'production',
  DEBUG_LEVEL,

  SECRET,

  CLAVE_UNICA_CLIENT_ID,
  CLAVE_UNICA_CLIENT_SECRET,
  CLAVE_UNICA_REDIRECT_URI,

  SSL_CERT_PATH,
  SSL_KEY_PATH,
} = process.env;

export {
  PORT,
  NODE_ENV,
  DEBUG_LEVEL,

  SECRET,

  CLAVE_UNICA_CLIENT_ID,
  CLAVE_UNICA_CLIENT_SECRET,
  CLAVE_UNICA_REDIRECT_URI,

  SSL_CERT_PATH,
  SSL_KEY_PATH,
};