export function getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function generateHalfToneSequenceOfNotes(startNote:string, currentOctave:number, amount:number, withSharps:boolean) {

    const notes = withSharps ? "A A# B C C# D D# E F F# G G#".split(' ') :
        "A Bb B C Db D Eb E F Gb G Ab".split(' ')

    const sequence = [];
    const noteIndex = notes.indexOf(startNote);
    const stopAt = noteIndex + amount;
    for (let i = noteIndex; i <= stopAt; i++) {
        const currNote = notes[i % notes.length];
        if (currNote === 'C') { currentOctave++ }
        sequence.push(currNote + currentOctave)
    }

    return sequence;
}