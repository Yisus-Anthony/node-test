
async function goToApi() {
  // bajar a la sección
  document.getElementById("api-section").style.display = "block";
    .scrollIntoView({ behavior: "smooth" });

  // llamar a la API
  const res = await fetch("/api");
  const data = await res.json();

  document.getElementById("api-result").textContent =
    data.message;
}
