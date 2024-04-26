import {TIER, Unit} from "./data";
import {SPECIALS} from "./specials";

export const FORTRESS: Unit[] = [{
  id: 'GNOLLS',
  attack: 2,
  defence: 1,
  health: 3,
  initiative: 4,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [2,0],
  faction: "Fortress",
  tier: "Bronze"
},{
  id: 'GNOLLS_#PACK',
  attack: 2,
  defence: 1,
  health: 4,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "GNOLLS",
  costs: [3,0],
  faction: "Fortress",
  tier: "Bronze"
},{
  id: 'LIZARDMEN',
  attack: 2,
  defence: 0,
  health: 3,
  initiative: 4,
  ranged: true,
  special: [],
  upgradeFrom: "",
  costs: [3,0],
  faction: "Fortress",
  tier: "Bronze"
},{
  id: 'LIZARDMEN_#PACK',
  attack: 3,
  defence: 0,
  health: 3,
  initiative: 5,
  ranged: true,
  special: [],
  upgradeFrom: "LIZARDMEN",
  costs: [5,0],
  faction: "Fortress",
  tier: "Bronze"
},{
  id: 'DRAGON_FLIES',
  attack: 3,
  defence: 0,
  health: 3,
  initiative: 8,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [4,0],
  faction: "Fortress",
  tier: "Bronze"
},{
  id: 'DRAGON_FLIES_#PACK',
  attack: 3,
  defence: 1,
  health: 3,
  initiative: 12,
  ranged: false,
  special: [SPECIALS.LOWER_RETALIATION_DAMAGE],
  upgradeFrom: "DRAGON_FLIES",
  costs: [7,0],
  faction: "Fortress",
  tier: "Bronze"
},{
  id: 'BASILISKS',
  attack: 4,
  defence: 1,
  health: 4,
  initiative: 5,
  ranged: false,
  special: [SPECIALS.CHANCE_TO_PARALYZE_MINUS_ONE],
  upgradeFrom: "",
  costs: [6,0],
  faction: "Fortress",
  tier: "Silver"
},{
  id: 'BASILISKS_#PACK',
  attack: 4,
  defence: 1,
  health: 5,
  initiative: 7,
  ranged: false,
  special: [SPECIALS.CHANCE_TO_PARALYZE_MINUS_ONE],
  upgradeFrom: "BASILISKS",
  costs: [9,0],
  faction: "Fortress",
  tier: "Silver"
},{
  id: 'GORGONS',
  attack: 4,
  defence: 2,
  health: 5,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [9,0],
  faction: "Fortress",
  tier: "Silver"
},{
  id: 'GORGONS_#PACK',
  attack: 5,
  defence: 2,
  health: 5,
  initiative: 6,
  ranged: false,
  special: [SPECIALS.DEATH_STARE],
  upgradeFrom: "GORGONS",
  costs: [14,0],
  faction: "Fortress",
  tier: "Silver"
},{
  id: 'WYVERNS',
  attack: 5,
  defence: 1,
  health: 8,
  initiative: 7,
  ranged: false,
  special: [SPECIALS.POISON],
  upgradeFrom: "",
  costs: [12,0],
  faction: "Fortress",
  tier: "Gold"
},{
  id: 'WYVERNS_#PACK',
  attack: 6,
  defence: 1,
  health: 8,
  initiative: 11,
  ranged: false,
  special: [SPECIALS.MIGHTY_POISON],
  upgradeFrom: "WYVERNS",
  costs: [18,1],
  faction: "Fortress",
  tier: "Gold"
},{
  id: 'HYDRAS',
  attack: 6,
  defence: 3,
  health: 8,
  initiative: 5,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "",
  costs: [20,1],
  faction: "Fortress",
  tier: "Gold"
},{
  id: 'HYDRAS_#PACK',
  attack: 7,
  defence: 3,
  health: 10,
  initiative: 7,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "HYDRAS",
  costs: [28,2],
  faction: "Fortress",
  tier: "Gold"
},]