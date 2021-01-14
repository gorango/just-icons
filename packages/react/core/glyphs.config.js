module.exports = {
  generate: {
    target: 'react',
    set: 'node_modules/@glyphs/core',
    output: 'src',
    defaultVariant: 'path',
    transform: {
      replaceColor: ['path', 'bold', 'duo', 'outline'],
      removeStroke: ['path', 'duo', 'outline']
    }
  }
}