# CMPM147-Midterm: Procedural Cat Character Generator

A procedural generator that creates unique cat characters for use in games, stories, or simulation systems. The tool generates cats with different combinations of traits such as personality, appearance, behavior quirks, backstory, and needs.

## Features

- **Procedural Generation**: Creates unique cat NPCs with diverse traits
- **Rich Character Attributes**:
  - **Appearance**: Fur color, pattern, eye color, and size
  - **Personality**: Multiple personality traits (2-3 per cat)
  - **Behavior Quirks**: Unique habits and mannerisms (2-4 per cat)
  - **Backstory**: Origin story for each cat
  - **Needs**: Care requirements and preferences (2-3 per cat)
  - **Special Traits**: Occasionally unique characteristics (50% chance)
- **Interactive Web Demo**: Visual interface to generate and view cats
- **Export Options**: Download as JSON or copy as formatted text
- **Reusable System**: Generate single cats or batches of multiple cats

## Demo

Open `index.html` in a web browser to see the interactive demo.

## Usage

### Basic Usage (JavaScript)

```javascript
// Create a generator instance
const generator = new CatGenerator();

// Generate a single cat
const cat = generator.generate();
console.log(cat);

// Generate multiple cats
const cats = generator.generateMultiple(10);

// Format cat for display
const formatted = generator.formatCat(cat);
console.log(formatted);

// Export as JSON
const json = generator.exportJSON(cat);
```

### Cat Object Structure

Each generated cat has the following structure:

```javascript
{
  id: "cat_1234567890_1234",
  name: "Whiskers",
  age: 5,
  appearance: {
    furColor: "Orange",
    furPattern: "Striped",
    eyeColor: "Green",
    size: "Medium"
  },
  personality: ["Curious", "Playful", "Friendly"],
  behaviors: [
    "Loves to knock things off tables",
    "Always sleeps in strange positions",
    "Obsessed with boxes"
  ],
  backstory: "Rescued from a shelter as a kitten",
  needs: [
    "Regular playtime",
    "Window perch for bird watching",
    "Interactive toys"
  ],
  specialTrait: "Extra toes (polydactyl)"
}
```

## Files

- `cat-generator.js` - Core generator class with procedural logic
- `index.html` - Interactive web demo interface
- `app.js` - Application logic connecting UI to generator
- `style.css` - Styling for the web interface

## Integration into Projects

### In a Game
```javascript
// Generate NPCs for a cat cafe game
const catCafe = generator.generateMultiple(20);
catCafe.forEach(cat => {
  spawnNPC(cat.name, cat.appearance, cat.personality);
});
```

### In a Story
```javascript
// Generate a protagonist
const protagonist = generator.generate();
console.log(`Meet ${protagonist.name}, a ${protagonist.age}-year-old ${protagonist.appearance.size} cat...`);
```

### In a Simulation
```javascript
// Generate a population with needs tracking
const population = generator.generateMultiple(50);
population.forEach(cat => {
  simulationEngine.addEntity(cat, cat.needs);
});
```

## Customization

You can extend the generator by modifying the trait pools in `cat-generator.js`:

```javascript
this.traits = {
  names: [...],      // Add more cat names
  furColors: [...],  // Add more fur colors
  personalities: [...], // Add more personality traits
  // etc.
};
```

## License

MIT License - Feel free to use this generator in your projects! 
