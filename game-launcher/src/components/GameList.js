class GameList {
    constructor() {
        this.games = [];
    }

    fetchGames() {
        // Simulate fetching game data
        this.games = [
            { id: 1, name: 'Game One' },
            { id: 2, name: 'Game Two' },
            { id: 3, name: 'Game Three' }
        ];
    }

    render() {
        const gameListContainer = document.createElement('div');
        gameListContainer.className = 'game-list';

        this.games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';
            gameItem.textContent = game.name;
            gameListContainer.appendChild(gameItem);
        });

        return gameListContainer;
    }
}

export default GameList;