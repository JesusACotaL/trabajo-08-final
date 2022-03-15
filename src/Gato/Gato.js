import React, {useState} from 'react'
import './Gato.css'

const Gato = () =>{

    const [turn,setTurn] = useState('x');
    const [cells,setCells] = useState(Array(9).fill(''));
    const [winner,setWinner] = useState();


    const checkForWinner = (squares) =>{
        let i = 1;
        let combos ={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnal:[
                [0,4,8],
                [2,4,6]
            ]
        };
        for (let combo in combos){
            combos[combo].forEach((pattern) => {
                if (squares[pattern[0]]==='' || squares[pattern[1]]==='' || squares[pattern[2]]===''){
                    
                }
                else if (squares[pattern[0]]===squares[pattern[1]] && squares[pattern[1]]===squares[pattern[2]]){
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    };
    
    const handleClick =  (num) =>{
        if (cells[num]!== ''){
            alert('ese espacio ya jugó');
            return;
        }
        let squares = [...cells];
        if (turn === 'x'){
            squares[num] = 'x'
            setTurn('o');
        }else{
            squares[num] = 'o'
            setTurn('x');
        }
        checkForWinner(squares);
        setCells(squares);
    };

    const handleRestart = () =>{
        setWinner(null);
        setCells(Array(9).fill(''));
    };

    const Celda = ({num}) =>{
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    };

    return (
        <div className='container'>
           <table>
               Turno: {turn}
               <tbody>
                    <tr>
                       <Celda num={0}/>
                       <Celda num={1}/>
                       <Celda num={2}/>
                    </tr>
                    <tr>
                       <Celda num={3}/>
                       <Celda num={4}/>
                       <Celda num={5}/>
                    </tr>
                    <tr>
                       <Celda num={6}/>
                       <Celda num={7}/>
                       <Celda num={8}/>
                    </tr>
               </tbody>
           </table>
           {winner && (
               <>
               <p>{winner} es el ganador!</p>
               <button onClick={() => handleRestart()}>Jugar de nuevo</button>
               </>
           )}
        </div>
    );
};

export default Gato;