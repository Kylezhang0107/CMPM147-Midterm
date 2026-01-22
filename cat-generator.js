/**
 * Procedural Cat Character Generator
 * Creates unique cat NPCs with various traits for games, stories, and simulations
 */

class CatGenerator {
  constructor() {
    // Trait data pools for procedural generation
    this.traits = {
      names: [
        "Whiskers", "Shadow", "Luna", "Mittens", "Felix", "Cleo", "Smokey", 
        "Tiger", "Ginger", "Pepper", "Socks", "Patches", "Oreo", "Muffin",
        "Bandit", "Jasper", "Lily", "Oliver", "Nala", "Simba", "Bella",
        "Max", "Charlie", "Lucy", "Molly", "Oscar", "Sophie", "Leo"
      ],
      
      furColors: [
        "Black", "White", "Orange", "Gray", "Calico", "Tabby", 
        "Tuxedo", "Tortoiseshell", "Siamese", "Russian Blue", "Cream"
      ],
      
      furPatterns: [
        "Solid", "Striped", "Spotted", "Marbled", "Patched", 
        "Bicolor", "Tricolor", "Mackerel", "Classic tabby"
      ],
      
      eyeColors: [
        "Green", "Blue", "Amber", "Yellow", "Hazel", "Copper", "Odd-eyed"
      ],
      
      sizes: [
        "Tiny", "Small", "Medium", "Large", "Chonky"
      ],
      
      personalities: [
        "Curious", "Lazy", "Playful", "Grumpy", "Friendly", "Shy", 
        "Mischievous", "Calm", "Energetic", "Aloof", "Affectionate",
        "Independent", "Clingy", "Adventurous", "Cautious"
      ],
      
      behaviors: [
        "Loves to knock things off tables",
        "Always sleeps in strange positions",
        "Obsessed with boxes",
        "Brings 'gifts' to owner",
        "Talks constantly with meows",
        "Hides when visitors arrive",
        "Demands attention at 3 AM",
        "Steals food from counters",
        "Follows owner everywhere",
        "Runs random zoomies at night",
        "Sits on keyboards",
        "Watches birds intently",
        "Plays fetch like a dog",
        "Kneads blankets constantly",
        "Grooms other pets obsessively"
      ],
      
      backstories: [
        "Rescued from a shelter as a kitten",
        "Found wandering in a park",
        "Born in a barn to a feral mother",
        "Adopted from a friend's litter",
        "Showed up at the door one rainy night",
        "Inherited from a relative",
        "Escaped from a previous home",
        "Raised by a dog family",
        "Former street cat turned house pet",
        "Grew up in a library",
        "Survived a long journey alone",
        "Part of a large colony"
      ],
      
      needs: [
        "Regular playtime",
        "Quiet spaces to hide",
        "Window perch for bird watching",
        "Interactive toys",
        "Frequent grooming",
        "Companion pet",
        "Outdoor supervised time",
        "Puzzle feeders",
        "High places to climb",
        "Warm sleeping spots"
      ],
      
      specialTraits: [
        "Extra toes (polydactyl)",
        "Unusually long tail",
        "One ear is folded",
        "Has a distinctive meow",
        "Can open doors",
        "Knows several tricks",
        "Extremely photogenic",
        "Has a signature sitting pose",
        "Always lands on feet perfectly",
        "Can sense when owner is sad"
      ]
    };
  }

  /**
   * Get a random element from an array
   */
  randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Get multiple random elements from an array
   */
  randomChoices(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  /**
   * Generate a random age in years
   * Range: 1-18 years (typical cat lifespan, including kittens to seniors)
   */
  generateAge() {
    return Math.floor(Math.random() * 18) + 1; // 1-18 years
  }

  /**
   * Generate a complete cat character
   */
  generate() {
    const name = this.randomChoice(this.traits.names);
    const age = this.generateAge();
    
    // Appearance
    const appearance = {
      furColor: this.randomChoice(this.traits.furColors),
      furPattern: this.randomChoice(this.traits.furPatterns),
      eyeColor: this.randomChoice(this.traits.eyeColors),
      size: this.randomChoice(this.traits.sizes)
    };

    // Personality (pick 2-3 traits)
    const personalityCount = Math.floor(Math.random() * 2) + 2; // 2-3 traits
    const personality = this.randomChoices(this.traits.personalities, personalityCount);

    // Behavior quirks (pick 2-4)
    const behaviorCount = Math.floor(Math.random() * 3) + 2; // 2-4 quirks
    const behaviors = this.randomChoices(this.traits.behaviors, behaviorCount);

    // Backstory
    const backstory = this.randomChoice(this.traits.backstories);

    // Needs (pick 2-3)
    const needsCount = Math.floor(Math.random() * 2) + 2; // 2-3 needs
    const needs = this.randomChoices(this.traits.needs, needsCount);

    // Special trait (50% chance)
    const specialTrait = Math.random() > 0.5 
      ? this.randomChoice(this.traits.specialTraits)
      : null;

    return {
      name,
      age,
      appearance,
      personality,
      behaviors,
      backstory,
      needs,
      specialTrait,
      id: this.generateId()
    };
  }

  /**
   * Generate multiple cat characters
   */
  generateMultiple(count) {
    const cats = [];
    for (let i = 0; i < count; i++) {
      cats.push(this.generate());
    }
    return cats;
  }

  /**
   * Generate a unique ID for the cat
   */
  generateId() {
    return `cat_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  }

  /**
   * Format cat data as readable text
   */
  formatCat(cat) {
    let output = `=== ${cat.name.toUpperCase()} ===\n`;
    output += `Age: ${cat.age} year${cat.age !== 1 ? 's' : ''} old\n`;
    output += `ID: ${cat.id}\n\n`;
    
    output += `APPEARANCE:\n`;
    output += `  Fur: ${cat.appearance.furPattern} ${cat.appearance.furColor}\n`;
    output += `  Eyes: ${cat.appearance.eyeColor}\n`;
    output += `  Size: ${cat.appearance.size}\n`;
    if (cat.specialTrait) {
      output += `  Special: ${cat.specialTrait}\n`;
    }
    output += `\n`;
    
    output += `PERSONALITY:\n`;
    cat.personality.forEach(trait => {
      output += `  • ${trait}\n`;
    });
    output += `\n`;
    
    output += `BEHAVIOR QUIRKS:\n`;
    cat.behaviors.forEach(behavior => {
      output += `  • ${behavior}\n`;
    });
    output += `\n`;
    
    output += `BACKSTORY:\n`;
    output += `  ${cat.backstory}\n\n`;
    
    output += `NEEDS:\n`;
    cat.needs.forEach(need => {
      output += `  • ${need}\n`;
    });
    
    return output;
  }

  /**
   * Export cat data as JSON
   */
  exportJSON(cat) {
    return JSON.stringify(cat, null, 2);
  }
}

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CatGenerator;
}
