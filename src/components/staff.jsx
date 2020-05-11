import React, { Component } from "react";
import Vex from "vexflow";
const VF = Vex.Flow;
// SVG prep

var div = document.getElementById("boo");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);
// Configure the rendering context.
renderer.resize(450, 250);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

class Staff extends Component {
  // Prep SVG to draw

  state = {
    keyMapper: ["/3", "/4", "/5", "/6"],
    noteOnKeyBoard: [
      //   Natural, sharps, flats respectively
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
    ],
  };

  draw = () => {
    // clear canvus
    context.clear();

    stave = new VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef("treble");
    let [voice, randomNote] = this.getNote();
    randomNote = randomNote.slice(0, 1);
    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
    voice.draw(context, stave);

    this.getChoices(randomNote);
  };

  // add some more random notes
  getChoices = (randomNote) => {
    const notes = this.state.noteOnKeyBoard.filter(function (note) {
      return note !== randomNote;
    });
    console.log(notes);
    console.log(randomNote);
  };

  getRandomNotes = () => {
    // a,b,c,d,e,f,g **** no accidentals yet
    let { noteOnKeyBoard } = this.state;
    let { keyMapper } = this.state;
    let randomNote =
      noteOnKeyBoard[Math.floor(Math.random() * noteOnKeyBoard.length)];

    let keyMapperRandom =
      keyMapper[Math.floor(Math.random() * keyMapper.length)];
    // return key format ie. "c/4" is middle c on the piano
    return randomNote + keyMapperRandom;
  };
  // get a note from getRandomNotes() then pass it to a stave note
  // then return the note and the letter in an array
  getNote() {
    let randomNote = this.getRandomNotes();

    // Create a voice in 1/4 and one random from above
    var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables([
      new VF.StaveNote({ keys: [randomNote], duration: "q" }),
    ]);

    // Format and justify the notes to 400 pixels.
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    return [voice, randomNote];
  }

  render() {
    return (
      <div>
        {/* <div>{this.draw()}</div> */}
        <div>
          <button onClick={this.draw}>Play </button>
        </div>
      </div>
    );
  }
}

export default Staff;
