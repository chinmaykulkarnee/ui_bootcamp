handleBars = require 'handlebars'
$ = require 'jquery'
FlickrService  = require '../src/services/FlickrService'
#FlickrService  = require '../src/not_FlickrService'

#class ImageViewer
#  @viewImages: (images) ->
#    template = handleBars.compile($("#results-view").html())
#    $("body").html(template(images: images))

FlickrService.getImages 'sunrise', (images) ->
  viewImages = (images) ->
    template = handleBars.compile($("#results-view").html())
    $("body").html(template(images: images))

  viewImages images