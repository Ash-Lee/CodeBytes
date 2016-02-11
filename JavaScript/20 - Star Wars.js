/* JavaScript ============================================================================
  20 - Star Wars
  Functions outlining the basic structure of a web based Star Wars game....
======================================================================================= */


/* ---------------------------------------------------- */
/* ----------------- Global Variables ----------------- */
/* ---------------------------------------------------- */

// Array containing class attributes of all possible player characters 
var playerClassAttributes = [
  {
    classType: "Jedi Guardian",
    health: {min: 10, max: 30, lvl: 15},
    strength: {min: 6, max: 12, lvl: 2},
    force: {min: 1, max: 6, lvl: 1},
    agility: {min: 1, max: 5, lvl: 2},
    constitution: {min: 5, max: 10, lvl: 2},
    abilities: [
      {lvl: 1, ability: "force push", description: "pushed the opponent backwards with the power of the force!", power: 25, effect: function() {}},
      {lvl: 1, ability: "power strike", description: "struck a critical hit! - strength(+1)", power: 20, effect: function(self, enemy) {self.strength += 1;}},
      {lvl: 5, ability: "force lunge", description: "lunged forwards and landed a solid strike!", power: 30, effect: function() {}},
      {lvl: 8, ability: "throw lightsaber", description: "used own lightsaber as a projectile!", power: 40, effect: function() {}},
      {lvl: 10, ability: "force projectile", description: "propelled nearby debris causing damage to the opponents armour! - AC(-5)", power: 50, effect: function(self, enemy) {enemy.ac -= 5;}},
      {lvl: 15, ability: "force pull", description: "forcefully pulls and slows the opponent allowing a critical hit! - agility(-4)", power: 50, effect: function(self, enemy) {enemy.agility -= 4;}},
      {lvl: 20, ability: "whirlwind attack", description: "channels the power of the force! - strength(+8)", power: 20, effect: function(self, enemy) {self.strength += 8;}}
    ]
  },

  {
    classType: "Jedi Consular",
    health: {min: 10, max: 30, lvl: 10},
    strength: {min: 0, max: 6, lvl: 1},
    force: {min: 6, max: 12, lvl: 2},
    agility: {min: 5, max: 10, lvl: 4},
    constitution: {min: 1, max: 5, lvl: 2},
    abilities: [
      {lvl: 1, ability: "force push", description: "pushed the opponent backwards with the power of the force!", power: 30},
      {lvl: 1, ability: "force heal", description: "used the force to heal - HP(+50)", power: 0, effect: function(self, enemy) {self.currentHealth += 50;}},
      {lvl: 5, ability: "force block", description: "used the force to help repel damage - AC(+2)", power: 0, effect: function(self, enemy) {self.ac += 2;}},
      {lvl: 8, ability: "force projectile", description: "propelled nearby debris towards the opponent causing damage to his armour! - AC(-5)", power: 60, effect: function(self, enemy) {enemy.ac -= 5;}},
      {lvl: 10, ability: "force lift", description: "force lifted the opponent into the air and sent him crashing to the ground! ", power: 20},
      {lvl: 15, ability: "force influence", description: "weakened the opponent - constitution(-2) | strength(-3) | agility(-4)", power: 0, effect: function(self, enemy) {enemy.constitution -= 2; enemy.strength -= 3; enemy.agility -= 4;}},
      {lvl: 20, ability: "force focus", description: "channels the power of the force - agility(+8) | force(+10)", power: 0, effect: function(self, enemy) {self.agility += 8; self.force += 10;}}
    ]
  }
];

// Array containing class attributes of all possible computer characters
var compClassAttributes = [
  {classType: "Sith", health: {min: 10, max: 30, lvl: 15}, strength: {min: 4, max: 14, lvl: 2}, force: {min: 5, max: 14, lvl: 1}, agility: {min: 5, max: 12, lvl: 3}, constitution: {min: 5, max: 15, lvl: 3}, abilities: [{ability: "force push", description: "pushed you backwards using the force!", power: 35, effect: function() {}}, {ability: "Force Choke", description: "chokes you with the power of the dark side!", power: 50, effect: function() {}}], xpReward: {min: 250, max: 400}},
  {classType: "Sith Lord", health: {min: 20, max: 50, lvl: 20}, strength: {min: 10, max: 25, lvl: 3}, force: {min: 10, max: 25, lvl: 3}, agility: {min:10, max:15, lvl:3}, constitution: {min: 5, max: 20, lvl: 4}, abilities: ["force push", "force choke", "force lightning"], xpReward: {min: 400, max: 650}},
  {classType: "Stormtrooper", health: {min: 5, max: 15, lvl: 2}, strength: {min: 2, max: 8, lvl: 1}, force: {min: 0, max: 0, lvl: 0}, agility: {min: 1, max: 3, lvl: 1}, constitution: {min: 1, max: 5, lvl: 1}, abilities: ["throw grenade"], xpReward: {min: 30, max: 80}},
  {classType: "Bounty Hunter", health: {min: 10, max: 30, lvl: 5}, strength: {min: 3, max: 14, lvl: 2}, force: {min: 0, max: 0, lvl: 0}, agility: {min: 5, max: 20, lvl: 2}, constitution: {min: 1, max: 15, lvl: 2}, abilities: ["flamethrower", "rocket attack"], xpReward: {min: 100, max: 200}},
  {classType: "Tusken Raider", health: {min: 5, max: 15, lvl: 1}, strength: {min: 1, max: 3, lvl: 1}, force: {min: 0, max: 0, lvl: 0}, agility: {min: 1, max: 4, lvl: 0}, constitution: {min: 1, max: 3, lvl: 1}, abilities: ["tusken yell!"], xpReward: {min: 5, max: 10}}
];





/* ---------------------------------------------------- */
/* ------------------- Constructors ------------------- */
/* ---------------------------------------------------- */

// Game constructor
function Game() {
  // Generate an inclusive random integer between a min and max value
  this.random = function(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  };
}



// Characters constructor
function Character() {
  // Set initial stat values
  this.setup = function(classAttributes, charName, chosenClass, lvl, items) {
    // Set character class (profession)
    for (var c = 0; c < classAttributes.length; c++) {
      if (chosenClass == classAttributes[c].classType) {
        this.classAttr = classAttributes[c];
      }
    }

    // Set inventory contents
    this.inventory = {weapon: null, armour: null};
    for (item in items) {
      this.inventory[item] = items[item];
    }

    // Set character info and stats
    this.charName = charName;
    this.lvl = lvl;
    this.charClass = this.classAttr.classType;
    this.abilities = this.classAttr.abilities;
    this.statRoll();
    this.setAc();
  };


  // Roll or re-roll starting stats
  this.statRoll = function() {
    this.maxHealth = (100 + this.random(this.classAttr.health.min, this.classAttr.health.max)) + (this.lvl * this.classAttr.health.lvl);
    this.strength = this.random(this.classAttr.strength.min, this.classAttr.strength.max) + (this.lvl * this.classAttr.strength.lvl);
    this.force = this.random(this.classAttr.force.min, this.classAttr.force.max) + (this.lvl * this.classAttr.force.lvl);
    this.agility = this.random(this.classAttr.agility.min, this.classAttr.agility.max) + (this.lvl * this.classAttr.agility.lvl);
    this.constitution = this.random(this.classAttr.constitution.min, this.classAttr.constitution.max) + (this.lvl * this.classAttr.constitution.lvl);
    this.currentHealth = this.maxHealth;
    this.setAc();
  };


  // Set total armour class (ac) rating
  this.setAc = function() {
    this.ac = this.constitution + this.inventory.armour.defence;
  };


  // Calculate attack power of character with equipped weapon
  this.atkPower = function() {
    return this.inventory.weapon.power + this.random(0, this.strength);
  };


  // Calculate defence rating of character with equipped armour and agility bonus
  this.defRating = function() {
    return this.ac + this.random(0, this.agility);
  };


  // Initiate combat
  this.combat = function(enemy) {
    var action = null,
        dmg = null,
        self = this;

    // Store available combat options
    var options = "| " + this.inventory.weapon.itemName + " |";
    for (i = 0; i < this.abilities.length; i++) {
      options += " " + this.abilities[i].ability + " |";
    }

    // Start combat loop 
    loop = setInterval(function() {
      // Prompt input method used for example purposes only
      action = prompt(self.charName + " - HP(" + self.currentHealth + ") \n" + enemy.charName + " - HP(" + enemy.currentHealth + ")\n" + options);
      action = action.toLowerCase();

      // Decide which character attacks first
      if (self.agility >= enemy.agility) {

        // Damage inflicted
        dmg = self.attack(action, enemy);
        enemy.currentHealth -= dmg[1];
        console.log(self.charName + " used " + action + " - " + enemy.charName + " received " + dmg[1] + " points of damage");
        if (dmg[0]) console.log(self.charName + " " + dmg[0]);
        if (enemy.currentHealth <= 0) {
          enemy.die();
          self.lvlUp(enemy.giveXp());
          clearInterval(loop);
          return;
        }

        // Damage received
        dmg = enemy.attack(self);
        self.currentHealth -= dmg[1];
        console.log(enemy.charName + " used " + dmg[0] + " - " + self.charName + " received " + dmg[1] + " points of damage");
        if (dmg[2]) console.log(enemy.charName + " " + dmg[2]);
        if (self.currentHealth <= 0) {
          self.die();
          clearInterval(loop);
          return;
        }

      } else {
        // Damage received
        dmg = enemy.attack(self);
        self.currentHealth -= dmg[1];
        console.log(enemy.charName + " used " + dmg[0] + " - " + self.charName + " received " + dmg[1] + " points of damage");
        if (dmg[2]) console.log(enemy.charName + " " + dmg[2]);
        if (self.currentHealth <= 0) {
          self.die();
          clearInterval(loop);
          return;
        }

        // Damage inflicted
        dmg = self.attack(action, enemy);
        enemy.currentHealth -= dmg[1];
        console.log(self.charName + " used " + action + " - " + enemy.charName + " received " + dmg[1] + " points of damage");
        if (dmg[0]) console.log(self.charName + " " + dmg[0]);
        if (enemy.currentHealth <= 0) {
          enemy.die();
          self.lvlUp(enemy.giveXp());
          clearInterval(loop);
          return;
        }
      }
    }, 10);
  };


  // Display character stats and return overview
  this.viewStats = function() {
    console.log(this.charName + "\nLv." + this.lvl + " " + this.charClass + " XP(" + this.xp + ")\nHP(" + this.maxHealth + "/" + this.currentHealth + ") | AC(" + this.ac + ") | Strength(" + this.strength + ") | Force(" + this.force + ") | Agility(" + this.agility + ") | constitution(" + this.constitution + ") |");
    console.dir(this.abilities);

    var overview = {
      lvl: this.lvl,
      xp: this.xp,
      nextLvl: this.nextLvl,
      maxHealth: this.maxHealth,
      currentHealth: this.currentHealth,
      ac: this.ac,
      strength: this.strength,
      force: this.force,
      agility: this.agility,
      constitution: this.constitution,
      abilities: this.abilities,
      inventory: this.inventory
    };
    
    return overview;
  };
}



// Player character constructor
function Player(classAttributes, charName, chosenClass, lvl, items) {
  this.xp = 0;
  this.nextLvl = 250;


  this.lvlUp = function(xpReward) {
    // Update total xp
    this.xp += xpReward;

    // Check for max level
    if (this.lvl === 20) return;

    // Check for level up
    if (this.xp >= this.nextLvl) {
      this.lvl += 1;

      // Upgrade stats
      this.maxHealth += this.classAttr.health.lvl;
      this.strength += this.classAttr.strength.lvl;
      this.force += this.classAttr.force.lvl;
      this.agility += this.classAttr.agility.lvl;
      this.constitution += this.classAttr.constitution.lvl;
      this.setAc();
      
      // Set next level
      this.nextLvl = this.xp * 2;

      // Restore health
      this.currentHealth = this.maxHealth;

      // Update player
      console.log("Level up!\n" + this.charName + " is now level " + this.lvl + "!");
    }
  };


  // Calculate damage inflicted to computer character
  this.attack = function(action, enemy) {
    if (action === this.inventory.weapon.itemName) {
      return [null, this.atkPower()];
    } else {
      var playerSelection = null;
      
      for (var i = 0; i < this.abilities.length; i++) {
        if (action === this.abilities[i].ability) {
          playerSelection = this.abilities[i];
          break;
        }
      }

      playerSelection.effect(this, enemy);
      return [playerSelection.description, playerSelection.power];
    }
  };


  this.resetStats = function() {
  };


  this.equipItem = function(item) {
    this.inventory[item.itemType] = item;
  };


  this.die = function() {
    if (this.currentHealth <= 0) console.log("Game Over");
  };


  this.viewInventory = function() {
    console.log(this.inventory);
    return this.inventory;
  };


  // Initialise player character
  this.setup(classAttributes, charName, chosenClass, lvl, items);
}



// Computer character constructor
function Comp(classAttributes, charName, chosenClass, lvl, items) {

  // Calculate damage inflicted to player character
  this.attack = function(playerCharacter) {
    if (this.random(1, 6) >= 5) {
      var compSelection = this.random(0, this.abilities.length - 1);
      // ---------
      if (this.abilities[compSelection].power > 0) {
        this.abilities[compSelection].effect();
        return [this.abilities[compSelection].ability, this.abilities[compSelection].power, this.abilities[compSelection].description];
      } else {
        this.abilities[compSelection].effect();
        return [this.abilities[compSelection].ability, 0, this.abilities[compSelection].description];
      }
    } else {
      return [this.inventory.weapon.itemName, this.atkPower()];
    }
  };


  this.giveXp = function() {
    return this.xpReward;
  };


  this.die = function() {
    if (this.currentHealth <= 0) {
      console.log(this.charName + " was defeated!\nGained " + this.xpReward + "XP");
    }
  };


  // Initialise computer character
  this.setup(classAttributes, charName, chosenClass, lvl, items);
  this.xp = 0;
  this.xpReward = this.random(this.classAttr.xpReward.min, this.classAttr.xpReward.max ) * this.lvl;
}



// Lightsaber constructor
function Lightsaber(itemType, hiltType, bladeType, colour, dual) {
  this.itemType = itemType;
  this.itemName = "lightsaber"; 
  this.hiltType = hiltType;
  this.bladeType = bladeType;
  this.crystal = colour;
  this.dualWieldBonus = (dual === true ? 2 : 1);

  this.forge = function() {
    switch (hiltType) {
      case "standard":
        if (this.bladeType === "single") this.power = 15 * this.dualWieldBonus;
        if (this.bladeType === "double") {
          this.dualWieldBonus = 0;
          this.power = 30;
        }
        break;

      case "electrum":
        if (this.bladeType === "single") this.power = 20 * this.dualWieldBonus;
        if (this.bladeType === "double") {
          this.dualWieldBonus = 0;
          this.power = 40;
        }
        break;

      case "curved":
        if (this.bladeType === "single") this.power = 25 * this.dualWieldBonus;

        if (this.bladeType === "double") {
          this.dualWieldBonus = 0;
          this.power = 50;
        }
        break;
    }
  };

  this.forge();
}



// Armour constructor
function Armour(itemType, armourType, defence) {
  this.itemType = itemType;
  this.armourType = armourType;
  this.defence = defence;
}





/* ---------------------------------------------------- */
/* -------------------- Prototypes -------------------- */
/* ---------------------------------------------------- */

Character.prototype = new Game();
Player.prototype = new Character();
Comp.prototype = new Character();





/* ---------------------------------------------------- */
/* --------------------- Outputs ---------------------- */
/* ---------------------------------------------------- */

// Constructor test - Player character + Computer character + Lightsaber item + Armour item
var obiWan = new Player(playerClassAttributes, "Obi Wan", "Jedi Guardian", 1, {weapon: new Lightsaber("weapon", "standard", "single", "blue", false), armour: new Armour("armour", "Medium Battle Armour", 10)});
var yoda = new Player(playerClassAttributes, "Yoda", "Jedi Consular", 1, {weapon: new Lightsaber("weapon", "electrum", "single", "green", false), armour: new Armour("armour", "Robes", 1)});
var darthMaul = new Comp(compClassAttributes, "Darth Maul", "Sith", 1, {weapon: new Lightsaber("weapon", "standard", "double", "red", false), armour: new Armour("armour", "Robes", 1)});



// Combat test - Win scenario
obiWan.viewStats();
darthMaul.viewStats();
obiWan.combat(darthMaul);
/*
Obi Wan
Lv.1 Jedi Guardian XP(0)
HP(145/145) | AC(18) | Strength(13) | Force(2) | Agility(6) | constitution(8) |

Darth Maul
Lv.1 Sith XP(0)
HP(140/140) | AC(19) | Strength(12) | Force(8) | Agility(14) | constitution(18) |

Darth Maul used lightsaber - Obi Wan received 30 points of damage
Obi Wan used whirlwind attack - Darth Maul received 20 points of damage
Obi Wan channels the power of the force! - strength(+8)

Darth Maul used lightsaber - Obi Wan received 41 points of damage
Obi Wan used force projectile - Darth Maul received 50 points of damage
Obi Wan propelled nearby debris causing damage to the opponents armour! - AC(-5)

Darth Maul used lightsaber - Obi Wan received 30 points of damage
Obi Wan used lightsaber - Darth Maul received 22 points of damage

Darth Maul used lightsaber - Obi Wan received 34 points of damage
Obi Wan used force pull - Darth Maul received 50 points of damage
Obi Wan forcefully pulls and slows the opponent allowing a critical hit! - agility(-4)

Darth Maul was defeated!
Gained 300XP

Level up!
Obi Wan is now level 2!
*/



// Combat test - Lose scenario
obiWan.viewStats();
darthMaul.viewStats();
obiWan.combat(darthMaul);
/*
Obi Wan
Lv.1 Jedi Guardian XP(0)
HP(137/137) | AC(20) | Strength(12) | Force(4) | Agility(3) | constitution(10) |

Darth Maul
Lv.1 Sith XP(0)
HP(133/133) | AC(18) | Strength(16) | Force(9) | Agility(8) | constitution(17) |

Darth Maul used force push - Obi Wan received 35 points of damage
Darth Maul pushed you backwards using the force!
Obi Wan used lightsaber - Darth Maul received 27 points of damage

Darth Maul used lightsaber - Obi Wan received 32 points of damage
Obi Wan used force projectile - Darth Maul received 50 points of damage
Obi Wan propelled nearby debris causing damage to the opponents armour! - AC(-5)

Darth Maul used force push - Obi Wan received 35 points of damage
Darth Maul pushed you backwards using the force!
Obi Wan used whirlwind attack - Darth Maul received 20 points of damage
Obi Wan channels the power of the force! - strength(+8)

Darth Maul used lightsaber - Obi Wan received 44 points of damage
Game Over
*/

// Combat notes
// Darth Maul attacks first because he has the highest agility rating
// The stats of each character instance differs according to the unique class rules outlined in classAttr
// class = profession e.g Jedi, Bounty Hunter, etc



// Level up test
yoda.viewStats();
yoda.lvlUp(darthMaul.giveXp());

/*
Yoda
Lv.1 Jedi Consular XP(0)
HP(132/132) | AC(5) | Strength(5) | Force(10) | Agility(14) | constitution(4) |

Yoda
Lv.2 Jedi Consular XP(296)
HP(142/142) | AC(7) | Strength(6) | Force(12) | Agility(18) | constitution(6) |
*/



// Inventory test
yoda.viewInventory();
/*
Object { weapon: Object, armour: Object }

weapon: Object
  bladeType: "single"
  crystal: "green"
  dualWieldBonus: 1
  hiltType: "electrum"
  itemName: "lightsaber"
  itemType: "weapon"
  power: 20

armour: Object
  armourType: "Robes"
  defence: 1
  itemType: "armour"
*/