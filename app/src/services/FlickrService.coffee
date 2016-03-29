FlickrGateway = require('../gateways/FlickrGateway')
Image = require('../models/Image')

class FlickrService
  getImages: (query) ->
    FlickrGateway.getImages query, @processResponse

  processResponse: (response) =>
    photos = response.photos.photo.map (photo) -> new Image(photo)
    console.log photos.filter (photo) -> photo.isValid()

instance = null
get = () ->
  instance ?= new FlickrService();

module.exports = get();