import debounce from 'lodash.debounce';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from '/js/fetchCountries.js';
defaults.styling = 'brighttheme';
defaults.icons = 'brighttheme';

defaultModules.set(PNotifyMobile, {});

const inputRef = document.querySelector('.search');
const searchResultsRef = document.querySelector('.search-results');

inputRef.addEventListener('input', debounce(inputHandler, 500));
function inputHandler(event) {
  searchResultsRef.innerHTML = '';
  const countrySearchName = event.target.value;
  fetchCountries(countrySearchName)
    .then(result => {
      if (result.length > 10) {
        alert({
          text: 'Найдено слишком много совпадений. Пожалуйста, введите более конкретный запрос!',
          type: 'error',
          delay: 3000,
        });
      }
      if (result.length >= 2 && result.length <= 10) {
        searchResultsRef.insertAdjacentHTML(
          'beforeend',
          createListCountriesMarkup(result),
        );
      }
      if (result.length === 1) {
        searchResultsRef.insertAdjacentHTML(
          'beforeend',
          createCountryPropertiesMarkup(result),
        );
      }
    })
    .catch(console.log);
}

function createCountryPropertiesMarkup(result) {
  const markupLanguage = result[0].languages.reduce((acc, item) => {
    acc += `<li>${item.name}</li>`;
    return acc;
  }, '');
  const markupCountry = `<h2 class='country-name'>${result[0].name}</h2>
      <div class='wrapper'><div class='country-properties'>
      <p><span class='country-property'>Capital: </span>${result[0].capital}</p>
      <p><span class='country-property'>Population: </span>${result[0].population}</p>
      <h3 class='country-property'>Languages:</h3><ul>${markupLanguage}</ul></div>
      <img height='400px' src="${result[0].flag}" alt="flag"></img></div>`;
  return markupCountry;
}

function createListCountriesMarkup(result) {
  const markup =
    '<ul class="country-list">' +
    result.reduce((acc, item) => {
      acc += `<li>${item.name}</li>`;
      return acc;
    }, '') +
    '</ul>';
  return markup;
}

