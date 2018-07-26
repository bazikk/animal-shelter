"use strict"
const flky = new Flickity( '.gallery', {
  // options, defaults listed

  accessibility: false,
  // enable keyboard navigation, pressing left & right keys

  adaptiveHeight: false,
  // set carousel height to the selected slide

  autoPlay: false,
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second

  cellAlign: 'left',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

  cellSelector: undefined,
  // specify selector for cell elements

  contain: true,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled

  draggable: '>1',
  // enables dragging & flicking
  // if at least 2 cells

  dragThreshold: 3,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices

  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells

  friction: 0.2,
  // smaller number = easier to flick farther

  groupCells: false,
  // group cells together in slides

  initialIndex: 0,
  // zero-based index of the initial selected cell

  lazyLoad: true,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells

  percentPosition: false,
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images

  prevNextButtons: false,
  // creates and enables buttons to click to previous & next cells

  pageDots: false,
  // create and enable page dots

  resize: true,
  // listens to window resize events to adjust size & positions

  rightToLeft: false,
  // enables right-to-left layout

  setGallerySize: true,
  // sets the height of gallery
  // disable if gallery already has height set with CSS

  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }

  wrapAround: false
  // at end of cells, wraps-around to first for infinite scrolling

});
$(".button--previous").addClass("deactive");
let index = flky.selectedIndex - 1;
let flickitySliderTranslateX;

$('.button--previous').on( 'click', function() {
  flky.previous();
  index--;

  if(flky.selectedIndex == 0){
    $(this).addClass("deactive");
  }else{
    $('.button--next').removeClass("deactive");
  }
});

$('.button--next').on( 'click', function() {
  $(".button--previous").removeClass("deactive");

  if(index == (flky.cells.length - 4)){
    return false;
  }

  flky.next();
  index++;

  if(index == (flky.cells.length - 4)) $(this).addClass("deactive");
});

$(".gallery").on("dragMove.flickity", function(e){
  let sliderFullWidth = $(".gallery-cell").outerWidth(true) * (flky.cells.length-3);
  flickitySliderTranslateX = getValues($(".flickity-slider")).translateX;

  if(flickitySliderTranslateX !== 0){
    $(".button--previous").removeClass("deactive");
    $(".button--next").removeClass("deactive");
  }

  if(-flickitySliderTranslateX <= 0){
    $(".button--previous").addClass("deactive");
  }

 if(-flickitySliderTranslateX >= sliderFullWidth){
  $(".button--next").addClass("deactive");
 }else{
  $(".button--next").removeClass("deactive");
 }
 
})

function getValues(element){
  const matrix = element.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
  const x = matrix[12] || matrix[4];
  const y = matrix[13] || matrix[5];

  return {translateX:x,translateXY:y};
};