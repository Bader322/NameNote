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
  draw = () => {
    // Letter note

    // "/3", "/4", "/5", "/6" key mappings on staff
    console.log("randomNote in draw : ", this.props.randomNote);
    let { keyMapper } = this.props;
    let nextNote = this.props.randomNote + keyMapper;

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
        <div className="board">
          <button
          className="btn btn-primary"
            style={this.props.style}
            id="playButton"
            onClick={() => {
              this.draw();
              this.props.playButtonStyle();

              // display buttons of choices
            }}
          >
            NameNote
          </button>
          <div style={this.props.keysStyle}>
            {" "}
            <span className="badge badge-primary " id="outerLayer">
              {" "}
              Score:{" "}
              <span className="badge badge-light"> {this.props.score}</span>
            </span>{" "}
          </div>

          {this.props.notesOnKeyBoardKeys.map((notesOnKeyBoardKey) => {
            return (
              <div key={notesOnKeyBoardKey}>
                <button
                  className="badge badge-light m-1"
                  style={this.props.keysStyle}
                  key={notesOnKeyBoardKey}
                  id={notesOnKeyBoardKey}
                  onClick={() => {
                    this.props.checkAnswer(notesOnKeyBoardKey);

                    this.draw();
                    this.props.getRandomNotes();
                  }}
                >
                  <span>{notesOnKeyBoardKey}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Staff;
