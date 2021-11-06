import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

// ___________________________________________ Variant 1

const createLi = galleryItems
  .map(
    (elem) =>
      `<a class="gallery__link"><img src = '${elem.preview}' class="gallery__image" alt='${elem.description}'  data-secondSrc=${elem.original}'></a>`
  )
  .join('');

// gallery.insertAdjacentHTML('beforeEnd', createLi);
gallery.innerHTML = createLi;

const showBigPicture = (evn) => {
  const imgBigSizeValue = evn.target.dataset.secondsrc;

  const instance = basicLightbox
    .create(
      `
  	<img width="1400" height="900" src="${imgBigSizeValue}">
    `,
      {
        onShow: (instance) => {
          const checkFunk = (event) => {
            if (event.code == 'Escape') {
              instance.close(
                document.removeEventListener('keydown', checkFunk)
              );
            }
          };
          document.addEventListener('keydown', checkFunk);
        },
      }
    )
    .show();
};

gallery.addEventListener('click', showBigPicture);

//___________________________________________ Variant 2

// const methods = {
//   createLi: function (arr) {
//     return arr
//       .map(
//         (elem) =>
//           `<a class="gallery__link"><img src = '${elem.preview}' class="gallery__image" alt='${elem.description}'  data-secondSrc=${elem.original}'></a>`
//       )
//       .join('');
//   },
//   createGallery: function (arr) {
//     const li = createLi(arr);
//     gallery.insertAdjacentHTML('beforeEnd', li);
//   },
//   showBigPicture: function (evn) {
//     const imgBigSizeValue = evn.target.dataset.secondsrc;
//     const target = evn.target;

//     basicLightbox
//       .create(
//         `
//   	<img width="1400" height="900" src="${imgBigSizeValue}">
//     `,
//         {
//           onShow: (instance) => {
//             const checkFunk = (event) => {
//               if (event.code == 'Escape') {
//                 instance.close(
//                   document.removeEventListener('keydown', checkFunk)
//                 );
//               }
//             };
//             document.addEventListener('keydown', checkFunk);
//           },
//         }
//       )
//       .show();
//   },
//   isShown: function () {
//     return basicLightbox.show;
//   },
// };

// const { createLi, createGallery, showBigPicture, isShown } = methods;

// gallery.addEventListener('click', showBigPicture);

// createGallery(galleryItems);
