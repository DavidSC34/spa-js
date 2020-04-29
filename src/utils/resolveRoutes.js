/*para sabe a que template voy a mandar*/
const resolveRoutes = (route) => {
  //es menor a tres por que son mil personajes
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`; //=> /about
};
