async function loadApi() {
  const res = await fetch("/api");
  const data = await res.json();
  document.getElementById("status").textContent = data.message;
}
