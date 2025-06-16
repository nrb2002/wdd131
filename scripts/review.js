/* ─────────────────────────────────────────────────────────
 *           DISPLAY SUBMITTED DATA (GET method)
 * ───────────────────────────────────────────────────────── */
const params = new URLSearchParams(location.search);
const summary   = document.querySelector("#reviewSummary");
const counterEl = document.querySelector("#counterLine");

/* Build a quick summary list */
const ul = document.createElement("ul");
params.forEach((val, key) => {
  const li = document.createElement("li");
  li.textContent = `${key}: ${val}`;
  ul.appendChild(li);
});
summary.appendChild(ul);

/* ─────────────────────────────────────────────────────────
 *           localStorage REVIEW COUNTER
 * ───────────────────────────────────────────────────────── */
const STORAGE_KEY = "reviewCount";
let count = Number(localStorage.getItem(STORAGE_KEY)) || 0;
count += 1;
localStorage.setItem(STORAGE_KEY, count);

counterEl.textContent = `Total reviews you’ve submitted in this browser: ${count}.`;
