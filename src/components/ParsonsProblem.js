import React, { useState, useEffect } from 'react'
import produce from 'immer'
import clsx from 'clsx'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

function shuffleArray (array) {
  array = array.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export default function ParsonsProblem ({ code, language }) {
  const [originalLines, setOriginalLines] = useState([])
  const [scrambledLines, setScrambledLines] = useState([])

  useEffect(() => {
    if (!code) {
      code = ''
    }
    setOriginalLines(code.trim().split('\n').map(line => ({ line: line, indentLevel: 0 })))
  }, [code])

  useEffect(() => {
    resetCode()
  }, [originalLines])

  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const lines = reorder(
      scrambledLines,
      result.source.index,
      result.destination.index
    )

    setScrambledLines(lines)
  }

  const checkCode = () => {
    const checkedLines = produce(scrambledLines, draftLines => {
      for (let idx = 0; idx < draftLines.length; idx++) {
        draftLines[idx].checked = true
        if (draftLines[idx].line === originalLines[idx].line) {
          draftLines[idx].correct = true
        }
      }
    })
    setScrambledLines(checkedLines)
  }

  const resetCode = () => {
    setScrambledLines(shuffleArray(originalLines).map(line => ({ ...line, checked: false, correct: null })))
  }

  return (
    <div class='ParsonsProblem'>
      <div style={{ marginBottom: '2rem' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='parsons'>
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {scrambledLines.map((line, idx) => (
                  <Draggable key={idx} draggableId={`${idx}`} index={idx}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <pre className={clsx('codeline', { correct: line.checked && line.correct, incorrect: line.checked && !line.correct })}><code>{line.line}</code></pre>
                      </div>
                    )}

                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div class='button-group'>
        <button className='button button--primary' onClick={checkCode}>Check</button>
        <button className='button button--danger' onClick={resetCode}>Reset</button>
      </div>
    </div>
  )
}
