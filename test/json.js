const test = require('tape')
const join = require('path').join
const browserify = require('browserify')

const transform = require('../transform')

test('JSON files', function (t) {
  t.plan(2)

  browserify()
    .add(join(__dirname, 'fixtures', './example.json'))
    .transform(transform)
    .bundle(function (err, code) {
      if (err) return t.end(err)
      code = String(code)

      t.assert(code.includes('same'), 'preserves key')
      t.assert(code.includes('as it ever was'), 'preserves value')
    })
})
