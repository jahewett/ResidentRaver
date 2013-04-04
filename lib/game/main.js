ig.module (
        'game.main'
    )
    .requires (
        'impact.game',
        'game.levels.dorm1',
        'game.levels.dorm2'
    )
    .defines (function () {

        MyGame = ig.Game.extend({
            gravity: 300,

            // Load a font
            font: new ig.Font('media/04b03.font.png'),

            init: function () {
                // Initialize your game here; bind keys etc
                // Bind Keys
                ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
                ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
                ig.input.bind(ig.KEY.X, 'jump');
                ig.input.bind(ig.KEY.C, 'shoot');
                ig.input.bind(ig.KEY.TAB, 'switch');

                this.loadLevel(LevelDorm1);
            },

            update: function () {
                // Screen follows the player
                var player = this.getEntitiesByType(EntityPlayer)[0];
                if( player ) {
                    this.screen.x = player.pos.x - ig.system.width/2;
                    this.screen.y = player.pos.y - ig.system.height/2;
                }

                // Update all entities and background maps
                this.parent();

                // Add your own additional update code here
            },

            draw: function () {
                // Draw all entities and BackgroundMaps
                this.parent();
            }
        });

    // Start the Game with 60fps, a resolution of 240x160, scaled up by a factor of 2
    ig.main('#canvas', MyGame, 60, 320, 240, 2);
    });


