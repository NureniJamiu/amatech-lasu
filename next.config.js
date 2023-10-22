/** @type {import('next').NextConfig} */

const { parsed: localEnv } = require("dotenv").config();
const nextConfig = {
  env: localEnv,
};

module.exports = nextConfig;
