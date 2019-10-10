import AudioKeys from 'audiokeys';
import Tone from 'tone';
import { scale } from '@tonaljs/scale';
import { sample } from "lodash";

let scaleType1 = "c3 scriabin";
let scaleType2 = "c4 scriabin";

let { notes: n1 } = scale(scaleType1);
let { notes: n2 } = scale(scaleType2);
let notes = [...n1, ...n2];

// let ctx = new AudioContext();
var synth = new Tone.PolySynth(6, Tone.Synth, {
    oscillator: {
      type: "sine"
    }
}).toMaster();

// create keyboard
var keyboard = new AudioKeys();

// let oscMap = {}

keyboard.down(function() {
    /*
    let osc = ctx.createOscillator();
    osc.frequency.value = note.frequency
    osc.connect(ctx.destination);
    osc.start();

    oscMap[note.frequency] = osc;
    */
   let note = sample(notes);
    synth.triggerAttackRelease(note, "8n");
});

/*
keyboard.up(function(note){
    let osc = oscMap[note.frequency];
    
    osc.stop();
});
*/

