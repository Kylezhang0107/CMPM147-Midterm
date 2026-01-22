/**
 * Simple tests for the Cat Generator
 * Run with: node test.js
 */

const CatGenerator = require('./cat-generator.js');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✓ ${testName}`);
    testsPassed++;
  } else {
    console.log(`✗ ${testName}`);
    testsFailed++;
  }
}

function runTests() {
  console.log('Running Cat Generator Tests...\n');
  
  const generator = new CatGenerator();
  
  // Test 1: Generator creates instance
  assert(generator instanceof CatGenerator, 'Generator instance created');
  
  // Test 2: Generate single cat
  const cat = generator.generate();
  assert(cat !== null && cat !== undefined, 'Single cat generated');
  
  // Test 3: Cat has required properties
  assert(cat.name && typeof cat.name === 'string', 'Cat has name');
  assert(cat.age && typeof cat.age === 'number', 'Cat has age');
  assert(cat.appearance && typeof cat.appearance === 'object', 'Cat has appearance');
  assert(cat.personality && Array.isArray(cat.personality), 'Cat has personality array');
  assert(cat.behaviors && Array.isArray(cat.behaviors), 'Cat has behaviors array');
  assert(cat.backstory && typeof cat.backstory === 'string', 'Cat has backstory');
  assert(cat.needs && Array.isArray(cat.needs), 'Cat has needs array');
  assert(cat.id && typeof cat.id === 'string', 'Cat has ID');
  
  // Test 4: Appearance properties
  assert(cat.appearance.furColor, 'Cat has fur color');
  assert(cat.appearance.furPattern, 'Cat has fur pattern');
  assert(cat.appearance.eyeColor, 'Cat has eye color');
  assert(cat.appearance.size, 'Cat has size');
  
  // Test 5: Array lengths are within expected ranges
  assert(cat.personality.length >= 2 && cat.personality.length <= 3, 'Personality has 2-3 traits');
  assert(cat.behaviors.length >= 2 && cat.behaviors.length <= 4, 'Behaviors has 2-4 items');
  assert(cat.needs.length >= 2 && cat.needs.length <= 3, 'Needs has 2-3 items');
  
  // Test 6: Generate multiple cats
  const cats = generator.generateMultiple(10);
  assert(cats.length === 10, 'Generated correct number of cats');
  assert(cats.every(c => c.name && c.id), 'All cats have name and ID');
  
  // Test 7: Cats have unique IDs
  const ids = cats.map(c => c.id);
  const uniqueIds = new Set(ids);
  assert(uniqueIds.size === cats.length, 'All cat IDs are unique');
  
  // Test 8: Format cat
  const formatted = generator.formatCat(cat);
  assert(formatted && typeof formatted === 'string', 'Cat formatted as string');
  assert(formatted.includes(cat.name.toUpperCase()), 'Formatted text includes cat name');
  
  // Test 9: Export JSON
  const json = generator.exportJSON(cat);
  assert(json && typeof json === 'string', 'Cat exported as JSON string');
  const parsed = JSON.parse(json);
  assert(parsed.name === cat.name, 'JSON parses correctly');
  
  // Test 10: Diversity check (generate many cats and check for variety)
  const testCatCount = 50; // Generate enough cats to test diversity
  const minUniqueTraits = 5; // Expect at least 5 different values for diverse traits
  const manyCats = generator.generateMultiple(testCatCount);
  const furColors = new Set(manyCats.map(c => c.appearance.furColor));
  const personalities = new Set(manyCats.flatMap(c => c.personality));
  assert(furColors.size > minUniqueTraits, 'Multiple fur colors generated');
  assert(personalities.size > minUniqueTraits, 'Multiple personality traits generated');
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`Tests Passed: ${testsPassed}`);
  console.log(`Tests Failed: ${testsFailed}`);
  console.log('='.repeat(50));
  
  if (testsFailed === 0) {
    console.log('✓ All tests passed!');
    process.exit(0);
  } else {
    console.log('✗ Some tests failed');
    process.exit(1);
  }
}

runTests();
