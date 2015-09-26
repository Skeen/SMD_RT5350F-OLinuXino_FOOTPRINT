#!/bin/bash
tsc --out output.js HLK_gen.ts 
node output.js RT5350F-OLinuXino 13 2.54 > Olimax.kicad_mod
