function main() {
  const canvas = document.querySelector('#gl');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('unchi');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener('DOMContentLoaded', main);
