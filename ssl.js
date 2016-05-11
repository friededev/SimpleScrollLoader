window.SimpleScrollLoader = (function () {
  var container = document.getElementById('content')

  function appendImage (path) {
    var imgElement = document.createElement('img')
    imgElement.src = path
    container.appendChild(imgElement)
  }

  // see http://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
  function getScrollPercent () {
    var h = document.documentElement
    var b = document.body
    var st = 'scrollTop'
    var sh = 'scrollHeight'
    return h[st] || b[st] / ((h[sh] || b[sh]) - h.clientHeight) * 100
  }

  function SimpleScrollLoader (imageList, initialBatch, batchSize) {
    initialBatch = initialBatch == null ? 0 : initialBatch
    batchSize = batchSize == null ? 2 : batchSize

    imageList.splice(0, initialBatch).forEach(appendImage)

    window.addEventListener('scroll', function () {
      if (getScrollPercent() > 80) {
        imageList.splice(0, batchSize).forEach(appendImage)
      }
    })
  }

  return SimpleScrollLoader
})()
