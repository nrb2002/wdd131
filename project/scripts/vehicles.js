/* ─────────────────────────────────────────────────────────
 *           VehicleS LIST
 * ───────────────────────────────────────────────────────── */
/** 
 * populate the Vehicle Name options where the array's name field is used for the select option display and the array's id is used for the value field.
 * */ 
const vehicles = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

/* ─────────────────────────────────────────────────────────
 *           DYNAMIC SELECT  (Vehicle Name)
 * ───────────────────────────────────────────────────────── */
const selectVehicle = document.querySelector("#vehicleName");

vehicles.forEach(vehicle => {
  const option = document.createElement("option");
  option.value = vehicle.id;          // value should be ID
  option.textContent = vehicle.name;  // visible text is name
  selectVehicle.appendChild(option);
});
