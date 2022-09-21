export class Router {

  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {

    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    this.handle();

  }

  handle() {

    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route).then(data => data.text()).then(html => {
      document.querySelector('#app').innerHTML = html
    });


    if (route === './src/pages/home.html') {
      document.querySelector('.home').style.fontWeight = 700;
    } else {
      document.querySelector('.home').style.fontWeight = 400;
    }

    if (route === './src/pages/universe.html') {
      document.querySelector('.universe').style.fontWeight = 700;
    } else {
      document.querySelector('.universe').style.fontWeight = 400;
    }

    if (route === './src/pages/exploration.html') {
      document.querySelector('.exploration').style.fontWeight = 700;
    } else {
      document.querySelector('.exploration').style.fontWeight = 400;
    }

  }

}
