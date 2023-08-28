type HangmanWordProps = {
  GuessedLetters: string []
  wordToGuess: string
  reveal?: boolean
}

export function HangmanWord({
  GuessedLetters, 
  wordToGuess, 
  reveal=false
}:HangmanWordProps) {
 

return (
  <div
    style={{display: "flex",
    gap: ".25em",
    fontSize: "6rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily:"monospace",
    }}
  >

{wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                GuessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !GuessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
    </span>
   </span>

   ))}

  </div>
 )
}