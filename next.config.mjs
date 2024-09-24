/** @type {import('next').NextConfig} */


import withVideos from 'next-videos'
import withPWA from 'next-pwa'
const nextConfig = {}

const Config = withVideos(
    withPWA({
      pwa:{
        dest:'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development'
      } 
    }),
    nextConfig
    )

export default Config;
