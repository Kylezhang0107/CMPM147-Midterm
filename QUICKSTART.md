# Quick Start Guide

Welcome to the Procedural Cat Character Generator! This guide will help you get started quickly.

## Try the Demo (Easiest)

1. Open `index.html` in any modern web browser
2. Click "Generate One Cat" or "Generate 5 Cats"
3. Export cats as JSON or copy as formatted text
4. Enjoy creating unique cat characters!

## Use in Node.js

```javascript
const CatGenerator = require('./cat-generator.js');
const generator = new CatGenerator();

// Generate a single cat
const cat = generator.generate();
console.log(cat);

// Generate multiple cats
const cats = generator.generateMultiple(10);
```

## Run Examples

```bash
# See various usage examples
node example.js

# Run tests
node test.js
```

## Integration Examples

### Game Development
```javascript
// Populate a cat cafe with NPCs
const cafeCats = generator.generateMultiple(20);
cafeCats.forEach(cat => {
  spawnNPC(cat.name, cat.appearance, cat.personality);
});
```

### Story Writing
```javascript
// Create a protagonist
const hero = generator.generate();
console.log(`Meet ${hero.name}, a ${hero.age}-year-old cat...`);
console.log(`Personality: ${hero.personality.join(', ')}`);
console.log(`Backstory: ${hero.backstory}`);
```

### Simulation Systems
```javascript
// Generate population with needs tracking
const population = generator.generateMultiple(50);
population.forEach(cat => {
  simulation.addEntity({
    id: cat.id,
    attributes: cat,
    needs: cat.needs
  });
});
```

## Cat Object Structure

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
  personality: ["Curious", "Playful"],
  behaviors: ["Loves to knock things off tables", "Obsessed with boxes"],
  backstory: "Rescued from a shelter as a kitten",
  needs: ["Regular playtime", "Window perch for bird watching"],
  specialTrait: "Extra toes (polydactyl)" // or null
}
```

## Customization

Want to add your own traits? Edit `cat-generator.js`:

```javascript
this.traits = {
  names: [...],         // Add more names
  furColors: [...],     // Add more colors
  personalities: [...], // Add more traits
  // ... etc
};
```

## Tips

- Each cat has 2-3 personality traits
- Each cat has 2-4 behavior quirks
- Each cat has 2-3 care needs
- 50% of cats have a special trait
- All IDs are unique
- Ages range from 1-18 years

## Need Help?

Check the full documentation in `README.md` for detailed information about:
- API reference
- Trait pools
- Export options
- Advanced usage
- Integration strategies

Happy cat generating! 🐱
