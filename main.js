document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('trocaImagem');
    var image = document.querySelector('img');
    var imageIndex = 0;
    var images = ['main-qimg-08f9e63b524af5fdb7d400f78123632d-lq.jpg', 'main-qimg-f25b54e7789909f5421c12c23ce108b3-lq.jpg', 'giga-chad-meme-2.jpg']; // Replace with your image paths

    button.addEventListener('click', function() {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length; // Loop back to the first image when reaching the end
    });
});