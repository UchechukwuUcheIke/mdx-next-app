import createMDX from '@next/mdx'


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
    }
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
    },
})
   
  // Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)

