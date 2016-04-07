angular.module("comicApp").value("apiPaths", {
    items: "/api/v1/items",
    itemDetail: "/api/v1/items/:id",
    itemAllComics:"/api/v1/items?tipo=comic",
    itemHeroComics:"/api/v1/items?tipo=comic&genero=superheroes",
    itemAdventureComics:"/api/v1/items?tipo=comic&genero=adventure",
    itemSciFiComics:"/api/v1/items?tipo=comic&genero=sci-fi",
    itemAllMangas: "/api/v1/items?tipo=manga",
    itemShonenMangas: "/api/v1/items?tipo=manga&genero=shonen",
    itemSeinenMangas: "/api/v1/items?tipo=manga&genero=seinen",
    itemMechaMangas: "/api/v1/items?tipo=manga&genero=mecha",
    users:"/api/v1/users",
    loginApiPath: "/api/v1/login"
});
