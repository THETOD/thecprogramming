document.addEventListener('DOMContentLoaded', (event) => {
    const images = [
        'https://pixabay.com/get/g8faa5cb9ad45d99227a49cb00fd15f8b48113f3280a16e82f937e40e5237c8673cc8043c8a449a05ae8af8134b69252f.jpg',
        'https://pixabay.com/get/g8d17627120c215aacf8adc528a16170d3204fbbba1117aebf97f4bef05e38fce1a17fd70922094ba31f9d0461b593849.jpg',
        'https://pixabay.com/get/g682b8189a166810d07c8f42855e48356493006f781208b4f370011fd2291521f84ed955a988c1e7a25957f3583e08898.jpg',
        'https://pixabay.com/get/g01b34d239cea04c2679ae3975da7272e663b2519f83391c9dfed0c22ac168d527e9f355dd2b653b2bd9d470a7adb1e2b.jpg',
        'https://pixabay.com/get/gfb4ac2208fc75fdb49851432650e35055bf5ae4d7da75fd75ba781e0c4942f003b96e123239671ae17022d6e748a8747.jpg',
        'https://pixabay.com/get/g7cfa8b37eccb855010368f12bc11c7a3185b4f3b347037be9b67bc995a77109bf4f47259fb73a0af3e0f51c1f3d42244.jpg',
        'https://pixabay.com/get/g61b9971288a3e8e761ac95d40538e8ac3509b512204a985acab94ec36c922917072a3b2a589042677bca7c5de78e2c61.jpg',
        'https://pixabay.com/get/g579ae61d14ce6e59dd62cbf32e11f8b3842517a760ae13e1796b4d7291ebbb57cb95ed493659213701400b4026a3cd3a.jpg',
        'https://pixabay.com/get/gc902982c44c69d9941844d3a4247820f479c17df82a9ea4c8e14107ac6542de1b1a8840bbcecd8f6802e6dbc770b5178.jpg',
        'https://pixabay.com/get/g0a205b0d0d0b4787e6c4df6f53977ec19ef58f6d5d36515382e7caab1877bb861052cdb8a1b2b223bd2628f24dcaace7.jpg  ',
        'https://pixabay.com/get/g1c896ad9a85574980e425deb8873e82bb6757c7f9d81dee0df39898e3b344b6732984d73c795e7720be2efe4140c5c85.jpg',
        'https://pixabay.com/get/g6963e93a45ef12919ea6cb1b6973b5a6e5be05e7b4204e90eeb3c87e66b80dbbda12bf54e416038763decf9c8846078a.jpg',
        'https://pixabay.com/get/g843a19dfbb254a95aa005f16ee1e0a90f3504e6db6fe94bef8b8ca78eacbc9edbda46f12f7655d266084111b6d51908d.jpg',
        'https://pixabay.com/get/g03adaf00d63cebfabde581e1595ce79c2908ba13692b7942abdf79c091edc14ca0243b3dcf65546c9632abdfa6b928bc.jpg',
        'https://pixabay.com/get/g673deb7dcfe6ab9bbcd37cb4baf64c996f24392102c781c0ddf00907da9dc9be30111a335d53afd2043f6513ef6c71e7.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.background-img').style.backgroundImage = `url('${randomImage}')`;
});
