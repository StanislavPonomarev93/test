document.getElementById('title').innerHTML = `Width: ${document.getElementById('container').offsetWidth}, Height: ${document.getElementById('container').offsetHeight}`;
document.getElementById('input').addEventListener('focus', function () {
  document.getElementById('title').innerHTML = `Width: ${document.getElementById('container').offsetWidth}, Height: ${document.getElementById('container').offsetHeight}`;
});