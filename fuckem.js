let fucker = null
document.addEventListener('contextmenu', function (e) {
  fucker = e.target
})
//noinspection JSDeprecatedSymbols it's not the same
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  try { fucker.parentElement.removeChild(fucker) } catch (lmao) {/*as if i care*/}
})