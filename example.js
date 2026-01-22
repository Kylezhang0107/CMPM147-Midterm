/**
 * Example usage of the Cat Character Generator
 * Run with: node example.js
 */

const CatGenerator = require('./cat-generator.js');

// Create a generator instance
const generator = new CatGenerator();

console.log('='.repeat(70));
console.log('PROCEDURAL CAT CHARACTER GENERATOR - EXAMPLES');
console.log('='.repeat(70));

// Example 1: Generate a single cat
console.log('\n--- EXAMPLE 1: Generate a Single Cat ---\n');
const singleCat = generator.generate();
console.log(generator.formatCat(singleCat));

// Example 2: Generate multiple cats for a game
console.log('\n--- EXAMPLE 2: Generate NPCs for a Cat Cafe Game ---\n');
const cafeCats = generator.generateMultiple(5);
console.log(`Generated ${cafeCats.length} cats for the cafe:\n`);
cafeCats.forEach((cat, index) => {
  console.log(`${index + 1}. ${cat.name} (${cat.age} years) - ${cat.appearance.furColor} ${cat.appearance.furPattern}`);
  console.log(`   Personality: ${cat.personality.join(', ')}`);
  console.log(`   Special: ${cat.specialTrait || 'None'}\n`);
});

// Example 3: Filter cats by specific traits
console.log('\n--- EXAMPLE 3: Find Cats with Specific Traits ---\n');
const manyCats = generator.generateMultiple(20);

// Find playful cats
const playfulCats = manyCats.filter(cat => 
  cat.personality.includes('Playful')
);
console.log(`Playful cats (${playfulCats.length}/${manyCats.length}):`);
playfulCats.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.appearance.furColor} ${cat.appearance.furPattern}`);
});

// Find cats with special traits
const specialCats = manyCats.filter(cat => cat.specialTrait);
console.log(`\nCats with special traits (${specialCats.length}/${manyCats.length}):`);
specialCats.forEach(cat => {
  console.log(`  - ${cat.name}: ${cat.specialTrait}`);
});

// Example 4: Generate cat with statistics
console.log('\n--- EXAMPLE 4: Generator Statistics ---\n');
const statCats = generator.generateMultiple(50);
const furColorCounts = {};
const personalityCounts = {};

statCats.forEach(cat => {
  furColorCounts[cat.appearance.furColor] = (furColorCounts[cat.appearance.furColor] || 0) + 1;
  cat.personality.forEach(trait => {
    personalityCounts[trait] = (personalityCounts[trait] || 0) + 1;
  });
});

console.log('Fur color distribution:');
Object.entries(furColorCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([color, count]) => {
    console.log(`  ${color}: ${'█'.repeat(count)} (${count})`);
  });

console.log('\nTop personality traits:');
Object.entries(personalityCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .forEach(([trait, count]) => {
    console.log(`  ${trait}: ${count}`);
  });

// Example 5: Export cat as JSON
console.log('\n--- EXAMPLE 5: JSON Export ---\n');
const exportCat = generator.generate();
console.log('JSON export of ' + exportCat.name + ':');
console.log(generator.exportJSON(exportCat));

console.log('\n' + '='.repeat(70));
console.log('Examples complete!');
console.log('='.repeat(70));
