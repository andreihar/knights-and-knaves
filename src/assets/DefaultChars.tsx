import { CharClass } from "../models/CharClass";

import cedric from './factions/cedric.webp';
import seraphina from './factions/seraphina.webp';
import kaelan from './factions/kaelan.webp';
import ingmar from './factions/ingmar.webp';
import dante from './factions/dante.webp';
import tyrell from './factions/tyrell.webp';

export const defaultChars = [
  new CharClass('Prince Cedric', 'Chaos Knight', 'red', cedric, "As the eldest son of King Aldric the Wise, Prince Cedric Aumont founded the Infernal Legion amidst the political upheaval following his father's mysterious death. Fuelled by his ambition to restore the rightful succession and reclaim his birthright, Cedric leads the Legion with unwavering determination and a fierce sense of duty. Though his noble lineage sets him apart, Cedric's readiness to take up arms and fight alongside his followers has earned him their unwavering respect and loyalty. His leadership is marked by a resolute focus on overcoming the challenges posed by the fractured kingdom."),
  new CharClass('Seraphina Flamebringer', 'Inferno Priest', 'red', seraphina, "A powerful sorceress and former advisor to King Aldric III, Seraphina Flamebringer now stands as Prince Cedric's trusted lieutenant within the Infernal Legion. Banished from the royal court for delving into forbidden magics, Seraphina redirected her formidable talents to Cedric's cause. Her mastery of infernal magic and sharp intellect make her a key player in the Legion's efforts to restore Cedric's claim to the throne. Conjuring flames of chaos and wielding her arcane prowess, Seraphina ensures that the Infernal Legion remains a formidable force to be reckoned with in the struggle for control of Estoria."),
  new CharClass('Kaelan Thorn', 'Warlord', 'green', kaelan, "A seasoned mercenary warrior from distant realms, Captain Kaelan Thorn commands the Oakheart Hanse with strategic brilliance and unwavering loyalty. Initially drawn into the conflict by the promise of wealth and opportunity amidst Estoria's disturbance, Kaelan now leads his band of mercenaries with honour and determination. Hired by the noble houses to sway the outcome of the succession crisis, he strives to secure a prosperous future for his comrades while navigating the shifting political landscape with a keen sense of principle and purpose."),
  new CharClass('Ingmar Stormborn', 'Ursine Warrior', 'green', ingmar, "A battle-hardened warrior hailing from the rugged northern lands, Ingmar Stormborn joined the Oakheart Hanse seeking fortune and adventure amidst Estoria's crisis. With his fierce demeanour and steadfast loyalty, Ingmar has swiftly ascended to a position of leadership within the mercenary band. As they are hired by noble houses to influence the succession crisis, Ingmar views this opportunity as a chance to prove his valour in battle, secure glory, and ensure his own and his comrades' renown in the shifting tides of the kingdom's chaos."),
  new CharClass('Dante Nightshade', 'Shadow Fiend', 'blue', dante, "A shadowy figure draped in mystery, Dante Nightshade was once a trusted agent of the crown before his fall from grace. Exiled for alleged crimes, he now leads the Shadow Brotherhood with a blend of cunning and ruthlessness. As the kingdom spirals into chaos following King Aldric III's death, Dante is driven to preserve the legacy of the old order and to uncover the truth behind his own betrayal. Operating from the shadows, he manoeuvres through the intricate webs of Estoria's turmoil to secure his own enigmatic purposes and restore his lost honour."),
  new CharClass('Tyrell Darkheart', 'Phantom Assassin', 'blue', tyrell, "An elite warrior and adept operative of the Shadow Brotherhood, Tyrell Darkheart excels in both covert operations and hand-to-hand combat. As Dante Nightshade’s trusted right-hand man in the field, Tyrell executes missions with a blend of precision and ruthless efficiency. His fearless nature and formidable combat skills strike terror into the hearts of their enemies. Devoted to the Brotherhood's cause, Tyrell plays a crucial role in navigating the political disorder of Estoria, using his expertise to uncover hidden truths and influence the kingdom's fate."),
];