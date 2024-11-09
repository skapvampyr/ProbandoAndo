document.getElementById("survey-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch("URL_DEL_SCRIPT_DE_GOOGLE_APPS", {
    method: "POST",
    body: JSON.stringify(data),
  })
  .then(response => response.text())
  .then(data => {
    if (data.includes("Respuestas recibidas")) {
      alert("Gracias por tus respuestas. Ahora puedes girar la ruleta.");
    } else {
      alert(data);
    }
  })
  .catch(error => console.error("Error:", error));
});
