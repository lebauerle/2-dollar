/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Array of student objects
const data = [
  {
    name: {
      title: "Miss",
      first: "Bundesländerserie Bayern",
      last: "Schloss Neuschwanstein",
    },
    land: "Deutschland",
    registered: {
      date: "2012",
      age: 15,
    },
    picture: {
      large: "./img/2dollar/Deutschland_bayern_2012.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
    },
  },
  {
    name: {
      title: "Mrs",
      first: "Bundesländerserie Bremen",
      last: "Rathaus und Roland",
    },
    land: "Deutschland",
    registered: {
      date: "2010",
      age: 14,
    },
    picture: {
      large: "./img/2dollar/Deutschland_bremen_2010.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Baden Würtemberg",
      last: "Kloster Maulbronn",
    },
    land: "Deutschland",
    registered: {
      date: "2013",
      age: 7,
    },
    picture: {
      large: "./img/2dollar/Deutschland_badenwürtemberg_2013.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Hamburg",
      last: "St. Michaeliskirche",
    },
    land: "Deutschland",
    registered: {
      date: "2008",
      age: 13,
    },
    picture: {
      large: "./img/2dollar/Deutschland_hamburg_2008.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Bundesländerserie Hessen",
      last: "Paulskirche in Frankfurt",
    },
    land: "Deutschland",
    registered: {
      date: "2015",
      age: 16,
    },
    picture: {
      large: "./img/2dollar/Deutschland_hessen_2015.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Schleswig Holstein",
      last: "Holstentor",
    },
    land: "Deutschland",
    registered: {
      date: "2006",
      age: 13,
    },
    picture: {
      large: "./img/2dollar/Deutschland_schleswigholstein_2006.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Niedersachsen",
      last: "St. Michaeliskirche in Hildesheim",
    },
    land: "Deutschland",
    registered: {
      date: "2016",
      age: 4,
    },
    picture: {
      large: "./img/2dollar/Deutschland_niedersachsen_2015.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Rheinland-Pfalz",
      last: "Porta Nigra in Trier",
    },
    land: "Deutschland",
    registered: {
      date: "2017",
      age: 4,
    },
    picture: {
      large: "./img/2dollar/Deutschland_rheinland-pfalz_2017.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Saarland",
      last: "Ludwigskirche in Saarbrücken",
    },
    land: "Deutschland",
    registered: {
      date: "2009",
      age: 4,
    },
    picture: {
      large: "./img/2dollar/Deutschland_saarland_2009.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Berlin",
      last: "Schloss Charlottenburg",
    },
    land: "Deutschland",
    registered: {
      date: "2018",
      age: 4,
    },
    picture: {
      large: "./img/2dollar/Deutschland_berlin_2018.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Sachsen",
      last: "Dresdner Zwinger",
    },
    land: "Deutschland",
    registered: {
      date: "2016",
      age: 4,
    },
    picture: {
      large: "./img/2dollar/Deutschland_sachsen_2016.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Bundesländerserie Mecklenburg Vorpommern",
      last: "Schweriner Schloss",
    },
    land: "Deutschland",
    registered: {
      date: "2007",
      age: 4,
    },
    picture: {
      large: "./img/2dollar/Deutschland_mecklenburgvorpommern_2007.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
  }
];
