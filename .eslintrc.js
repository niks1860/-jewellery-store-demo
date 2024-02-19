module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'plugin:storybook/recommended'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
}
