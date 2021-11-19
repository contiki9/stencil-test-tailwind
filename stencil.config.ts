import { Config } from '@stencil/core';
import tailwind from 'stencil-tailwind-plugin';
export const config: Config = {
  namespace: 'stencil-test-tailwind',
  plugins: [tailwind({ enablePurge: false })],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
