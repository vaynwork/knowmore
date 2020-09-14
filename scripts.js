function json2Table(json) {
  let cols = Object.keys(json[0]);


  //Map over columns, make headers,join into string
  let headerRow = cols
    .map(col => `<th>${col}</th>`)
    .join("");

  //map over array of json objs, for each row(obj) map over column values,
  //and return a td with the value of that object for its column
  //take that array of tds and join them
  //then return a row of the tds
  //finally join all the rows together
  let rows = json
    .map(row => {
      let tds = cols.map(col => `<td>${row[col]}</td>`).join("");
      return `<tr>${tds}</tr>`;
    })
    .join("");

  //build the table
  const table = `
	<table>
		<thead>
			<tr>${headerRow}</tr>
		<thead>
		<tbody>
			${rows}
		<tbody>
	<table>`;

  return table;
}

data =[
  {
    "name": "customise-spotify-with-spicetify",
    "tags": [
      "spotify",
      "cusomisation",
      "cli"
    ]
  },
  {
    "name": "fl-studio-tips",
    "tags": [
      "fl-studio",
      "music"
    ]
  },
  {
    "name": "blender-addons",
    "tags": [
      "blender",
      "addons",
      "3d-modelling"
    ]
  }
]


output = document.getElementById('output')
output.innerHTML = json2Table(data)
