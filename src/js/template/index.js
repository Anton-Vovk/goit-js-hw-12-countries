// export default function createListCountriesTemplate(data) {
//   const template =
//     '<ul class="country-list">' +
//     data.reduce((acc, item) => {
//       acc += `<li>${item.name}</li>`;
//       return acc;
//     }, '') +
//     '</ul>';
//   return template;
// }

// export default function createCountryPropertiesTemplate(data) {
//   const templateLang = data[0].languages.reduce((acc, item) => {
//     acc += `<li>${item.name}</li>`;
//     return acc;
//   }, '');
//   const templateCountry = `<h2 class='country-name'>${data[0].name}</h2>
//       <div class='wrapper'><div class='country-properties'>
//       <p><span class='country-property'>Capital: </span>${data[0].capital}</p>
//       <p><span class='country-property'>Population: </span>${data[0].population}</p>
//       <h3 class='country-property'>Languages:</h3><ul>${templateLang}</ul></div>
//       <img height='400px' src="${data[0].flag}" alt="flag"></img></div>`;
//   return templateCountry;
// }
