let marvelHeroes = [
  {
    name: "Thor",
  },
  {
    name: "Spider Man",
  },
];

let dcHeroes = [
  {
    name: "Superman",
  },
  {
    name: "Batman",
  },
  {
    name: "Deadpool",
  },
];

Array.prototype.heroesRender = function (universe) {
  let Rs = [];
  if (universe === `marvel`) {
    Rs = marvelHeroes
        .map(function (hero) {
        return `<tr>
<td align="center">${hero.name}</td>
<td align="center">
    <img src="images/${universe}/${hero.name.toLowerCase().replace(" ", "")}.svg" 
    width="50px">
</td>
</tr>`;
      })
      .join(``);
  }else{
    Rs = dcHeroes
        .map(function (hero) {
      return `<tr>
<td align="center">${hero.name}</td>
<td align="center">
  <img width:  src="images/${universe}/${hero.name.toLowerCase().replace(" ", "")}.svg"
   width="50px">
</td>
</tr>`;
    })
    .join(``);
  }
  return Rs;
};

let Mh = [];
let Dh = [];

Mh.push(marvelHeroes.heroesRender(`marvel`));
Dh.push(marvelHeroes.heroesRender(`dc`));

document.write(`<table border = "1" width="600px">
    <thead>
        <tr>
            <th>Name</th>
            <th>Icon</th>
        </tr>
    </thead>
    <tbody>
    ${Mh} 
</tbody>
</table>`);

document.write(`<table border = "1" width="600px" style="margin-top:40px">
    <thead>
        <tr>
            <th>Name</th>
            <th>Icon</th>
        </tr>
    </thead>
    <tbody>
    ${Dh} 
</tbody>
</table>`);
