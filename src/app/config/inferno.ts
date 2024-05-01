import {Unit} from "./data";
import {SPECIALS} from "./specials";

export const INFERNO: Unit[] = [{
  id: 'FAMILIARS',
  attack: 2,
  defence: 1,
  health: 2,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [2,0],
  faction: "Inferno",
  tier: "Bronze"
},{
  id: 'FAMILIARS_#PACK',
  attack: 3,
  defence: 1,
  health: 2,
  initiative: 7,
  ranged: false,
  special: [],
  upgradeFrom: "FAMILIARS",
  costs: [3,0],
  faction: "Inferno",
  tier: "Bronze"
},{
  id: 'MAGOGS',
  attack: 2,
  defence: 0,
  health: 2,
  initiative: 4,
  ranged: true,
  special: [],
  upgradeFrom: "",
  costs: [3,0],
  faction: "Inferno",
  tier: "Bronze"
},{
  id: 'MAGOGS_#PACK',
  attack: 2,
  defence: 0,
  health: 3,
  initiative: 6,
  ranged: true,
  special: [],
  upgradeFrom: "MAGOGS",
  costs: [5,0],
  faction: "Inferno",
  tier: "Bronze"
},{
  id: 'CERBERI',
  attack: 3,
  defence: 1,
  health: 5,
  initiative: 8,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [4,0],
  faction: "Inferno",
  tier: "Bronze"
},{
  id: 'CERBERI_#PACK',
  attack: 3,
  defence: 1,
  health: 5,
  initiative: 8,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "CERBERI",
  costs: [7,0],
  faction: "Inferno",
  tier: "Bronze"
},{
  id: 'DEMONS',
  attack: 3,
  defence: 2,
  health: 4,
  initiative: 5,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [6,0],
  faction: "Inferno",
  tier: "Silver"
},{
  id: 'DEMONS_#PACK',
  attack: 3,
  defence: 2,
  health: 5,
  initiative: 6,
  ranged: false,
  special: [],
  upgradeFrom: "DEMONS",
  costs: [8,0],
  faction: "Inferno",
  tier: "Silver"
},{
  id: 'PIT_LORDS',
  attack: 4,
  defence: 1,
  health: 6,
  initiative: 6,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [8,0],
  faction: "Inferno",
  tier: "Silver"
},{
  id: 'PIT_LORDS_#PACK',
  attack: 5,
  defence: 1,
  health: 6,
  initiative: 7,
  ranged: false,
  special: [],
  upgradeFrom: "PIT_LORDS",
  costs: [15,0],
  faction: "Inferno",
  tier: "Silver"
},{
  id: 'EFREET',
  attack: 5,
  defence: 1,
  health: 7,
  initiative: 9,
  ranged: false,
  special: [],
  upgradeFrom: "",
  costs: [12,0],
  faction: "Inferno",
  tier: "Gold"
},{
  id: 'EFREET_#PACK',
  attack: 6,
  defence: 1,
  health: 7,
  initiative: 13,
  ranged: false,
  special: [],
  upgradeFrom: "EFREET",
  costs: [18,1],
  faction: "Inferno",
  tier: "Gold"
},{
  id: 'ARCH_DEVILS',
  attack: 6,
  defence: 3,
  health: 8,
  initiative: 11,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "",
  costs: [22,1],
  faction: "Inferno",
  tier: "Gold"
},{
  id: 'ARCH_DEVILS_#PACK',
  attack: 7,
  defence: 3,
  health: 9,
  initiative: 15,
  ranged: false,
  special: [SPECIALS.IGNORE_RETALIATION],
  upgradeFrom: "ARCH_DEVILS",
  costs: [30,2],
  faction: "Inferno",
  tier: "Gold"
},]
