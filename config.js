const env = process.env;
const DEFAULTS = {
    PORT: 8080,
}

const config = {
    port: env.PORT || DEFAULTS.PORT
};

export default config;