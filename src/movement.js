import { PLAYER_SPEED } from './constants';

export const movePlayers = (keys, player) => {
    if (keys.includes('ArrowUp')) {
        player.y = player.y - PLAYER_SPEED;
    }
    if (keys.includes('ArrowDown')) {
        player.y =  player.y + PLAYER_SPEED;
    }
    if (keys.includes('ArrowLeft')) {
        player.x = player.x - PLAYER_SPEED;
    }
    if (keys.includes('ArrowRight')) {
        player.x = player.x + PLAYER_SPEED;
    }
}