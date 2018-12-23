import React from 'react';
import Position from './Position';

const Board = (props) =>
    <div className="board">
        {props.boardState.map((rank, rankIndex) =>
            rank.map((content, fileIndex) => {
                let cases =
                    (props.turn === 'black' && content === 'b') ||
                    (props.turn === 'red' && content === 'r');
                return cases
                    ? (
                    <Position key={fileIndex}
                        coord={[rankIndex, fileIndex]}
                        content={content}
                        selected={props.selected}
                    />
                ) : (
                    <Position key={fileIndex}
                        coord={[rankIndex, fileIndex]}
                        content={content}
                        selected={undefined}
                        move={props.canMoveTo
                            .reduce((acc, cur) => acc.concat(cur), [])
                            .filter((coord, index, coordList) => {
                                if (index < coordList.length - 1 && index % 2 === 0) {
                                    return coordList[index] === rankIndex && coordList[index+1] === fileIndex
                                }
                                if (index > 0 && index % 2 !== 0) {
                                    return coordList[index-1] === rankIndex && coordList[index] === fileIndex
                                }
                            })
                            .length > 0 ? props.move : undefined
                        }
                    />
                )
            })
        )}
    </div>

export default Board;