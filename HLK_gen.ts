declare var process : any;

var part_name = process.argv[2];
var num_pins = parseInt(process.argv[3]);
var pin_spacing : number = parseFloat(process.argv[4]);

var pad_length = 3.68;
var pad_width = pin_spacing / 2;

var kicad_mod = "";
kicad_mod += "(module \"" + part_name + "\" (layer F.Cu) (tedit 54E7ACBD)\n";
kicad_mod += "(fp_text reference REF** (at 0.1 4.6) (layer F.SilkS)\n";
kicad_mod += "  (effects (font (size 1.5 1.5) (thickness 0.15)))\n";
kicad_mod += ")\n";
//kicad_mod += "(fp_text value \"" + part_name + "\" (at 0.5 -4.3) (layer F.Fab)\n";
//kicad_mod += "  (effects (font (size 1.5 1.5) (thickness 0.15)))\n";
//kicad_mod += ")\n";
kicad_mod += "(fp_text user A (at -16.8 -11.8) (layer F.SilkS)\n";
kicad_mod += "  (effects (font (size 1.5 1.5) (thickness 0.15)))\n";
kicad_mod += ")\n";
kicad_mod += "(fp_circle (center -16.8 -11.7) (end -15.8 -12.8) (layer F.SilkS) (width 0.15))";
kicad_mod += "(fp_line (start -20 14.5) (end 20 14.5) (layer F.SilkS) (width 0.15))";
kicad_mod += "(fp_line (start 20 14.5) (end 20 -14.5) (layer F.SilkS) (width 0.15))";
kicad_mod += "(fp_line (start 20 -14.5) (end -20 -14.5) (layer F.SilkS) (width 0.15))";
kicad_mod += "(fp_line (start -20 -14.5) (end -20 14.5) (layer F.SilkS) (width 0.15))";

var y_pinheader_seperation = 35.56/2;
var x_coord : number = -pin_spacing * num_pins/2;
var y_seperation = 4.44/2;

for (var n = 1; n <= num_pins*2; n+=2)
{         
    x_coord += pin_spacing;

    kicad_mod += "(pad " + n + " smd rect (at " + x_coord + " " + (y_pinheader_seperation + y_seperation) + ") (size " + pad_width + " " + pad_length + ") (layers F.Cu F.Paste F.Mask))\n";
    kicad_mod += "(pad " + (n+1) + " smd rect (at " + x_coord + " " + (y_pinheader_seperation - y_seperation) + ") (size " + pad_width + " " + pad_length + ") (layers F.Cu F.Paste F.Mask))\n";
} 

var x_coord : number = -pin_spacing * num_pins/2;

for (var n = 1; n <= num_pins*2; n+=2)
{         
    x_coord += pin_spacing;

    kicad_mod += "(pad " + (num_pins*2 + n) + " smd rect (at " + x_coord + " " + (-y_pinheader_seperation + y_seperation) + ") (size " + pad_width + " " + pad_length + ") (layers F.Cu F.Paste F.Mask))\n";
    kicad_mod += "(pad " + (num_pins*2 + (n+1)) + " smd rect (at " + x_coord + " " + (-y_pinheader_seperation - y_seperation) + ") (size " + pad_width + " " + pad_length + ") (layers F.Cu F.Paste F.Mask))\n";
} 

var y_coord : number = -pin_spacing*4.5; 
var x_coord : number = -pin_spacing/2;
var x_offset : number = 7.62 + pin_spacing * num_pins/2;
var y_offset : number = -pin_spacing*4;

for (var n = 1; n <= 16; n++)
{         
    y_coord += pin_spacing;
    x_coord *= -1;

    kicad_mod += "(pad " + (num_pins*4 + n) + " smd rect (at " + (x_coord + x_offset) + " " + (y_coord + y_offset) + ") (size " + pad_length + " " + pad_width + ") (layers F.Cu F.Paste F.Mask))\n";
} 

kicad_mod += ")\n";



console.log(kicad_mod);
