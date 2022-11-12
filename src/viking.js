// Soldier Class 
class Soldier {
    constructor(health, strength) { //Receives two arguments - Health & Strength
        this.health = health; // In the soldier class ,this is the first attribute 
        this.strength = strength; // Second attribute 
    }

    // The following methods are under Soldier Class 

    attack() { //The attack method 
        return this.strength; // Receive 0 arguments, and return the strength of soldier 
    }

    receiveDamage(damage) { //Receive Damage method
        this.health = this.health - damage; // Receive 1 argument - Damage, remove damage from health = health , no return anything 
    }
}

// Viking - Class Two 
class Viking extends Soldier { // Inheritance, it inherits/extends Soldier. Viking is a soldier with additional property - NAME. Different receiveDamage() and new method - battleCry()
    constructor(name, health, strength) { //Receives these 3 arguments - Name, Health, Strength 
        super(health, strength); // Forgot what super means
        this.name = name; //Created a new attribute 
    }

    // The following methods are under Viking (we are revising receiveDamage and creating battleCry)
    receiveDamage(damage) { //Revising receieveDamage. Receives 1 argument - Damage 
        this.health = this.health - damage; // Remove the received damage from health property 
        return this.health > 0 // Condition time with a return - If viking is still alive (health > 0 obviously), then return the messages below 
            ? `${this.name} has received ${damage} points of damage` 
            : `${this.name} has died in act of combat`; // If viking dies, it should return this message 
    }

    battleCry() { //Adding this new method | 0 arguments, returns this message 
        return 'Odin Owns You All!';
    }
}

// Saxon - Class Three
class Saxon extends Soldier {  //It is a weaker kind of soldier. So we inherit SOldier, but there's differences. It has no name. ReceieveDamage is different (revised below)
    constructor(health, strength) { //Dont have to do this since it inherits from soldier anyways. 
        super(health, strength);
    }
    receiveDamage(damage) { // function, 1 argument - damange, remove received damange from health right below 
        this.health = this.health - damage;
        return this.health > 0 //If alive, return this stuff...
            ? `A Saxon has received ${damage} points of damage`
            : `A Saxon has died in combat`;
    }
}

// War - This is BONUS
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randViking =
            this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randSaxon =
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const message = randSaxon.receiveDamage(randViking.strength);

        if (message.includes('died')) this.saxonArmy.splice(randSaxon, 1);
        return message;
    }

    saxonAttack() {
        const randViking =
            this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const randSaxon =
            this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

        const message = randViking.receiveDamage(randSaxon.strength);

        if (message.includes('died')) this.vikingArmy.splice(randViking, 1);
        return message;
    }

    showStatus() {
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!';
        } else if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...';
        }

        return 'Vikings and Saxons are still in the thick of battle.';
    }
}
