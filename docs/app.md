# Podcast Menager

### Descrição
Um app no estilo Netflix que centralizará diferentes episódios de podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios dos podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor, jornalismo, política]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
- Listar os episódios dos podcasts em sessões de categorias

### Como vou implementar:
GET: Retorna em uma API rest (JSON) uma lista com: o nome do podcast, nome do episódio, imagem de capa, hiperlink, categoria

RESPONSE:
```js
    [{   
        podcastName: "flow",
        episode: "Reinaldo Azevedo - Flow #455",
        videoId: "a5M5Je7yKqE",
        cover:"https://i.ytimg.com/vi/a5M5Je7yKqE/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=a5M5Je7yKqE",
        category: ["jornalismo","política"]

    },
    {   
        podcastName: "flow",
        episode: "José Kobori - Flow #447",
        videoId: "MN6zEQsSMaw",
        cover:"https://i.ytimg.com/vi/MN6zEQsSMaw/maxres.jpg",
        link: "https://www.youtube.com/watch?v=MN6zEQsSMaw",
        category: ["jornalismo","política"]

    }]
```

