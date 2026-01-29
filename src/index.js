import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import shipImg from './assets/ship.png'
import playerSprite from './assets/player.png';
import { 
   PLAYER_SPRITE_HEIGHT, 
   PLAYER_SPRITE_WIDTH,
   PLAYER_START_X,
   PLAYER_START_Y,
   PLAYER_SPEED,
} from './constants';

const player = {}

/*
Criação da  cena (classe MyGame)
Toda cena no Phaser é uma classe que extende Phaser.Scene .

Essa Cena inicia o jogo como se fosse "tela do jogos"

*/
class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }
    

    /*
    Método preload()__Carrega os arquivos
    aqui você carrega os assets (imagens, áudios, etc.)
    # 'logo' é o nome que você usa depois para acessar a imagem
    # logoImg é o arquivo importado.
    */
    preload ()
    {
        this.load.image('logo', logoImg);
        this.load.image('ship', shipImg);
        this.load.spritesheet("player", playerSprite, {
            frameWidth: PLAYER_SPRITE_WIDTH,
            frameHeight: PLAYER_SPRITE_HEIGHT,
        })
    }
    
     /*
     Método create()__ Cria os elementos na tela
     */
    create ()
    {
        /*Adiciona a imagem na posição x = 400, y = 150. */
        /*const logo = this.add.image(400, 150, 'logo');*/
        const ship = this.add.image(0,0, 'ship');
        player.sprite = this.add.sprite(PLAYER_START_X, PLAYER_START_Y, 'player');

        this.input.keyboard.on("keydown", (e) => {
           if(e.code == "ArrowRight"){
                player.sprite.x = player.sprite.x + PLAYER_SPEED;
           }
        })
        this.input.keyboard.on("keyup", (e) => {
            console.log("keyup", e.code)
        })
      
        /*
        Tween __ animação do objeto 
        
        Isso cria uma animação que faz o logo:
         mover do y = 150 para y = 450
         em 2000ms (2 segundos)
         usando easing "Power2" (movimento suave)
         yoyo: true -> vai e volta
         loop: -1 -> repete para sempre
         é um efeito de "subir e descer."
        
        */

        /*this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });*/
    }

    update(){
        this.scene.scene.cameras.main.centerOn(player.sprite.x, player.sprite.y);
    }
}

/*
type: Phaser.AUTO -> usa WebGL ou Canvas automaticamente 
parent: 'phaser-example' -> id do elemento HTML onde o jogo é renderizado
width / height -> tamanho da tela do  jogo
scene: MyGame -> define qual cena iniciar
*/
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 450,
    scene: MyGame
};

/* Instanciando o jogo - verificar mais sobre instancias */
const game = new Phaser.Game(config);
