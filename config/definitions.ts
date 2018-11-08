import { resolve } from 'path'
import { readFileSync } from 'fs'

const root = resolve(__dirname, '..')
const src = resolve(root, 'src')

export const paths = {
  root,
  appSrc: src,
  reactIndex: resolve(src, 'index.tsx'),
  packageJson: resolve(root, 'package.json'),
  //   testDir: resolve(root, 'test'),
  tsconfig: resolve(root, 'tsconfig.json'),
  htmlIndex: resolve(root, 'static', 'index.html'),
  staticRessources: resolve(root, 'static')
}

export const variables = {
  version: JSON.parse(readFileSync(resolve(paths.packageJson), 'UTF-8'))
    .version,
  includedRessourcePattern: /\.(woff|woff2|eot|ttf|svg|png|ico|jpg|css|pdf)$/
}

export const resolver = {
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.pdf'],
  alias: {
    src: paths.appSrc
  }
}

export const production = {
  removeComments: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true,
  removeRedundantAttributes: true,
  removeAttributeQuotes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true
}
