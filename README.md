# DIO-Project-app-flow
## Podcast Manager

### Descrição

Um app no estilo Netflix que centralizará diferentes episódios de podcasts separados por categoria.

### Domínio

Podcasts feitos em vídeo.

---

## 🎯 Features

- Listar os episódios dos podcasts em sessões de categorias  
  - Categorias: `saúde`, `fitness`, `mentalidade`, `humor`, `jornalismo`, `política`
- Filtrar episódios por nome de podcast

---

## 💡 Como funciona

### Feature: Listar os episódios dos podcasts em sessões de categorias

**Como será implementado:**

- Endpoint **GET**:
  - Retorna uma resposta em formato **JSON** com os seguintes campos:
    - `podcastName`
    - `episode`
    - `videoId`
    - `cover`
    - `link`
    - `category`

**Exemplo de resposta (`RESPONSE`):**
```json
[
  {   
    "podcastName": "flow",
    "episode": "Reinaldo Azevedo - Flow #455",
    "videoId": "a5M5Je7yKqE",
    "cover": "https://i.ytimg.com/vi/a5M5Je7yKqE/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=a5M5Je7yKqE",
    "category": ["jornalismo", "política"]
  },
  {   
    "podcastName": "flow",
    "episode": "José Kobori - Flow #447",
    "videoId": "MN6zEQsSMaw",
    "cover": "https://i.ytimg.com/vi/MN6zEQsSMaw/maxres.jpg",
    "link": "https://www.youtube.com/watch?v=MN6zEQsSMaw",
    "category": ["jornalismo", "política"]
  }
]
