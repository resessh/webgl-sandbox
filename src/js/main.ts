import { initShaderProgram } from './shader';
import vertexShaderSource from './shaders/vertex.glsl';
import fragmentShaderSource from './shaders/fragment.glsl';

console.log(vertexShaderSource); // eslint-disable-line

function main() {
  const canvas: HTMLCanvasElement = document.querySelector(
    '#gl',
  ) as HTMLCanvasElement;
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('unchi');
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const shaderProgram = initShaderProgram(
    gl,
    vertexShaderSource,
    fragmentShaderSource,
  );

  gl.useProgram(shaderProgram);
}

window.addEventListener('DOMContentLoaded', main);
