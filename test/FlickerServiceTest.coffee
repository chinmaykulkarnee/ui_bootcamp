proxyquire = require('proxyquire').noCallThru()
FlickerService = require '../app/src/services/FlickerService'

describe 'Flicker service to get images', () ->
  it 'should return all the images with keyword sunrise', () ->
    expect(FlickerService.getImages 'sunrise').toBe('')