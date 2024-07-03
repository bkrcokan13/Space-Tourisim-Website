//* Tab navigation And Loader
document.addEventListener("DOMContentLoaded", () => {
  const destinationLists = document.querySelectorAll(".destination-list-item");
  const containerDestination = document.querySelector(".container-destination");
  const destinationPicture = document.getElementById("destination-picture");
  let indexData;
  

  //* The first index is initialized when the page is started.
  if (destinationLists.length > 0) {
    destinationLists[0].classList.add("selected");
  }
  
  destinationLists.forEach((val, idx) => {
    val.addEventListener("click", (event) => {
      // Block Page Load
      event.preventDefault();

      destinationLists.forEach((item) => {
        item.classList.remove("selected");
      });

      val.classList.add("selected");

      console.log("INDEX : " + idx);
      
      //!Json fetch should be relocated, put outside the loop so that it can be fetched in the first index.
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
         indexData = data["destinations"][idx];

          destinationPicture.src = indexData["images"]["png"];
          containerDestination.innerHTML = `
                    <div class="destination-title">
                        <h1>${indexData["name"]}</h1>
                    </div>
                    <div class="destination-description">
                        <p>${indexData["description"]}</p>
                    </div>
                    <hr class="solid" style="color: black;">
                    <div class="destination-distance-info">
                        <div class="destination-avg-distance">
                            <p>AVG.DISTANCE</p>
                            <h4>${indexData["distance"]}</h4>
                        </div>
                        <div class="destination-est-time">
                            <p>EST. TRAVEL TIME</p>
                        <h4>${indexData["travel"]}</h4>
                    </div>
              </div>
                `;
        })
        .catch((error) => {
          console.error("Fetch is failed", error);
        });
    });
  });
});

// Fetch Json

document.addEventListener("DOMContentLoaded", () => {});
