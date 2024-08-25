/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '5000', // Specify the port if necessary
          pathname: '/public/**' // Adjust the path as needed
        },
        // Add more patterns here if needed
      ],
    },
  };
  
  export default nextConfig;
  