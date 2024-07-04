/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

// Documentos ID de las APL
const DOCUMENT_ID_BIENVENIDA = "BienvendiaApl";
const DOCUMENT_ID_DESCRIPCION = "DescripcionApl";
const DOCUMENT_ID_LUGARES_TURISTICOS = "LugaresTuristicosApl";
const DOCUMENT_ID_COMIDA_TIPICA = "ComidaTipicaApl";
const DOCUMENT_ID_TRAJE_TIPICO = "TrajeTipicoApl";
const DOCUMENT_ID_PERSONAJES = "PersonajesApl";
const DOCUMENT_ID_MUSICA = "MusicaApl";
const DOCUMENT_ID_AYUDA = "AyudaApl";
const DOCUMENT_ID_ERROR = "ErrorApl";
const DOCUMENT_ID_SALIR = "SalirApl";

const datasourcebienvenida = {
   "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://imgs.search.brave.com/zurcUPyWzshzk08dOFSXbqSWEsCZoLYzPupNSU4Wsa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ndWJi/aW8tcGFsYXp6by1k/ZWktY29uc29saS1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTY1OTM0/NjkyMi5qcGc_cmVz/aXplPTk4MDoq",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Italia, el pais mas elegante del mundo. "
                }
            },
            "logoUrl": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "hintText": "Puedes probar diciendo:\"Dame un dato curioso de Italia\""
        }
    }
};

const datasourcedescripcion = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://admin.europaturism.ro/Files/Pictures/Images/italia-9210.jpg",
            "displayFullscreen": false,
            "headerTitle": "Italia",
            "headerSubtitle": "El pais de la elegancia",
            "logoUrl": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "videoControlType": "skip",
            "videoSources": [
                "https://videolondres.s3.us-east-2.amazonaws.com/ITALIA%2C+que+ver+en+el+PRIMER+VIAJE%E2%9C%94%EF%B8%8F+%F0%9F%87%AE%F0%9F%87%B9.mp4"
            ],
            "sliderType": "determinate"
        }
    }
};

const datasourcelugaresturisticos = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://imgs.search.brave.com/zurcUPyWzshzk08dOFSXbqSWEsCZoLYzPupNSU4Wsa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ndWJi/aW8tcGFsYXp6by1k/ZWktY29uc29saS1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTY1OTM0/NjkyMi5qcGc_cmVz/aXplPTk4MDoq",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "lugares turisticos de italia",
        "listItems": [
            {
                "primaryText": "Roma",
                "imageSource": "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bynqn8b62ycdhcraw3o5"
            },
            {
                "primaryText": "Venecia",
                "imageSource": "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/sthjxxrfnkeklnv187eb"
            },
            {
                "primaryText": "Milán",
                "imageSource": "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/kyhht3d7u6yfrpa7x3cu"
            },
            {
                "primaryText": "Pisa",
                "imageSource": "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/s9o3iqzxpfa3gb0n1pje"
            },
            {
                "primaryText": "Costa Esmeralda, Cerdeña",
                "imageSource": "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/fcoklrjkuspa8bvhfuqp"
            },
            {
                "primaryText": "Nápoles",
                "imageSource": "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/cydzb9wnrfjupjdms7ct"
            }
        ],
        "logoUrl": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw"
    }
};

const datasourcecomidatipica = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://www.travelreport.mx/wp-content/uploads/2018/08/que-comer-en-Roma-12-400x240.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "Comida Tipica Italia",
        "listItems": [
            {
                "primaryText": "Pizza napolitana",
                "imageSource": "https://imgs.search.brave.com/odl8m1VXmj2UQf5m0aKLbva7Q9tacFdGQxSaMzg3h_g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMS5h/YmNzdGF0aWNzLmNv/bS9NZWRpYS8yMDE0/MDIvMjAvcGl6emEt/c2VjcmV0by1uYXBv/bGl0YW5hLXJvbWFu/YS0tNjQ0eDU1MC5K/UEc"
            },
            {
                "primaryText": "Spaghetti al pesto genovese",
                "imageSource": "https://imgs.search.brave.com/Ys6YJAxC3xh9Ub73gAwfnH34ng1-jNLoQJaD_fpwRx4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuNzUwZy5jb20v/aW1hZ2VzLzY0MC0z/NjAvMzM0MGFkZWMy/NmFmMjFlYzVhNDE3/MjQ0NTJkYjRjYWEv/Mi1zcGFnaGV0dGkt/cGVzdG8tZ2Vub3Zl/c2UtcGlnbm9ucy1i/YXNpbGljLmpwZw"
            },
            {
                "primaryText": "Arancini",
                "imageSource": "https://imgs.search.brave.com/_OZohODiFw0ABvLD9F9oTzTpkkx03lSFyCyJ4L_NRnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDIw/LzA1LzIwL2Rpbmlu/Zy9hdy1hcmFuY2lu/aS9hdy1hcmFuY2lu/aS1hcnRpY2xlTGFy/Z2UuanBnP3dpZHRo/PTEyODAmcXVhbGl0/eT03NSZhdXRvPXdl/YnA"
            },
            {
                "primaryText": "Lasagna",
                "imageSource": "https://imgs.search.brave.com/e6TLt_BqGBTT4wW3O5DAu0DsQWgryhVEUAxmOtXjJrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA1LzEyLzIw/LzM2MF9GXzEwNTEy/MjA5NF9rU1hWVjAx/bFpyYTJvQWdSMW00/VE00YlpLMlJtamVt/Sy5qcGc"
            },
            {
                "primaryText": "Risotto ",
                "imageSource": "https://imgs.search.brave.com/A1a3beGUTZHeTKKGrkv3FKHt6G8kiJPxXH38PyWBEx8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTU1/OTgwNjU4L3Bob3Rv/L3Jpc290dG8td2l0/aC1hc3BhcmFndXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUxxSVNaUHFPN21p/a2NJYU10bDhpTHRw/dUpiX1FjQndDcVBm/NkI1Sm50VzQ9"
            },
            {
                "primaryText": "Tiramisú",
                "imageSource": "https://imgs.search.brave.com/-HH0Qdh4b2nM9o9JdKQNY_bTfOWdbBiC1J-ZD2O4DL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWNl/dGFzZGVjb2NpbmEu/ZWxtdW5kby5lcy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OC90aXJhbWlzdS1w/b3N0cmUtaXRhbGlh/bm8uanBn"
            }
        ],
        "logoUrl": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
        "hintText": ""
    }
};

const datasourcetrajetipico = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://imgs.search.brave.com/zurcUPyWzshzk08dOFSXbqSWEsCZoLYzPupNSU4Wsa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ndWJi/aW8tcGFsYXp6by1k/ZWktY29uc29saS1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTY1OTM0/NjkyMi5qcGc_cmVz/aXplPTk4MDoq",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "https://europa.photo.blog/wp-content/uploads/2019/08/traje-tipico-del-hombre-italiano-1-300x200.jpg",
            "headerTitle": "Traje tipico de italia",
            "headerSubtitle": "Bienvenido",
            "hintText": "",
            "headerAttributionImage": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "primaryText": "La vestimenta tradicional italiana refleja comodidad y elegancia. El hombre lleva pantalones negros, cubiertos casi hasta las rodillas por medias blancas, denotando comodidad y serenidad. La mujer, por otro lado, viste con elegancia una falda con pliegues, levantada internamente por enaguas y adornada con cintas en los extremos. Debajo de la falda, lleva medias blancas que cubren desde los pies hasta las rodillas.",
            "textAlignment": "center",
            "titleText": "Caracteristicas"
        }
    }
};

const datasourcepersonajes = {
    "cardsLayoutTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://imgs.search.brave.com/zurcUPyWzshzk08dOFSXbqSWEsCZoLYzPupNSU4Wsa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ndWJi/aW8tcGFsYXp6by1k/ZWktY29uc29saS1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTY1OTM0/NjkyMi5qcGc_cmVz/aXplPTk4MDoq",
            "headerTitle": "Personajes celebres de Italia",
            "headerSubtitle": "Bienvenido",
            "headerAttributionImage": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "primaryText": "Algunos personajes celebres de Italia",
            "listItems": [
                {
                    "primaryText": "Leonardo da Vinci ",
                    "secondaryText": "(1452 - 1519)",
                    "thumbnailImage": "https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2016/12/leonardo-da-vinci.jpg.webp"
                },
                {
                    "primaryText": "Galileo Galilei",
                    "secondaryText": "(1564 - 1642)",
                    "thumbnailImage": "https://pymstatic.com/86086/conversions/galileo-galilei-social.jpg"
                },
                {
                    "primaryText": "Giorgio Armani",
                    "secondaryText": "(1934)",
                    "thumbnailImage": "data:image/jpeg;base64,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"
                },
                {
                    "primaryText": "Francesco Totti ",
                    "secondaryText": "(1976)",
                    "thumbnailImage": "https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2016/12/totti.webp"
                },
                {
                    "primaryText": "Enzo Ferrari",
                    "secondaryText": "(1898 - 1988)",
                    "thumbnailImage": "https://cdn2.excelsior.com.mx/media/pictures/2022/11/18/2858593.jpg"
                },
                {
                    "primaryText": "Maria Montessori",
                    "secondaryText": "(1870 - 1952)",
                    "thumbnailImage": "https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2016/12/maria-montessori.jpg.webp"
                }
            ]
        }
    }
};

const datasourcemusica = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump10",
            "audioSources": [
                "https://videolondres.s3.us-east-2.amazonaws.com/Y2meta.app+-+Eros+Ramazzotti+-+Otra+Como+Tu.+(128+kbps).mp3"
            ],
            "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-rose.png",
            "coverImageSource": "https://imgs.search.brave.com/YYtx6GKzekhi__pmuWMJ1KS5j1ZfMus5jdNH_AAc9Os/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zLm14/bWNkbi5uZXQvaW1h/Z2VzLXN0b3JhZ2Uv/YWxidW1zLzkvMS81/LzMvNy84LzExODcz/NTE5XzUwMF81MDAu/anBn",
            "headerTitle": "nuestro cantante favorito ",
            "logoUrl": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "primaryText": "Otra como tu",
            "secondaryText": "Tutte storie",
            "sliderType": "determinate"
        }
    }
};

const datasourceayuda = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://imgs.search.brave.com/7E5ncQNm7GMU8XKnDpkZGkUNOH7t3z69gxZz4yTIUM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZXMubmF0aW9uYWxn/ZW9ncmFwaGljLmNv/bS5lcy9tZWRpby8y/MDI0LzAyLzA5L2Zl/cnJhcmlfZDcxNjU4/MDFfMjMxOTQ4MTc1/NV8yNDAyMDkxMDM2/MTlfODAweDgwMC5q/cGc",
                    "size": "large"
                }
            ]
        },
        "title": "Ayuda, acerca de Italia",
        "listItems": [
            {
                "primaryText": "¿Qué puedo hacer?"
            },
            {
                "primaryText": "¿Cómo se usa esto?"
            },
            {
                "primaryText": "Necesito ayuda"
            }
        ],
        "logoUrl": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw"
    }
};

const datasourcerror = {
    "multipleChoiceTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://imgs.search.brave.com/zurcUPyWzshzk08dOFSXbqSWEsCZoLYzPupNSU4Wsa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ndWJi/aW8tcGFsYXp6by1k/ZWktY29uc29saS1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTY1OTM0/NjkyMi5qcGc_cmVz/aXplPTk4MDoq",
            "titleText": "Error",
            "primaryText": "Lo siento, no entendí eso. Puedes pedirme que te describa Londres, lugares turísticos, comida típica, traje típico, personajes destacados o que reproduzca música, ¿Cómo puedo ayudarte?",
            "choices": [
                "Dame una descripcion de Italia",
                "Mencioname comida tipica de Italia",
                "Quiero escuchar musica de Italia",
                "Lugares turisticos de Italia"
            ],
            "choiceListType": "none",
            "headerAttributionImage": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "footerHintText": "Puedes probar diciendo:\"Mencioname comida tipida de Italia\""
        }
    }
};

const datasourcesalir = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://imgs.search.brave.com/zurcUPyWzshzk08dOFSXbqSWEsCZoLYzPupNSU4Wsa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9ndWJi/aW8tcGFsYXp6by1k/ZWktY29uc29saS1y/b3lhbHR5LWZyZWUt/aW1hZ2UtMTY1OTM0/NjkyMi5qcGc_cmVz/aXplPTk4MDoq",
            "foregroundImageLocation": "bottom",
            "foregroundImageSource": "https://enfoquenoticias.com.mx/wp-content/uploads/2023/04/italia.jpg",
            "headerTitle": "curiocidades de Italia",
            "headerSubtitle": "Vuelva Pronto",
            "hintText": "",
            "headerAttributionImage": "https://imgs.search.brave.com/SBsU0Z27mt7yE-obDIS_YkQ2qjX89xxNGgn0UozuvrY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFuZGVyYXMtZS1o/aW1ub3MuY29tL21l/ZGlhLzM5L2JhbmRl/cmEtaXRhbGlhLnBu/Zw",
            "primaryText": "Esperamos que hayas disfrutado aprendiendo sobre este hermoso país. ¡Vuelve pronto para descubrir más!",
            "textAlignment": "start",
            "titleText": "\"Gracias por visitar Curiosidades de Italia\""
        }
    }
};

const createDirectivePayload = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenido al país de la elegancia, Italia.';
        const repromptOutput = '¿Qué te gustaría saber sobre Italia?';

        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_BIENVENIDA, datasourcebienvenida);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};


///
const DescripcionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionIntent';
    },
    handle(handlerInput) {
        const speakOutput = `Reproduciendo video sobre descripción de Italia.`;
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_DESCRIPCION, datasourcedescripcion);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const LugaresTuristicosIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugaresTuristicosIntent';
    },
    handle(handlerInput) {
        const speakOutput = `Lugares turísticos de Italia: Coliseo, Torre de Pisa, Canal Grande de Venecia, Duomo de Milán, Pompeya, y la Fontana di Trevi.`;
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_LUGARES_TURISTICOS, datasourcelugaresturisticos);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ComidaTipicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaTipicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = `Comida típica de Italia: Pizza, Pasta, Lasagna, Risotto, Ossobuco, Tiramisu, y Gelato.`;
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_COMIDA_TIPICA, datasourcecomidatipica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const TrajeTipicoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeTipicoIntent';
    },
    handle(handlerInput) {
        const speakOutput = `El traje típico de Italia varía según la región, pero comúnmente incluye elementos como la camisa blanca, el chaleco, la falda larga, y el pañuelo en la cabeza para las mujeres, y la camisa blanca, el chaleco, y los pantalones oscuros para los hombres.`;
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_TRAJE_TIPICO, datasourcetrajetipico);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const PersonajesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesIntent';
    },
    handle(handlerInput) {
        const speakOutput = `Personajes sobresalientes de Italia: Leonardo da Vinci, Galileo Galilei, Michelangelo, Dante Alighieri, Enrico Fermi, y Sophia Loren.`;
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_PERSONAJES, datasourcepersonajes);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MusicaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaIntent';
    },
    handle(handlerInput) {
        const speakOutput = `Música de Italia: Andrea Bocelli - Con Te Partirò.`;
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_MUSICA, datasourcemusica);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Curiosidades Italia. ¿En qué puedo ayudarte?';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_AYUDA, datasourceayuda);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Gracias por explorar Italia conmigo. Espero que hayas aprendido algo nuevo y emocionante sobre este increíble país. ¡Hasta la próxima!';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_SALIR, datasourcesalir);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

//
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entendí eso. Puedes pedirme que te describa Italia, lugares turísticos, comida típica, traje típico, personajes destacados o que reproduzca música, ¿Cómo puedo ayudarte?.';
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_ERROR, datasourcerror);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, no entendí eso. Puedes pedirme que te describa Italia, lugares turísticos, comida típica, traje típico, personajes destacados o que reproduzca música, ¿Cómo puedo ayudarte?.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload(DOCUMENT_ID_ERROR, datasourcerror);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescripcionIntentHandler,
        LugaresTuristicosIntentHandler,
        ComidaTipicaIntentHandler,
        TrajeTipicoIntentHandler,
        PersonajesIntentHandler,
        MusicaIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();