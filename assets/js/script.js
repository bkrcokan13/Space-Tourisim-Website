document.addEventListener("DOMContentLoaded", () => {
  const destinationLists = document.querySelectorAll(".destination-list-item");
  const containerDestination = document.querySelector(".container-destination");
  const destinationPicture = document.getElementById("destination-picture");
  let indexData;

  // Fetch Json File (Local)
  fetch("assets/data/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Json file response is failed ! " + response.statusText
        );
      }
      return response.json();
    })
    .then((data) => {
      indexData = data["destinations"];

      if (destinationLists.length > 0) {
        destinationLists[0].classList.add("selected");
      }

      showDestination(0);
    })
    .catch((error) => {
      console.error("Fetch is failed", error);
    });

  // Her bir liste öğesine click eventi ekle
  destinationLists.forEach((val, idx) => {
    val.addEventListener("click", (event) => {
      event.preventDefault();

      destinationLists.forEach((item) => {
        item.classList.remove("selected");
      });
      val.classList.add("selected");

      showDestination(idx);
    });
  });

  // İstenilen hedefi göstermek için kullanılan fonksiyon
  function showDestination(index) {
    destinationPicture.src = indexData[index]["images"]["png"];
    containerDestination.innerHTML = `
      <div class="destination-title">
        <h1>${indexData[index]["name"]}</h1>
      </div>
      <div class="destination-description">
        <p>${indexData[index]["description"]}</p>
      </div>
      <hr class="solid" style="color: black;">
      <div class="destination-distance-info">
        <div class="destination-avg-distance">
          <p>AVG.DISTANCE</p>
          <h4>${indexData[index]["distance"]}</h4>
        </div>
        <div class="destination-est-time">
          <p>EST. TRAVEL TIME</p>
          <h4>${indexData[index]["travel"]}</h4>
        </div>
      </div>`;
  }
});
