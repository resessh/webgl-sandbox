import { initShaderProgram } from './shader';
import vertexShaderSource from './shaders/vertex.glsl';
import fragmentShaderSource from './shaders/fragment.glsl';
import { createVbo } from './vbo';

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

  const attLocation = gl.getAttribLocation(shaderProgram, 'position');

  const vertexPosition = [
    // X,   Y,   Z
    [0.0, Math.sqrt(3) / 2, 0.0],
    [1.0, -Math.sqrt(3) / 2, 0.0],
    [-1.0, -Math.sqrt(3) / 2, 0.0],
  ].flat();

  const vbo = createVbo(gl, vertexPosition);

  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.enableVertexAttribArray(attLocation);
  gl.vertexAttribPointer(attLocation, 3, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.flush();
}

window.addEventListener('DOMContentLoaded', main);
