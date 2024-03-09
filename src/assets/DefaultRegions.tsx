import { RegionClass } from '../models/RegionClass';
import estoria from '../assets/images/estoria.jpg'
import feywild from '../assets/images/hero.jpg'

export const defaultRegions = [
  new RegionClass('Estoria', estoria, 'Once a prosperous and peaceful land where all, from royalty to the brave military men and women, dwelled harmoniously alongside the Crown Jewel. However, this fierce region now finds itself weakened in the absence of the Jewel. Citizens are resolved to reclaim it, fighting relentlessly until it rightfully rests in their hands once more.'),
  new RegionClass('Feywild Grove', feywild, 'Feywild Grove is where Witch Martha, once in possession of the Crown Jewel, was defeated by Estoria\'s valiant warriors. Now, with the Witch vanquished, the noble teams of Estoria converge upon this enchanted realm to reclaim the Jewel for their kingdom. Yet, amidst the ancient trees and shadowy glades, a new conflict emerges as erstwhile allies turn against each other. Loyalties fray and betrayals abound as the once-united forces now vie for supremacy over the coveted artifact. In this treacherous terrain, where the echoes of past battles linger and the whispers of dark magic still linger, the fate of Estoria hangs in the balance once more.')
]