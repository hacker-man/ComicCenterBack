angular.module("comicApp").constant("paths", {
    home: "/",
    aboutUs:"/aboutUs",
    myAccount: "/myAccount",
    loginPath: "/login",
    itemDetail: "/items/:id",
    registeruser: "/register",
    itemsPath:'/items',
    itemsComicAll:"/items?tipo=comic",
    itemsComicAdventure:"/items?tipo=comic&genero=adventure",
    itemsComicHero:"/items?tipo=comic&genero=superheroes",
    itemsComicSciFi:"/items?tipo=comic&genero=sci-fi",
    itemsMangaAll:"/items?tipo=manga",
    itemsMangaShonen:"/items?tipo=manga&genero=shonen",
    itemsMangaSeinen:"/items?tipo=manga&genero=seinen",
    itemsMangaMecha:"/items?tipo=manga&genero=mecha",
    sellItem:"/sell",
    notFound: "/not-found"
});
