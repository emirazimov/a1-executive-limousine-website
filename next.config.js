/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://example.com/myaccount/",
  },
}
