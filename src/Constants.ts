export const posts = [
    { "title": "O Papel do novo centro da juventude para todos", "category": "messages", "content": "..." },
    { "title": "Mensagem de Natal 2020", "category": "messages", "content": "..." },
    { "title": "Obras na avenida 25 de Abril finalizadas atempadamente", "category": "news", "content": "..." },
    { "title": "Piscinas municipais abrem portas as cidadãos carenciados", "category": "news", "content": "..." },
    { "title": "Horários dos serviços municipais", "category": "schedules", "content": "..." },
    { "title": "Horários das instalações desportivas", "category": "schedules", "content": "..." },
    { "title": "Atendimento ao cliente no serviço de águas", "category": "schedules", "content": "..." },
    { "title": "Tarifas de licenciamento", "category": "taxes", "content": "..." },
    { "title": "Tarifários de água do concelho", "category": "taxes", "content": "..." },
    { "title": "Taxas de saneamento", "category": "taxes", "content": "..." }
]

export const pages = [
    { "title": "Home", "icon": "home", "url": "", "notifications": 0, "content": [] },
    {
        "title": "Camera", "icon": "building", "url": "posts", "notifications": 0, "content": [
            { "type": "post", "title": "Mensagens do Presidente", "properties": { "categories": ["messages"] } },
            { "type": "post", "title": "Notícias", "properties": { "categories": ["news"] } },
            { "type": "post", "title": "Horas e serviços", "properties": { "categories": ["schedules", "services"] } },
            { "type": "post", "title": "Taxas e Tarifários", "properties": { "categories": ["taxes"] } }]
    },
    { "title": "Comunicar", "icon": "comments", "url": "", "notifications": 1, "content": [] },
    { "title": "Proteção civil", "icon": "exclamation-triangle", "url": "", "notifications": 0, "content": [] },
    { "title": "Covid", "icon": "band-aid", "url": "", "notifications": 0, "content": [] },
    { "title": "Agenda", "icon": "calendar", "url": "", "notifications": 0, "content": [] }
]