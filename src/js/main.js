window.onload = function () {
    const wrapBtnsPhotos = document.querySelector('.galleryMain__btns');
    const arrayBtnsPhotos = document.querySelectorAll('.galleryMain__btn');

    const galleryPhotos = document.querySelectorAll('.galleryPhotos');
    const photosFam = document.querySelector('.galleryPhotos-fam');
    const photosLove = document.querySelector('.galleryPhotos-love');
    const photosLife = document.querySelector('.galleryPhotos-life');
    const photosGlam = document.querySelector('.galleryPhotos-glam');
    const photosFashion = document.querySelector('.galleryPhotos-fashion');


    const btnPlayVideo = document.querySelector('.videoPoster__btn');
    const btnCloseVideo = document.querySelector('.video__close');
    const wrapperVideo = document.querySelector('.wrapperVideo');
    const videoPoster = document.querySelector('.videoPoster');



    function removeClassesGallerey(){
        galleryPhotos.forEach(gallery => {
            arrayBtnsPhotos.forEach(btn => btn.classList.remove('galleryMain__btn-active'));
            gallery.classList.remove('galleryPhotos-activeFlex');
            gallery.classList.remove('galleryPhotos-active')
        });
    }


    //tabs
    wrapBtnsPhotos.addEventListener('click', function (e) {
        let btnClassName = e.target.className.split(' ')[1];

        switch (btnClassName) {
            case 'galleryMain__btn-fam':
                removeClassesGallerey();

                photosFam.classList.add('galleryPhotos-activeFlex');
                e.target.classList.add('galleryMain__btn-active');
                break;

            case 'galleryMain__btn-love':
                removeClassesGallerey();

                photosLove.classList.add('galleryPhotos-activeFlex');
                e.target.classList.add('galleryMain__btn-active');
                break;

            case 'galleryMain__btn-life':
                removeClassesGallerey();

                photosLife.classList.add('galleryPhotos-activeFlex');
                e.target.classList.add('galleryMain__btn-active');
                break;

            case 'galleryMain__btn-glam':
                removeClassesGallerey();

                photosGlam.classList.add('galleryPhotos-activeFlex');
                e.target.classList.add('galleryMain__btn-active');
                break;

            case 'galleryMain__btn-fashion':
                removeClassesGallerey();

                photosFashion.classList.add('galleryPhotos-active');
                e.target.classList.add('galleryMain__btn-active');
                break;

            default: break;
        }
    });



    btnPlayVideo.addEventListener('click', function (e) {
        wrapperVideo.classList.add('wrapperVideo-active');
        videoPoster.classList.remove('videoPoster-active');
    });

    btnCloseVideo.addEventListener('click', function () {
        wrapperVideo.classList.remove('wrapperVideo-active');
        videoPoster.classList.add('videoPoster-active');
    });
};

//параллакс
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    $('.hero').css({ 'background-position-y': scrollTop / 2 + 'px'})
});
