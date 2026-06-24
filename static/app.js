(function () {
'use strict';
var header = document.querySelector('.site-header');
var toggle = document.querySelector('.nav-toggle');
if (toggle && header) {
toggle.addEventListener('click', function () {
var open = header.classList.toggle('nav-open');
toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('.site-nav a').forEach(function (a) {
a.addEventListener('click', function () { header.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); });
});
}
var widget = document.getElementById('app-widget');
if (!widget) return;
var tok = widget.getAttribute('data-token') || 'ETH';
var amount = parseFloat(widget.getAttribute('data-amount') || '1000');
var SCEN = [
{ name: 'Conservative', apy: 3 },
{ name: 'Base', apy: 5 },
{ name: 'Higher', apy: 8 }
];
var apyEl = widget.querySelector('[data-apy]');
var rewardEl = widget.querySelector('[data-reward]');
var scenEl = widget.querySelector('[data-scenario]');
var amtEl = widget.querySelector('.stake-amt');
var tokEl = widget.querySelector('.stake-tok');
var i = 1;
function fmt(n) { return n.toLocaleString('en-US', { maximumFractionDigits: 2 }); }
function render() {
var s = SCEN[i];
if (tokEl) tokEl.textContent = tok;
if (amtEl) amtEl.value = fmt(amount);
if (apyEl) apyEl.textContent = '~ ' + s.apy + '%*';
if (scenEl) scenEl.textContent = s.name + '*';
if (rewardEl) rewardEl.textContent = '~ ' + fmt(amount * s.apy / 100) + ' ' + tok + '*';
}
function next() { i = (i + 1) % SCEN.length; render(); }
if (tokEl) tokEl.addEventListener('click', next);
if (apyEl) apyEl.addEventListener('click', next);
render();
})();
