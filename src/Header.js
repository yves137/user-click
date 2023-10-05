export function Header() {
   return <div className="mb-10 text-blue-600">
        {Array(10)
          .fill(undefined)
          .map((_, i) =>
            (i===0) ? <><span className="underline" key={`home${i}`}>Home</span><span key={`upper${i}`}> | </span></> :
            (i===9) ? <span className="underline" key={`lastExercise${i}`}>Exercise {i}</span> :
           <>
           <span className="underline" key={`exercise${i}`}>Exercise {i}</span> <span key={`lower${i}`}> | </span>
           </> 
          )
          }
    </div>
}
