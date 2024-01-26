/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  siteUrl: dev
    ? `${process.env.NEXT_PUBLIC_APP_URL}`
    : `${process.env.NEXT_PUBLIC_APP_URL}`,
  generateRobotsTxt: true,
};
