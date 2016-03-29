require('../src/libs/flickrapi.js')

api_key = 'e8ce1c4f5f2f856ccda1116d66ad702a'

class FlickrService
  constructor: () ->
    @flickr = new Flickr {
      api_key: api_key,
      format: 'json'
    }

  getImages: (query, callback) ->
    @flickr.photos.search {
      text: query,
      extras: 'url_o'
    }, (error, response) ->
      callback response

module.exports = new FlickrService();