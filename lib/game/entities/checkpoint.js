ig.module(
        'game.entities.checkpoint'
    )
    .requires(
        'impact.entity',
        'impact.debug.debug'
    )
    .defines(function() {
        EntityCheckpoint = ig.Entity.extend({
            animSheet: new ig.AnimationSheet('media/life-sprite.png', 9, 9),
            size: {x: 9, y: 9},
            offset: {x:0, y:0},
            _wmDrawBox: true,
            _wmBoxColor: 'rgba(0, 255, 0, 0.7)',
            checkAgainst: ig.Entity.TYPE.A,
            collides: ig.Entity.COLLIDES.PASSIVE,

            init: function(x, y, settings)
            {
                this.parent(x, y, settings);
                this.addAnim('idle', 0.2, [0]);
                this.currentAnim = this.anims.idle;
            },

            check: function(other)
            {
                this.kill();
                ig.game.checkpointReached = true;
                ig.game.checkpointPosition = {x:this.pos.x, y:this.pos.y};
            }
        });
    });