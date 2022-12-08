{
    <div>
      <h1>
        {decode(storeQuestions[questionNumber].question)}
      </h1>
      <div className="answers">
        {

          allAnswers.map((answer, index) => {
            const handleClick = (e) => {
              if (e.target.value === storeQuestions[questionNumber].correct_answer) {
                e.target.style.backgroundColor = 'green'
                setisAnswerCorrect(true)
              }
              else {
                e.target.style.backgroundColor = 'red'
                setisAnswerCorrect(false)

              }
            }
            return (
              <div className='answers' key={index}>
                <button value={answer} style={{ backgroundColor: '#3c54d7' }} onClick={(e) => handleClick(e)}>{decode(answer)}</button>
              </div>
            )
          })
        }
      </div>

      <PrimaryButton content={'Next'} onClick={handleClick} />
    </div>
  }