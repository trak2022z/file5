document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";


function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}



//
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

const cookieValue2 = document.cookie
  .split('; ')
  .find(row => row.startsWith('test2='))
  .split('=')[1];

function showCookieValue2() {
  const output = document.getElementById('cookie-value')
  output.textContent = '> ' + cookieValue2
}

function clearOutputCookieValue() {
  const output = document.getElementById('cookie-value')
  output.textContent = ''
}