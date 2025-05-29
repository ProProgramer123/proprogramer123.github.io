// This file is the entry point of the game launcher application. It initializes the application, sets up the main user interface, and handles the rendering of components.

import GameList from './components/GameList';

const app = document.getElementById('app');

function init() {
    const gameList = new GameList();
    app.appendChild(gameList.render());
}

document.addEventListener('DOMContentLoaded', init);