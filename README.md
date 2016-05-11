super simple scroll loader example
==================================

Append images from a list to the DOM when scroll position reaches 80%.

Usage
-----

```js
new SimpleLazyLoader(listOfImagePaths, initialBatch, batchSize)
```

* `listOfImagePaths` is a simple array with image paths.
* `initialBatch` is the amount of images to add in the beginning (default: 0)
* `batchSize` is the amount of images to add when scroll position is reached (default: 2)


Example Images
--------------

The example images in this repository are generated with ImageMagick and
following lines of shell script:

```sh
for filter in Bessel Blackman Box Catrom Cubic Gaussian Hamming Hanning Hermite Lanczos Mitchell Point Quadratic Sinc Triangle; do
  for x in 0 1 2 3 4 5 6 7 8 9 A B C D E F; do
    convert \( xc:\#${x}00000 xc:\#0000${x}0 +append \) \( xc:\#${x}0${x}000 xc:\#00${x}0${x}0 +append \) -append -filter $filter -resize 1000x1000\!  gradient-test3-${filter}-${x}.png
  done
done

```
