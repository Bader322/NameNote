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
    return (
      <div>
        <div>
          <button
            style={this.props.style}
            id="playButton"
            onClick={() => {
              this.draw(this.props.nextNote, this.props.wrongNotes);
              this.props.playButtonStyle();

              // display buttons of choices
            }}
          >
            Play
          </button>
          <div></div>
          {this.props.notesOnKeyBoard.map((noteOnKeyBoard) => {
            return (
              <button
                key={noteOnKeyBoard}
                id={noteOnKeyBoard}
                onClick={() => {
                  this.props.checkAnswer(this.props.nextNote[0]);
                  this.props.getRandomNotes();
                  this.draw(this.props.nextNote, this.props.wrongNotes);
                }}
              >
                {noteOnKeyBoard}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Staff;
