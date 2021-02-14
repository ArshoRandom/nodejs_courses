import Soldier from "./military/personal_units/Soldier.mjs";
import Commander from "./military/personal_units/Commander.mjs";
import Army from "./military/global_units/Army.mjs";
import PlatoonCommander from "./military/personal_units/PlatoonCommander.mjs";
import Platoon from "./military/global_units/Platoon.mjs";

let soldier1 = new Soldier('Jack', 'Smith')
let soldier2 = new Soldier('John', 'Rio')
let soldier3 = new Soldier('Andrew', 'Scott')
let soldier4 = new Soldier('Erik', 'Rivera')

let soldier11 = new Soldier('Yuri', 'Minin')
let soldier12 = new Soldier('Oleg', 'Bashkov')
let soldier13 = new Soldier('Vasya', 'Mitin')
let soldier14 = new Soldier('Alex', 'Armatov')

let soldier21 = new Soldier('Hayk', 'Valesyan')
let soldier22 = new Soldier('Jiro', 'Haroyan')
let soldier23 = new Soldier('Gexam', 'Avetisyan')
let soldier24 = new Soldier('Gor', 'Kirakosyan')


let commander1 = new Commander('Valter', 'Abrams',[soldier1,soldier2,soldier3,soldier4])
let commander2 = new Commander('Aleksandr', 'Vasilev',[soldier11,soldier12,soldier13,soldier14])
let commander3 = new Commander('Armen', 'Khachatryan',[soldier21,soldier22,soldier23,soldier24])
let platoonCommander = new PlatoonCommander('Oscar','Mendes',[commander1,commander2,commander3])

let platoon = new Platoon(platoonCommander);

platoon.platoonAttack()