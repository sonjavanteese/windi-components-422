export const appData = [
  {
    "id": 0,
    "slug": "start",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "Startseite",
      "bg": "https://nwp-cgn.de/img/poser/imgA02.png"
    },
    "link": {
      "path": "/",
      "name": "Start",
      "icon": "home",
      "sub": false
    }
  },
  {
    "id": 1,
    "slug": "serien",
    "head": {
      "titel": "Nwp-Studio",
      "sub": "South Park Collection",
      "bg": "https://nwp-cgn.de/img/poser/imgA04.png"
    },
    "link": {
      "path": "/serien",
      "name": "Serien",
      "icon": "database",
      "sub": false
    }
  },
  {
    "id": 2,
    "slug": "studio",
    "head": {
      "titel": "Blackburn",
      "sub": "Classic Collection",
      "bg": "https://nwp-cgn.de/img/poser/imgA05.png"
    },
    "link": {
      "path": "/studio",
      "name": "Studio",
      "icon": "database",
      "sub": false
    }
  }
];  
export const navData = appData.map((x) => x.head);
export const pageData = appData.map((x) => x.head);

export default appData;

