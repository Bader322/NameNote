import React, { Component } from "react";
import Vex from "vexflow";
const VF = Vex.Flow;

// Render voice
// **********************
var div = document.getElementById("boo");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);
// Configure the rendering context.
renderer.resize(450, 250);

var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

//************ */ call draw

class Staff extends Component {
  state = {
    prepDraw: () => {},

    draw: () => {
      context.clear();

      stave = new VF.Stave(10, 40, 400);

      // Add a clef and time signature.
      stave.addClef("treble");
      var voice = this.getNote();
      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();
      voice.draw(context, stave);
    },

    keyMapper: ["/4", "/5"],
    noteOnKeyBoard: [
      //   Natural, sharps, flats respectively
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      // "a#",
      // "b#",
      // "c#",
      // "d#",
      // "e#",
      // "f#",
      // "g#",
      // "ab",
      // "bb",
      // "cb",
      // "db",
      // "eb",
      // "fb",
      // "gb",
    ],
  };
  getRandomNotes = () => {
    // a,b,c,d,e,f,g **** no accidentals yet
    let { noteOnKeyBoard } = this.state;
    let { keyMapper } = this.state;
    let randomNote =
      noteOnKeyBoard[Math.floor(Math.random() * noteOnKeyBoard.length)];

    let keyMapperRandom =
      keyMapper[Math.floor(Math.random() * keyMapper.length)];

    return randomNote + keyMapperRandom;
  };
  getNote() {
    let randomNote = this.getRandomNotes();
    console.log(randomNote);
    var notes = [
      // A quarter-note C.
      new VF.StaveNote({ keys: [randomNote], duration: "q" }),
    ];
    // Create a voice in 4/4 and add above notes
    var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables(notes);
    // Format and justify the notes to 400 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    return voice;
  }

  render() {
    return (
      <div>
        {/* <div>{this.draw()}</div> */}
        <div>
          <button onClick={this.state.draw}>Click</button>
        </div>
      </div>
    );
  }
}

export default Staff;
