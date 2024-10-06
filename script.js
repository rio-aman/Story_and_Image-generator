document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("storyForm");
  const genreSelect = document.getElementById("genre");
  const lengthSelect = document.getElementById("length");
  const nameInput = document.getElementById("name");
  const placeInput = document.getElementById("place");
  const enemyPlaceInput = document.getElementById("enemy_place");
  const meetingPlaceInput = document.getElementById("meeting_place");
  const meetingLabel = document.getElementById("meeting_label");
  const storyOutput = document.getElementById("storyOutput");
  const limitMessage = document.getElementById("limitMessage");

  console.log(form);

  // Initially remove padding/margin
  form.classList.remove("with-padding");
  

  // Fetch data from JSON file
  fetch("storyData.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("data : ", data);
      genreSelect.value = data.genre || "" ;
      lengthSelect.value = data.length || "";
      nameInput.value = data.name || "";
      placeInput.value = data.place || "";
      enemyPlaceInput.value = data.enemy_place || "";
      meetingPlaceInput.value = data.meeting_place || "";
    })
    .catch((error) => console.error("Error loading JSON:", error));

  // Display additional input for "Romance" genre
  genreSelect.addEventListener("change", () => {
    console.log("1111111111111111111111111111")
    if (genreSelect.value === "romance") {
      meetingPlaceInput.classList.remove("hidden");
      meetingLabel.classList.remove("hidden");
    } else {
      meetingPlaceInput.classList.add("hidden");
      meetingLabel.classList.add("hidden");
    }
    console.log("222222222222222222222222222")
  });

  // Generate story when form is submitted
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Hide story output initially
    storyOutput.classList.add("hidden");
    form.classList.remove("with-padding");

    // Gather input data
    const genre = genreSelect.value;
    const length = lengthSelect.value;
    const name = nameInput.value;
    const place = placeInput.value;
    const enemyPlace = enemyPlaceInput.value;
    const meetingPlace = meetingPlaceInput.value;

    

    // Call the AI API to generate a story
    generateStoryWithAI(genre, length, name, place, enemyPlace, meetingPlace)
      .then((story) => {
        console.log("story : ", story);
        // Display the story on the page
        // console.log(!story)
        if (story) {
          storyOutput.innerHTML = `<h2>Generated Story by Gemini AI</h2><p>${story}</p>`;
          // Show the story output div when the story is generated
          storyOutput.classList.remove("hidden");
          form.classList.add("with-padding"); // Add padding/margin when data exists
      
        } else {
          storyOutput.innerHTML = '<h1>Loading......................... </h1>';
        }
      })
      .catch((error) => {
        // Display an error message if the story generation fails
        storyOutput.innerHTML = `<p>Failed to generate story: ${error.message}</p>`;
        storyOutput.classList.remove("hidden");

      });
  });

  // Function to call AI API for story generation
async function generateStoryWithAI(genre, length, name, place, enemyPlace, meetingPlace) {
  const apiKey = "AIzaSyCI1NL5htAgGL9dFHXBiReIkdH-S_PLZHA";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `Generate a ${length} story in the ${genre} genre. The main character is ${name}, located in ${place}. They are up against their enemy from ${enemyPlace} and will meet in ${meetingPlace}.`,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response:", data);

    // Ensure you log or check the exact structure of the response
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No story generated. Try again later.";
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

});


