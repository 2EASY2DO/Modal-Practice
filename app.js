// console.log($);
// console.log('modal practice app.js is linked to this index.html');


$( () => {

  //Getting Objects
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  //Action handlers
  const openModal = () => {
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
  }
  const closeModal = () => {
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
  }
  //Event Listeners for buttons
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);

  setTimeout(openModal, 5000);
});
