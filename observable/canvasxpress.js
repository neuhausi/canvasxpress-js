// CanvasXpress for Observable — https://canvasxpress.org
//
// An ES module usable in Observable Framework (`import {canvasxpress} from
// "./canvasxpress.js"`) and, by pasting the function, in classic Observable
// notebooks. `canvasxpress(spec)` returns a self-contained <iframe> element that
// loads the CanvasXpress library from the CDN and renders one interactive chart,
// so there is no DOM-attach timing to manage and nothing to bundle.

export const CX_JS = "https://www.canvasxpress.org/dist/canvasXpress.min.js";
export const CX_CSS = "https://www.canvasxpress.org/dist/canvasXpress.css";

// Build the self-contained HTML document for one chart. Exported so it can be
// unit-tested or reused without a DOM.
export function renderHTML(spec = {}, { width = 700, height = 450 } = {}) {
  const data = spec.data || {};
  const config = Object.assign({}, spec.config || {});
  const target = "cx_" + Math.random().toString(36).slice(2);
  const payload = JSON.stringify({
    renderTo: target, data, config, width, height
  });
  return (
    '<!doctype html><html><head><meta charset="utf-8">' +
    '<link rel="stylesheet" href="' + CX_CSS + '">' +
    '<script src="' + CX_JS + '"></script></head>' +
    '<body style="margin:0">' +
    '<canvas id="' + target + '" width="' + width + '" height="' + height + '"></canvas>' +
    '<script>(function(){' +
    'function draw(){new CanvasXpress(' + payload + ');}' +
    'if(window.CanvasXpress){draw();}' +
    'else{var s=document.querySelector(\'script[src="' + CX_JS + '"]\');' +
    'if(s){s.addEventListener("load",draw);}}' +
    '})();</script></body></html>'
  );
}

// Return an <iframe> element rendering the chart. `spec` is `{data, config}` —
// the same object passed to `new CanvasXpress({...})`.
export function canvasxpress(spec = {}, options = {}) {
  const width = options.width || 700;
  const height = options.height || 450;
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", width);
  iframe.setAttribute("height", height + 15);
  iframe.style.border = "none";
  iframe.srcdoc = renderHTML(spec, { width, height });
  return iframe;
}

export default canvasxpress;
