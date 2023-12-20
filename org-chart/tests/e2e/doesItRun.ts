describe('Does It Run', function () {
  before((browser) => {
    browser.init()
  })

  it('checks that it loads', function () {
    browser.assert.textContains('h1', 'Org Chart')
  })

  after((browser) => browser.end())
})
