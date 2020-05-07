import Vex from "vexflow";
import React, { Component } from "react";
import Question from "./question";

const VF = Vex.Flow;

class Staff extends Component {
  state = {
    notes: [
      // A quarter-note C.
      new VF.StaveNote({ clef: "treble", keys: ["c/4", "d/4"], duration: "q" }),

      // A quarter-note D.
      new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" }),

      // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // position of the rest.
      new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" }),

      // A f-Major chord.
      new VF.StaveNote({
        clef: "treble",
        keys: ["f/4", "a/4", "c/5"],
        duration: "q",
      }),
    ],
  };
  draw() {
    // Create an SVG renderer and attach it to the DIV element named "vf".
    const div = document.getElementById("score");
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 300);
    const context = renderer.getContext();

    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");

    // Create a voice in 4/4 and add the notes from above
    var voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(this.state.notes);

    // Format and justify the notes to 400 pixels.
    new VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }

  render() {
    return (
      <div>
        {this.draw()}
        <Question
          value={this.state.notes.map((note) => {
            note.getKeyProps().map((el) => {
              console.log(el.key);
            });
          })}
        />
      </div>
    );
  }
}

export default Staff;
