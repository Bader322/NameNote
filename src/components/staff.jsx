import React, { Component } from "react";
import Vex from "vexflow";

const VF = Vex.Flow;

var div = document.getElementById("boo");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);
// Configure the rendering context.
renderer.resize(450, 250);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

class Staff extends Component {
  draw = (nextNote, wrongNotes) => {
    console.log("current nNote: ", nextNote[0]);
    console.log("current wNotes: ", wrongNotes);

    context.clear();

    const voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables([new VF.StaveNote({ keys: [nextNote], duration: "q" })]);

    // Format and justify the notes to 400 pixels.
    new VF.Formatter().joinVoices([voice]).format([voice], 400);

    stave = new VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef("treble");
    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
    voice.draw(context, stave);
    // renderChoices
  };

  render() {
    console.log("this.note In render: ", this.props.nextNote);

    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.draw(this.props.nextNote, this.props.wrongNotes);

              // display buttons of choices
              this.props.getRandomNotes();
            }}
          >
            Play
          </button>
          {this.props.wrongNotes.map((wrongNote) => {
            return <button key={wrongNote}>{wrongNote}</button>;
          })}
        </div>
      </div>
    );
  }
}

export default Staff;
