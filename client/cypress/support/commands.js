/* MAP */

// For some interactions, we need access to the underlying map
// Below adapted from https://github.com/codeforcologne/edelgard-map
Cypress.Commands.add('getMap', () => {
  return cy.window().its('underlyingMap', {timeout: 10000});
});

Cypress.Commands.add('waitForMove', (map) => {
  return new Cypress.Promise((resolve) => {
    map.on('moveend', resolve);
  });
});

Cypress.Commands.add('panTo', (map, lngLat) => {
  map.panTo(lngLat);
  cy.waitForMove(map);
});

Cypress.Commands.add('getMapCanvas', () => {
  return cy.get('.maplibregl-canvas');
});

Cypress.Commands.add('waitForMapIdle', (map) => {
  return new Cypress.Promise((resolve) => {
    map.once('idle', resolve);
  });
});
