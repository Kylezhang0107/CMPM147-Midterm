/**
 * Application logic for the Cat Generator demo
 */

// Initialize the generator
const catGenerator = new CatGenerator();
let totalCatsGenerated = 0;

// DOM elements
const generateOneBtn = document.getElementById('generateOne');
const generateMultipleBtn = document.getElementById('generateMultiple');
const clearAllBtn = document.getElementById('clearAll');
const catDisplay = document.getElementById('catDisplay');
const catCountSpan = document.getElementById('catCount');

/**
 * Create a cat card HTML element
 */
function createCatCard(cat) {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
        <div class="cat-header">
            <h3>${cat.name}</h3>
            <span class="cat-age">${cat.age} year${cat.age !== 1 ? 's' : ''} old</span>
        </div>
        
        <div class="cat-section">
            <h4>Appearance</h4>
            <p><strong>Fur:</strong> ${cat.appearance.furPattern} ${cat.appearance.furColor}</p>
            <p><strong>Eyes:</strong> ${cat.appearance.eyeColor}</p>
            <p><strong>Size:</strong> ${cat.appearance.size}</p>
            ${cat.specialTrait ? `<p class="special-trait">✨ ${cat.specialTrait}</p>` : ''}
        </div>

        <div class="cat-section">
            <h4>Personality</h4>
            <div class="trait-tags">
                ${cat.personality.map(trait => `<span class="tag tag-personality">${trait}</span>`).join('')}
            </div>
        </div>

        <div class="cat-section">
            <h4>Behavior Quirks</h4>
            <ul>
                ${cat.behaviors.map(behavior => `<li>${behavior}</li>`).join('')}
            </ul>
        </div>

        <div class="cat-section">
            <h4>Backstory</h4>
            <p class="backstory">${cat.backstory}</p>
        </div>

        <div class="cat-section">
            <h4>Needs</h4>
            <div class="trait-tags">
                ${cat.needs.map(need => `<span class="tag tag-need">${need}</span>`).join('')}
            </div>
        </div>

        <div class="cat-footer">
            <button class="btn-small btn-export" onclick="exportCat('${cat.id}')">Export JSON</button>
            <button class="btn-small btn-copy" onclick="copyCatText('${cat.id}')">Copy Text</button>
            <span class="cat-id">ID: ${cat.id}</span>
        </div>
    `;
    
    // Store cat data on the element for later export
    card.dataset.catData = JSON.stringify(cat);
    card.dataset.catId = cat.id;
    
    return card;
}

/**
 * Generate and display one cat
 */
function generateOneCat() {
    const cat = catGenerator.generate();
    const card = createCatCard(cat);
    catDisplay.prepend(card);
    
    // Animate card entrance
    setTimeout(() => card.classList.add('fade-in'), 10);
    
    totalCatsGenerated++;
    updateCatCount();
}

/**
 * Generate and display multiple cats
 */
function generateMultipleCats(count = 5) {
    const cats = catGenerator.generateMultiple(count);
    
    cats.forEach((cat, index) => {
        const card = createCatCard(cat);
        catDisplay.prepend(card);
        
        // Stagger animations
        setTimeout(() => card.classList.add('fade-in'), index * 100);
    });
    
    totalCatsGenerated += count;
    updateCatCount();
}

/**
 * Clear all displayed cats
 */
function clearAllCats() {
    if (catDisplay.children.length > 0) {
        if (confirm('Are you sure you want to clear all generated cats?')) {
            catDisplay.innerHTML = '';
        }
    }
}

/**
 * Update the cat count display
 */
function updateCatCount() {
    catCountSpan.textContent = totalCatsGenerated;
}

/**
 * Export cat data as JSON
 */
function exportCat(catId) {
    const card = document.querySelector(`[data-cat-id="${catId}"]`);
    if (card) {
        const catData = JSON.parse(card.dataset.catData);
        const json = catGenerator.exportJSON(catData);
        
        // Create download
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${catData.name}_${catId}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('JSON exported successfully!');
    }
}

/**
 * Copy cat data as formatted text
 */
function copyCatText(catId) {
    const card = document.querySelector(`[data-cat-id="${catId}"]`);
    if (card) {
        const catData = JSON.parse(card.dataset.catData);
        const formatted = catGenerator.formatCat(catData);
        
        navigator.clipboard.writeText(formatted).then(() => {
            showNotification('Cat data copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showNotification('Failed to copy to clipboard');
        });
    }
}

/**
 * Show a notification message
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Event listeners
generateOneBtn.addEventListener('click', generateOneCat);
generateMultipleBtn.addEventListener('click', () => generateMultipleCats(5));
clearAllBtn.addEventListener('click', clearAllCats);

// Generate one cat on load to show example
window.addEventListener('load', () => {
    setTimeout(generateOneCat, 500);
});
