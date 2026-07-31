// Run script once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const tiles = document.querySelectorAll('.tile');
    const bg = document.getElementById('dynamic-bg');
    const activeTitle = document.getElementById('active-title');
    const activeDesc = document.getElementById('active-desc');
    const clockElement = document.getElementById('ps4-clock');

    // 1. Function to update live digital clock in top bar
    function updateClock() {
        const now = new Date();
        clockElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Function to switch active game selection
    function selectTile(selectedTile) {
        // Remove 'active' state from all tiles
        tiles.forEach(t => t.classList.remove('active'));

        // Add 'active' class to newly selected tile
        selectedTile.classList.add('active');

        // Extract dataset info from HTML attributes
        const title = selectedTile.getAttribute('data-title');
        const desc = selectedTile.getAttribute('data-desc');
        const bgTheme = selectedTile.getAttribute('data-bg');

        // Update information panel text content
        activeTitle.textContent = title;
        activeDesc.textContent = desc;

        // Change background theme class dynamically
        bg.className = 'ps4-bg ' + bgTheme;
    }

    // 3. Attach Click & Hover Events to all tiles
    tiles.forEach(tile => {
        // PERSONALIZATION: If you hover or click the tile, the script dynamically updates the page!
        tile.addEventListener('mouseenter', () => selectTile(tile));
        tile.addEventListener('click', () => {
            alert(`🎮 Launching ${tile.getAttribute('data-title')}...`);
        });
    });

    // PERSONALIZATION: Initialize the starting state to match the HTML definition (Vanguard active)
    const initialTile = document.querySelector('.tile.active');
    if(initialTile) {
        selectTile(initialTile);
    }
});
