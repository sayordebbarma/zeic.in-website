import zs1 from '../assets/images/products/zipSound/zs1.png';
import zs2 from '../assets/images/products/zipSound/zs2.png';
import zs3 from '../assets/images/products/zipSound/zs3.png';
import zs4 from '../assets/images/products/zipSound/zs4.png';
import zs5 from '../assets/images/products/zipSound/zs5.png';
import zs6 from '../assets/images/products/zipSound/zs6.png';
import zs7 from '../assets/images/products/zipSound/zs7.png';
import cnc1 from '../assets/images/products/CNCWoodworks/cnc1.png';
import cnc2 from '../assets/images/products/CNCWoodworks/cnc2.png';
import cnc3 from '../assets/images/products/CNCWoodworks/cnc3.png';
import cnc4 from '../assets/images/products/CNCWoodworks/cnc4.png';
import cnc5 from '../assets/images/products/CNCWoodworks/cnc5.png';
import cnc6 from '../assets/images/products/CNCWoodworks/cnc6.png';
import cnc7 from '../assets/images/products/CNCWoodworks/cnc7.png';
import elc1 from '../assets/images/products/elc/elc1.png';
import elc2 from '../assets/images/products/elc/elc2.png';
import servo1 from '../assets/images/products/servoStabilizer/servoStabilizer1.png';

export const products = [
  {
    id: 1,
    name: 'Zip Sound',
    description:
      'Elite in-house public address speakers. Experience world-class audio quality and precision. Ideal for stadiums, theaters, and events, ensuring crystal-clear sound for an immersive and memorable auditory experience',
    types: [
      'High Speakers: Reproduce high frequencies.',
      'Mid Speakers: Handle mid-range frequencies, like vocals and instruments.',
      'Low Speakers: Produce low-frequency sounds, such as bass tones.',
      'Subwoofers:  Specialized for deep bass reproduction.',
      'Line Array Speakers: Multiple drivers arranged for even sound dispersion.',
      'Monitor Speakers: Provide accurate, flat frequency response for audio production.',
    ],
    specifications: ['Power Range: 300 W - 4000 W'],
    images: [zs1, zs2, zs3, zs4, zs5, zs6, zs7],
  },
  {
    id: 2,
    name: 'CNC Woodwork',
    description:
      'Explore limitless possibilities with our CNC-carved woodcraft for signboards, main doors, and furniture. Meticulously crafted and customizable, enriched with epoxy resin, brings unique elegance to any space',
    types: [
      'Sign Boards: Intricately carved with CNC technology and enriched with epoxy resin for a perfect blend of functionality and aesthetics.',
      'Main Doors: Make a statement at the entrance with main doors that showcase the beauty of CNC carving and the resilience of epoxy resin.',
      'Customized Furniture: From tables to doors, our wooden-epoxy furniture adds sophistication and individuality to any space.',
    ],
    specifications: [
      'Fully Customizable',
      'Versatile Applications'
    ],
    images: [cnc1, cnc2, cnc3, cnc4, cnc5, cnc6, cnc7],
  },
  {
    id: 3,
    name: 'ELC',
    description:
      'Digital and Analogue  Electronic Load Controller for Pico and Micro Hydro power. This innovative device stabilizes generator frequency and voltage, boasting a lightweight design for effortless handling and straightforward installation',
    types: [
      'Analogue ELC: Uses analog circuitry to regulate and control electrical loads.',
      'Digital ELC: Digital electronic load control utilizes digital technology, such as microcontrollers or digital signal processors (DSPs), to manage and regulate electrical loads.',
    ],
    specifications: [
      'Power Range: 2kW to 250kW',
      'Weight: 1.5 kgs',
    ],
    images: [elc1, elc2],
  },
  {
    id: 4,
    name: 'Servo Stabilizer',
    description:
      'Enhance power reliability with our 3-Phase Servo Stabilizer. Engineered for precision, it regulates voltage across three phases, safeguarding your equipment and ensuring uninterrupted performance in diverse applications',
    types: [
      'Enhance power reliability with our 3-Phase Servo Stabilizer. Engineered for precision, it regulates voltage across three phases, safeguarding your equipment and ensuring uninterrupted performance in diverse applications.',
    ],
    specifications: [
      'Phase: 3 phase',
      'Capacity: 40 kVA',
      'Input: 120-280 V/phase',
      'Output: 230x3 ± 5%',
    ],
    images: [servo1],
  },
];
