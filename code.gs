
("use strict");

const Client = {
  prop: PropertiesService.getScriptProperties(),
  cache: CacheService.getScriptCache(),
  globalThis: globalThis,
};

GOOGLEMAPS.init({ client: Client })

const onInstall = (e) => onOpen(e)
const onOpen = (e) => GOOGLEMAPS.onOpen(e)
function callGsServer() { }
