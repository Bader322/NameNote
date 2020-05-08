import React, { Component } from "react";
import Vex from "vexflow";
const VF = Vex.Flow;
let vf = null;
class Staff extends Component {
  state = {
    draw: () => {
      // Create a VexFlow renderer attaced to the DIV element "boo"
      vf = new VF.Factory({ renderer: { elementId: "boo" } });
      let score = vf.EasyScore();
      let system = vf.System();

      this.state.placeNotes(system, score);
      // Create a 4/4 treble stave, and add two parallel voices

      // Draw it!
      vf.draw();
      console.log();
    },
    clear: () => {},

    placeNotes: (system, score) => {
      system
        .addStave({
          voices: [
            // whole note to cover entire measure
            // repreesnts a choice

            score.voice(score.notes(this.getNote())),
          ],
        })
        .addClef("treble");
    },

    gameResults: [0, 0],
    keyMapper: ["4/w", "3/w"],
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
  getNote() {
    let { noteOnKeyBoard } = this.state;
    let randomNote =
      noteOnKeyBoard[Math.floor(Math.random() * noteOnKeyBoard.length)];
    let { keyMapper } = this.state;

    let keyMapperRandom =
      keyMapper[Math.floor(Math.random() * keyMapper.length)];
    randomNote += keyMapperRandom;
    console.log(randomNote);

    return randomNote;
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
