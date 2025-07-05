export enum ContentType {
  // Tipos comuns para APIs
  JSON = "application/json",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",
  TEXT = "text/plain",

  // Tipos comuns para páginas e scripts
  HTML = "text/html",
  CSS = "text/css",
  JAVASCRIPT = "application/javascript",

  // Tipos comuns de imagens
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",
  ICON = "image/x-icon",

  // Tipos de áudio e vídeo
  MP3 = "audio/mpeg",
  MP4 = "video/mp4",
  OGG_AUDIO = "audio/ogg",
  OGG_VIDEO = "video/ogg",
  WEBM_AUDIO = "audio/webm",
  WEBM_VIDEO = "video/webm",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",
  TAR = "application/x-tar",

  // XML e derivados
  XML = "application/xml",
  TEXT_XML = "text/xml",
  RSS = "application/rss+xml",
  ATOM = "application/atom+xml",

  // Tipos especiais
  OCTET_STREAM = "application/octet-stream", // binário genérico
}