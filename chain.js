class Chain {
    constructor(bodyA,bodyB) {
        var Options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:90,
            stiffness:0.09
        }
        this.Chain = Constraint.create(Options)
        World.add(world,this.Chain)
    }
    display() {
        strokeWeight(4)
        line (this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.position.x,this.Chain.bodyB.position.y)
    }
}