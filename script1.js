// const MAX_STORY_COUNT = 5;
// let storyCount = 0;

// const wordCountLimits = {
//     short: { min: 50, max: 100 },
//     medium: { min: 100, max: 200 },
//     long: { min: 200, max: 300 }
// };

// const words = [
//     "adventure", "mystery", "dragon", "sword", "kingdom", "love", "friend", "battle", "forest",
//     "ghost", "courage", "treasure", "journey", "strange", "magical", "hero", "quest", "fear",
//     "darkness", "light", "fantasy", "reveal", "secret", "unknown", "power", "magic", "time",
//     "space", "alien", "detective", "crime", "clue", "solve", "uncover", "friendship", "betrayal",
//     "happiness", "pain", "strength", "weakness", "future", "past"
// ];

// // Random word generator
// function generateRandomWords(wordCount) {
//     let randomWords = [];
//     for (let i = 0; i < wordCount; i++) {
//         const randomIndex = Math.floor(Math.random() * words.length);
//         randomWords.push(words[randomIndex]);
//     }
//     return randomWords.join(" ");
// }

// // Story templates for genres
// const storyTemplates = {
//     "fantasy": {
//         "short": [
//             "{name} was a brave hero in the land of {place}. One day, they embarked on a quest to find the legendary {artifact}.",
//             "In the mystical realm of {place}, {name} discovered they possessed magical abilities."
//         ],
//         "medium": [
//             "{name}, a skilled archer from {place}, was chosen to lead the defense against the invading forces from {enemy_place}.",
//             "In the land of {place}, {name} encountered a fearsome dragon. With bravery and wit, they fought to protect their kingdom."
//         ],
//         "long": [
//             "{name}, a brave hero in the land of {place}, received a call to adventure when a dark sorcerer began terrorizing the villages. With allies gathered, they set out on a perilous quest filled with magic and mystery."
//         ]
//     },
//     // Other genres can be added here
// };

// // Story Generation Function
// document.getElementById('storyForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     if (storyCount >= MAX_STORY_COUNT) {
//         document.getElementById('limitMessage').classList.remove('hidden');
//         document.getElementById('generateButton').disabled = true;
//         return;
//     }

//     const genre = document.getElementById('genre').value;
//     const length = document.getElementById('length').value;
//     const name = document.getElementById('name').value || "Unknown Hero";
//     const place = document.getElementById('place').value || "a distant land";
//     const enemy_place = document.getElementById('enemy_place').value || "a mysterious place";

//     let template = storyTemplates[genre][length][Math.floor(Math.random() * storyTemplates[genre][length].length)];
//     let story = template.replace("{name}", name).replace("{place}", place).replace("{enemy_place}", enemy_place);

//     // Adding a few random words
//     const randomWordCount = Math.floor(Math.random() * (wordCountLimits[length].max - wordCountLimits[length].min)) + wordCountLimits[length].min;
//     const randomWords = generateRandomWords(randomWordCount);
    
//     story += ` ${randomWords}`;

//     document.getElementById('storyOutput').innerHTML = `<h2>Your Story</h2><p>${story.trim()}</p>`;
    
//     storyCount++;
//     if (storyCount >= MAX_STORY_COUNT) {
//         document.getElementById('limitMessage').classList.remove('hidden');
//         document.getElementById('generateButton').disabled = true;
//     }
// });

// // Toggle Love Interest Field
// document.getElementById('genre').addEventListener('change', function() {
//     const genre = this.value;
//     const meetingField = document.getElementById('meeting_place');
//     const meetingLabel = document.getElementById('meeting_label');

//     if (genre === 'romance') {
//         meetingField.classList.remove('hidden');
//         meetingLabel.classList.remove('hidden');
//     } else {
//         meetingField.classList.add('hidden');
//         meetingLabel.classList.add('hidden');
//     }
// });

// // Character Generator
// const characterNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
// const characterOccupations = ["warrior", "mage", "thief", "archer", "healer"];
// const characterTraits = ["brave", "cunning", "wise", "compassionate", "ambitious"];

// function generateCharacter() {
//     const name = document.getElementById("name").value || characterNames[Math.floor(Math.random() * characterNames.length)];
//     const occupation = characterOccupations[Math.floor(Math.random() * characterOccupations.length)];
//     const trait = characterTraits[Math.floor(Math.random() * characterTraits.length)];
//     document.getElementById('characterOutput').innerHTML = `Name: ${name}, Occupation: ${occupation}, Trait: ${trait}`;
// }

// document.getElementById('generateCharacter').addEventListener('click', generateCharacter);

// // Plot Generator
// function generatePlot() {
//     const plots = [
//         "In the heart of {place}, {name} discovers a hidden treasure that holds the key to saving their kingdom.",
//         "{name} must solve the mystery of the missing prince, traveling through {place} and facing challenges along the way."
//     ];
//     const plotTemplate = plots[Math.floor(Math.random() * plots.length)];
//     const plot = plotTemplate.replace("{name}", "A hero").replace("{place}", "a distant land");
//     document.getElementById('plotOutput').innerHTML = `<h3>Your Plot</h3><p>${plot}</p>`;
// }

// document.getElementById('generatePlot').addEventListener('click', generatePlot);

// // Backstory Generator
// function generateBackstory() {
//     const backstories = [
//         "{name} grew up in {place}, facing many hardships that shaped them into the hero they are today.",
//         "Once a common villager in {place}, {name}'s life changed forever after an encounter with a mysterious stranger."
//     ];
//     const backstoryTemplate = backstories[Math.floor(Math.random() * backstories.length)];
//     const backstory = backstoryTemplate.replace("{name}", "A hero").replace("{place}", "a distant land");
//     document.getElementById('backstoryOutput').innerHTML = `<h3>Your Backstory</h3><p>${backstory}</p>`;
// }

// document.getElementById('generateBackstory').addEventListener('click', generateBackstory);

// // Title Generator
// function generateTitle() {
//     const titles = ["The Last Kingdom", "Shadows of the Past", "The Hidden Treasure", "A Hero's Journey"];
//     const title = titles[Math.floor(Math.random() * titles.length)];
//     document.getElementById('titleOutput').innerHTML = `<h3>Your Book Title</h3><p>${title}</p>`;
// }

// document.getElementById('generateTitle').addEventListener('click', generateTitle);

// // Fantasy Story Generator
// function generateFantasyStory() {
//     const fantasyStories = [
//         "In a world filled with magic, {name}, a skilled warrior from {place}, embarks on a quest to find the mythical Stone of Power.",
//         "{name} learns about an ancient prophecy that foretells their rise to greatness as they battle against the dark forces threatening {place}."
//     ];
//     const fantasyStoryTemplate = fantasyStories[Math.floor(Math.random() * fantasyStories.length)];
//     const fantasyStory = fantasyStoryTemplate.replace("{name}", "A brave hero").replace("{place}", "a magical realm");
//     document.getElementById('fantasyStoryOutput').innerHTML = `<h3>Your Fantasy Story</h3><p>${fantasyStory}</p>`;
// }

// document.getElementById('generateFantasyStory').addEventListener('click', generateFantasyStory);

// // Dialog Generator
// function generateDialog() {
//     const dialogs = [
//         "'We must act now, or all will be lost!'",
//         "'You have no idea what you're up against.'",
//         "'Together, we can overcome any obstacle!'",
//         "'The truth will reveal itself in time.'"
//     ];
//     const dialog = dialogs[Math.floor(Math.random() * dialogs.length)];
//     document.getElementById('dialogOutput').innerHTML = `<h3>Your Dialog</h3><p>${dialog}</p>`;
// }

// document.getElementById('generateDialog').addEventListener('click', generateDialog);

// // Save Book Outline
// document.getElementById('saveOutline').addEventListener('click', function() {
//     const outline = document.getElementById('bookOutline').value;
//     document.getElementById('outlineOutput').innerHTML = `<strong>Saved Outline:</strong><p>${outline}</p>`;
// });

