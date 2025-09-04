document.addEventListener('DOMContentLoaded', function() {
    // Populate memories with independent images
    const memories = document.getElementById('memories');
    const memoryImages = [
        { src: './offlinepics/01.jpg', alt: 'Nuestra foto cuando aun eramos amiguitos' },
        { src: './offlinepics/1.jpg', alt: 'Nuestra foto cuando aun daba nervios decirnos "amor"' },
        { src: './offlinepics/2.jpg', alt: 'Nuestra foto que seguro no quieres que suba hshshs'},
        { src: './offlinepics/3.jpg', alt:  'Nuestra foto que siempre pienso'},

        { src: './offlinepics/4.jpg', alt:  'Nuestra foto mas goals'},
        { src: './offlinepics/5.jpg', alt:  'Nuestra foto a la que llamo "casita"'},
        { src: './offlinepics/6.jpg', alt:  'Nuestros ojos siendo quemados por el flash'},

        { src: './offlinepics/7.jpg', alt:  'Nuestra foto mas instagrameable'},
        { src: './offlinepics/8.jpg', alt: 'Nuestros amigos diciendo "mis papis"' },
        { src: './offlinepics/9.jpg', alt: 'Nuestra primera cenita como pareja' },

        { src: './offlinepics/10.jpg', alt:  'Nuestros besos que paran el mundo'},
        { src: './offlinepics/11.jpg', alt:  'Nuestro amor es el reflejo de los momentos más felices que compartimos juntos'},
        { src: './offlinepics/12.jpg', alt:  'Nuestro matrimonio de alacitas'},

        { src: './offlinepics/13.jpg', alt:  'Nuestra emocion y mis nervios'},
        { src: './offlinepics/14.jpg', alt: 'Nuestro mini viaje a Tarata' },

        { src: './offlinepics/15.jpg', alt:  'Nuestra post-Halloween'},
        { src: './offlinepics/16.jpg', alt: 'Nuestro post-Halloween ya borrachos' },
        { src: './offlinepics/17.jpg', alt:  'Nuestra primera graduacion'},
        { src: './offlinepics/25.jpg', alt:  'Nuestra primera boda'},
        { src: './offlinepics/18.jpg', alt: 'Nuestro amor, raro pero bello hshshs' },
        { src: './offlinepics/19.jpg', alt:  'Nuestro cariño'},
        { src: './offlinepics/20.jpg', alt: 'Nuestro primer San Valentin' },
        { src: './offlinepics/21.jpg', alt:  'Nuestras patitas'},
        { src: './offlinepics/22.jpg', alt: 'Nuestro primer carnaval' },
        { src: './offlinepics/23.jpg', alt:  'Nuestros momentos fitness'},
        { src: './offlinepics/29.jpg', alt: 'Nuestras citas en crisis' },
        { src: './offlinepics/24.png', alt: 'Nuestra familIA hshshs' },
        { src: './offlinepics/27.jpg', alt: 'Nuestra linda salida' },
        { src: './offlinepics/26.jpg', alt: 'Nuestra primera aventura' },
        { src: './offlinepics/28.jpg', alt: 'Nuestras reconciliadas' },





    ];

    memoryImages.forEach(image => {
        memories.innerHTML += `
            <div class="memory-container bg-white rounded-lg shadow-md overflow-hidden">
                <div class="relative w-full h-full">
                    <img src="${image.src}" 
                         alt="${image.alt}"
                         title="${image.alt}"
                         class="w-full h-full object-cover"
                         loading="lazy">
                    <div class="image-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300">
                        <span class="text-white text-center px-2">${image.alt}</span>
                    </div>
                </div>
            </div>
        `;
    });

    // Populate details
    const details = document.getElementById('details');
    const detailsList = [
        "Como tus ojos se vuelven chinitos cuando ries",
        "Como te acurrucas en mi pecho",
        "Los sonidos raros que hacemos cuando estamos callados",
        "Tus palabras que se me pegaron",
        "Puede que haya puesto un secretito para encontrar en esta página"
    ];
    detailsList.forEach(detail => {
        details.innerHTML += `<li>• ${detail}</li>`;
    });

    let clickCount = 0;
    const footerText = document.querySelector('footer');
    
    footerText.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 3) { 
            const hiddenLink = document.createElement('a');
            hiddenLink.href = 'surprise.html';
            hiddenLink.className = 'hidden-link text-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-500';
            hiddenLink.textContent = '❤️';
            document.body.appendChild(hiddenLink);
            hiddenLink.style.position = 'fixed';
            hiddenLink.style.bottom = '20px';
            hiddenLink.style.right = '20px';
            hiddenLink.style.opacity = '1';
        }
    });
});