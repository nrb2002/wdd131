/* ─────────────────────────────────────────────────────────
 *           DATA SOURCE  (could come from API)
 * ───────────────────────────────────────────────────────── */
const products = [
  { id: 1001, name: "SuperWidget 3000" },
  { id: 1002, name: "HyperGadget Pro" },
  { id: 1003, name: "MegaTool X" },
  { id: 1004, name: "NanoDevice Lite" }
];

/* ─────────────────────────────────────────────────────────
 *           DYNAMIC SELECT  (Product Name)
 * ───────────────────────────────────────────────────────── */
const selectEl = document.querySelector("#productName");

products.forEach(prod => {
  const option = document.createElement("option");
  option.value = prod.id;          // value should be ID
  option.textContent = prod.name;  // visible text is name
  selectEl.appendChild(option);
});

/* ─────────────────────────────────────────────────────────
 *           FOOTER YEAR
 * ───────────────────────────────────────────────────────── */
document.querySelector("#year").textContent = new Date().getFullYear();

/* (Why do all rating radios share the SAME 'name'?  
   Because radios with identical name values form an exclusive
   group—users can pick ONLY ONE option in that set.) */
