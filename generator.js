// Cat Character Generator
// Data pools for procedural generation

const CatGenerator = {
    // Name pools
    names: [
        "Mochi", "Luna", "Oliver", "Whiskers", "Shadow", "Mittens", "Felix", "Nala",
        "Simba", "Bella", "Max", "Charlie", "Lucy", "Leo", "Cleo", "Jasper",
        "Smokey", "Tiger", "Oscar", "Ginger", "Oreo", "Pepper", "Peanut", "Chloe",
        "Zoe", "Salem", "Milo", "Loki", "Thor", "Misty", "Snowball", "Patches",
        "Binx", "Bagheera", "Duchess", "Figaro", "Tom", "Sylvester", "Garfield",
        "Crookshanks", "Mr. Whiskers", "Princess", "Duke", "Boots", "Socks", "Bandit"
    ],
    
    // Appearance traits
    sizes: ["Tiny", "Small", "Medium-sized", "Large", "Chunky"],
    
    colors: [
        "cream-colored", "jet black", "pure white", "orange tabby", "gray",
        "calico", "tortoiseshell", "tuxedo", "silver", "golden",
        "brown tabby", "blue-gray", "seal point", "ginger", "smoke-colored"
    ],
    
    patterns: [
        "with striped markings", "with spotted patterns", "with a white chest",
        "with white paws", "with a distinctive M on forehead", "with ticked fur",
        "with color-point markings", "with a solid coat", "with patches",
        "with tiger stripes", "with mackerel patterns"
    ],
    
    features: [
        "bright blue eyes", "green eyes", "amber eyes", "one blue and one green eye",
        "large ears", "small rounded ears", "a fluffy tail", "a short tail",
        "long whiskers", "a pink nose", "a black nose", "white whiskers",
        "tufted ears", "a collar with a bell", "a sleek coat", "extra fluffy fur"
    ],
    
    // Personality traits
    personalities: [
        "Affectionate", "Independent", "Playful", "Shy", "Bold", "Curious",
        "Lazy", "Energetic", "Anxious", "Confident", "Gentle", "Mischievous",
        "Loyal", "Aloof", "Friendly", "Temperamental", "Calm", "Skittish",
        "Protective", "Social", "Quiet", "Vocal", "Adventurous", "Cautious"
    ],
    
    // Behavior habits
    habits: [
        "follows people everywhere", "stares at walls", "meows at 3am",
        "knocks things off tables", "sits in boxes", "chatters at birds",
        "brings 'gifts' to owners", "steals food from plates", "hides under beds",
        "scratches furniture", "zooms around at night", "grooms obsessively",
        "sleeps in sinks", "demands attention at dawn", "headbutts for affection",
        "kneads blankets constantly", "chirps instead of meows", "plays fetch",
        "opens doors", "turns on faucets", "talks back when scolded"
    ],
    
    // Likes
    likes: [
        "warm laundry", "string toys", "window sunlight", "cardboard boxes",
        "catnip", "chin scratches", "high perches", "feather toys",
        "laser pointers", "belly rubs", "treats", "scratching posts",
        "paper bags", "climbing trees", "watching TV", "tuna",
        "cozy blankets", "computer keyboards", "hiding spots", "interactive toys",
        "being brushed", "bird watching", "running water", "empty bags"
    ],
    
    // Dislikes
    dislikes: [
        "vacuum cleaners", "loud footsteps", "closed doors", "water",
        "being picked up", "nail trims", "car rides", "strangers",
        "other cats", "dogs", "sudden movements", "being ignored",
        "empty food bowls", "bath time", "fireworks", "thunder",
        "the vet", "citrus smells", "being woken up", "cucumbers",
        "being stared at", "crowded spaces", "rough petting", "being alone"
    ],
    
    // Backstory elements
    origins: [
        "was adopted from a crowded shelter",
        "was found as a stray kitten",
        "came from a foster home",
        "was born in a barn",
        "was rescued from the streets",
        "came from a loving breeder",
        "was abandoned in a box",
        "wandered into someone's yard",
        "was part of a litter found outdoors",
        "came from a hoarding situation"
    ],
    
    pastExperiences: [
        "now gets nervous when left alone",
        "learned to trust humans slowly",
        "developed a love for routine",
        "became very protective of their space",
        "formed strong bonds with one person",
        "learned to be independent",
        "developed unique communication skills",
        "became wary of sudden changes",
        "grew to love other animals",
        "learned to ask for what they want"
    ],
    
    currentBehavior: [
        "bonds deeply with people who are gentle",
        "seeks out quiet companionship",
        "loves to be the center of attention",
        "prefers observing from a distance",
        "thrives in calm environments",
        "enjoys interactive play sessions",
        "appreciates a predictable schedule",
        "shows affection on their own terms",
        "guards their favorite person",
        "welcomes all visitors warmly"
    ],
    
    // Helper function to pick random element
    random(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    
    // Helper function to pick N unique random elements
    randomMultiple(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },
    
    // Generate a complete cat character
    generate() {
        const name = this.random(this.names);
        
        // Appearance
        const size = this.random(this.sizes);
        const color = this.random(this.colors);
        const pattern = this.random(this.patterns);
        const feature = this.random(this.features);
        const appearance = `${size} ${color} cat ${pattern} and ${feature}`;
        
        // Personality (pick 3 unique traits)
        const personalityTraits = this.randomMultiple(this.personalities, 3);
        const personality = personalityTraits.join(", ");
        
        // Habits (pick 3 unique habits)
        const habitList = this.randomMultiple(this.habits, 3);
        const habits = habitList.join(", ");
        
        // Likes (pick 3-4 items)
        const likeCount = 3 + Math.floor(Math.random() * 2);
        const likeList = this.randomMultiple(this.likes, likeCount);
        const likes = likeList.join(", ");
        
        // Dislikes (pick 2-3 items)
        const dislikeCount = 2 + Math.floor(Math.random() * 2);
        const dislikeList = this.randomMultiple(this.dislikes, dislikeCount);
        const dislikes = dislikeList.join(", ");
        
        // Backstory
        const origin = this.random(this.origins);
        const experience = this.random(this.pastExperiences);
        const current = this.random(this.currentBehavior);
        const backstory = `${name} ${origin} and ${experience}, but ${current}.`;
        
        return {
            name,
            appearance,
            personality,
            habits,
            likes,
            dislikes,
            backstory
        };
    }
};

// UI Controller
class CatGeneratorUI {
    constructor() {
        this.generateBtn = document.getElementById('generateBtn');
        this.catDisplay = document.getElementById('catDisplay');
        this.historyList = document.getElementById('historyList');
        this.currentCat = null;
        this.history = [];
        
        this.generateBtn.addEventListener('click', () => this.generateNewCat());
    }
    
    generateNewCat() {
        this.currentCat = CatGenerator.generate();
        this.displayCat(this.currentCat);
        this.addToHistory(this.currentCat.name);
    }
    
    displayCat(cat) {
        document.getElementById('catName').textContent = cat.name;
        document.getElementById('catAppearance').textContent = cat.appearance;
        document.getElementById('catPersonality').textContent = cat.personality;
        document.getElementById('catHabits').textContent = cat.habits;
        document.getElementById('catLikes').textContent = cat.likes;
        document.getElementById('catDislikes').textContent = cat.dislikes;
        document.getElementById('catBackstory').textContent = cat.backstory;
        
        this.catDisplay.classList.remove('hidden');
        
        // Smooth scroll to display
        this.catDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    addToHistory(name) {
        this.history.push(name);
        
        // Keep only last 10 in history
        if (this.history.length > 10) {
            this.history.shift();
        }
        
        this.updateHistoryDisplay();
    }
    
    updateHistoryDisplay() {
        this.historyList.innerHTML = this.history
            .map(name => `<div class="history-item">${name}</div>`)
            .join('');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CatGeneratorUI();
});
