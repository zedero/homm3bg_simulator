import {Unit} from "./data";
import {SPECIALS} from "./specials";

export const NECROPOLIS: Unit[] = [{
  id: 'SKELETONS',
  attack: 2,
  defence: 1,
  health: 2,
  initiative: 4,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [2,0],
  faction: "Necropolis",
  tier: "Bronze"
},{
  id: 'SKELETONS_#PACK',
  attack: 3,
  defence: 1,
  health: 2,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "SKELETONS",
  costs: [3,0],
  faction: "Necropolis",
  tier: "Bronze"
},{
  id: 'ZOMBIES',
  attack: 2,
  defence: 1,
  health: 3,
  initiative: 3,
  ranged: false,
  special: [SPECIALS.DEFENCE_ON_ATTACK_ONE],
  upgradeFrom: "",
  costs: [3,0],
  faction: "Necropolis",
  tier: "Bronze"
},{
  id: 'ZOMBIES_#PACK',
  attack: 2,
  defence: 1,
  health: 3,
  initiative: 4,
  ranged: false,
  special: [SPECIALS.DEFENCE_ON_ATTACK_ZERO_ONE],
  upgradeFrom: "ZOMBIES",
  costs: [4,0],
  faction: "Necropolis",
  tier: "Bronze"
},{
  id: 'WRAITHS',
  attack: 3,
  defence: 0,
  health: 3,
  initiative: 5,
  ranged: false,
  special: [SPECIALS.HEAL_ONE_ON_ACTIVATION],
  upgradeFrom: "",
  costs: [4,0],
  faction: "Necropolis",
  tier: "Bronze"
},{
  id: 'WRAITHS_#PACK',
  attack: 3,
  defence: 0,
  health: 5,
  initiative: 7,
  ranged: false,
  special: [SPECIALS.HEAL_ONE_ON_ACTIVATION],
  upgradeFrom: "WRAITHS",
  costs: [6,0],
  faction: "Necropolis",
  tier: "Bronze"
},{
  id: 'VAMPIRES',
  attack: 4,
  defence: 1,
  health: 4,
  initiative: 6,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "",
  costs: [8,0],
  faction: "Necropolis",
  tier: "Silver"
},{
  id: 'VAMPIRES_#PACK',
  attack: 5,
  defence: 1,
  health: 4,
  initiative: 9,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION, SPECIALS.HEAL_TWO_ON_ATTACK],
  upgradeFrom: "VAMPIRES",
  costs: [12,0],
  faction: "Necropolis",
  tier: "Silver"
},{
  id: 'LICHES',
  attack: 3,
  defence: 1,
  health: 5,
  initiative: 6,
  ranged: true,
  special: [],
  upgradeFrom: "",
  costs: [8,0],
  faction: "Necropolis",
  tier: "Silver"
},{
  id: 'LICHES_#PACK',
  attack: 4,
  defence: 1,
  health: 5,
  initiative: 7,
  ranged: true,
  special: [],
  upgradeFrom: "LICHES",
  costs: [14,0],
  faction: "Necropolis",
  tier: "Silver"
},{
  id: 'DREAD_KNIGHTS',
  attack: 5,
  defence: 2,
  health: 7,
  initiative: 7,
  ranged: false,
  special: [SPECIALS.RETALIATION_CURSE],
  upgradeFrom: "",
  costs: [12,0],
  faction: "Necropolis",
  tier: "Gold"
},{
  id: 'DREAD_KNIGHTS_#PACK',
  attack: 6,
  defence: 2,
  health: 7,
  initiative: 9,
  ranged: false,
  special: [SPECIALS.DEATH_BLOW],
  upgradeFrom: "DREAD_KNIGHTS",
  costs: [20,1],
  faction: "Necropolis",
  tier: "Gold"
},{
  id: 'GHOST_DRAGON',
  attack: 6,
  defence: 3,
  health: 8,
  initiative: 9,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [19,1],
  faction: "Necropolis",
  tier: "Gold"
},{
  id: 'GHOST_DRAGON_#PACK',
  attack: 7,
  defence: 3,
  health: 9,
  initiative: 14,
  ranged: false,
  special: [SPECIALS.ADD_ONE_TO_ATTACK_DICE],
  upgradeFrom: "GHOST_DRAGON",
  costs: [32,2],
  faction: "Necropolis",
  tier: "Gold"
},
]
