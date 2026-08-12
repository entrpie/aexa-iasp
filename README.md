# IASP — International Air and Space Program (prototipo)

Prototipo visual de la página [aexa.biz/iasp.html](https://aexa.biz/iasp.html), construido como un ejercicio rápido de rediseño UI/UX con temática aeroespacial.


Tampoco se conservaron las imágenes originales del sitio: se reemplazaron por otras porque las originales tenían poca calidad/resolución y no se veían bien en un layout a pantalla completa. Las nuevas se eligieron por resolución y por encajar temáticamente con cada sección.

## Demo

🔗 **[Ver sitio en vivo](https://entrpie.github.io/aexa-iasp/)**

## Stack

- HTML5 + CSS3 (sin framework, variables CSS para el sistema de diseño)
- JavaScript vanilla (acordeón de FAQ, scroll reveal, galería en loop, indicador de sección activa)
- [Font Awesome 6](https://fontawesome.com/) para iconografía
- Sin build step — se sirve tal cual

## Estructura

```
├── index.html
└── assets/
    ├── css/main.css
    ├── js/main.js
    └── img/
        ├── backgrounds/   fondos por sección + textura de granulado
        ├── badges/        patch de la misión
        ├── brand/         logo y favicon
        ├── buttons/       assets de botones
        ├── gallery/       fotos del carrusel
        ├── proposals/     ilustraciones de apoyo
        └── sponsors/      logos de patrocinadores
```

## Correrlo localmente

```bash
git clone https://github.com/entrpie/aexa-iasp.git
cd aexa-iasp
python3 -m http.server 8080
```

Y abrir `http://localhost:8080`.
