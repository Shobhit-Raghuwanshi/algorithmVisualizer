import React, { useState } from "react";

import Node from "./Node";
import { dijkstra,getNodesInShortestPathOrder } from "./algorithms/dijkstra";
import Header from "./Header"


let startI = 8;
let startJ = 8;
let endI = 16;
let endJ = 37;




function Grid() {
    const L = [];
    const createNode = (col, row) => {
        return {
          col,
          row,
          isStart: row === startI && col === startJ,
          isFinish: row === endI && col === endJ,
          distance: Infinity,
          isVisited: false,
          isWall: false,
          previousNode: null,
        };
      };
    for (let i = 0; i < 25; i++) {

        let rows = [];
        for (let j = 0; j < 47; j++) {
            
                rows.push(createNode(j,i));
            
            
        }
        L.push(rows);
    }

    const [G,setG] = useState(L)
    const [mouseIsPressed,MP] = useState(false);
    const [visual,setvisual] = useState(false);
    const [dd,setdd] = useState(false);
    const [dd1,setdd1] = useState(false);
    const [sp,setsp] = useState("");
    


    function clearBoard(){
        
        window.location.reload(true);
    }


    function handleMouseDown(row, col) {
        
       if(dd || (row === startI && col === startJ)){
          
            startI = row;
            startJ = col;
            setdd(true);
            document.getElementById(`node-${row}-${col}`).classList.remove('startNode')
            const newGrid = G.slice();

            const node = newGrid[row][col];
            newGrid[row][col].isStart = false;
            
            const newNode = {
                ...node,
                isStart: node.row === row && node.col === col,
               
            };
            newGrid[row][col] = newNode;
            setG(newGrid);
            MP(true);
           
       }else if(dd1 || (row === endI && col === endJ)){
        endI = row;
        endJ = col;
        setdd1(true);
        document.getElementById(`node-${row}-${col}`).classList.remove('endNode')
        const newGrid = G.slice();

        const node = newGrid[row][col];
        newGrid[row][col].isFinish = false;
        
        const newNode = {
            ...node,
            isFinish: node.row === row && node.col === col,
           
        };
        newGrid[row][col] = newNode;
        setG(newGrid);
        MP(true);
       }
       
       else{
        const newGrid = G.slice();
        const node = newGrid[row][col];
        const newNode = {
            ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        setG(newGrid)
        
        MP(true);
       }
        
      }
    
      function  handleMouseEnter(row, col) {
        
        if (!mouseIsPressed) return;

        if(dd){
            startI = row;
            startJ = col;
            document.getElementById(`node-${row}-${col}`).classList.remove('startNode')
            const newGrid = G.slice();
            const node = newGrid[row][col];
            newGrid[row][col].isStart = false;
            
            
            const newNode = {
                ...node,
         
              
            };
            newGrid[row][col] = newNode;
            setG(newGrid)
        }
        else if(dd1 || (row === endI && col === endJ)){
            endI = row;
            endJ = col;
           
            document.getElementById(`node-${row}-${col}`).classList.remove('endNode')
            const newGrid = G.slice();
    
            const node = newGrid[row][col];
            newGrid[row][col].isFinish = false;
            
            const newNode = {
                ...node,
             
               
            };
            newGrid[row][col] = newNode;
            setG(newGrid);
           
           }


        else{
            const newGrid = G.slice();
            const node = newGrid[row][col];
            const newNode = {
                ...node,
            isWall: !node.isWall,
        };
        newGrid[row][col] = newNode;
        setG(newGrid)
        
        }
        
      }
    
      function handleMouseUp(row,col) {
        if(dd){
            document.getElementById(`node-${row}-${col}`).classList.add('startNode');
        }
        if(dd1){
            document.getElementById(`node-${row}-${col}`).classList.add('endNode');
        }
        
        MP(false);
        setdd(false);
        setdd1(false)
      }



    
    function showDijkstra(visitedNodesInOrder,shortestPath) {
        for (let i = 0; i <= visitedNodesInOrder.length; i++) {
            if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
                animateShortestPath(shortestPath);
            }, 10 * i);
            return;
        }
          
          setTimeout(() => {
            const node = visitedNodesInOrder[i];
            if(node === undefined){
                console.log("un");
            }
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-visited';
          }, 10 * i);
        }
      }


    function  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

    function visulizeDik(){
        if(!visual){
            setvisual(true);
            const startNode = G[startI][startJ];
            const finishNode = G[endI][endJ];
            const visitedNodesInOrder = dijkstra(G, startNode, finishNode);
            const shortestPath = getNodesInShortestPathOrder(finishNode);
            
            setsp(shortestPath.length);
            showDijkstra(visitedNodesInOrder,shortestPath);
        }else{
            console.log(visual);
            setG(L);
        }   
    }


    function randomMaze(board,row,col){
        let newBoard = board.slice();
        const pairs = [];
        for(let i = 0;i<row;i++){
            for( let j = 0;j <col;j++){
                const random = Math.floor(Math.random()*100)+10;
                if( random%4 === 0 ){
                    newBoard[i][j].isWall = true;
                    pairs.push({
                        xx:i,
                        yy:j
                    });
                }
            }
        }
        return pairs;
        
    }



    function handleCreateMaze(){
        let pairs;
        
        pairs= randomMaze(G,25,47);
               
           
      
        for( let i = 0;i<pairs.length;i++ ){
            setTimeout(()=>{
                
                if((pairs[i].xx!==startI || pairs[i].yy!==startJ) && (pairs[i].xx!==endI || pairs[i].yy!==endJ) ){
                    document.getElementById(`node-${pairs[i].xx}-${pairs[i].yy}`).className = "node node-wall";
                }
            },i*20);
        }
    }


    return (
        <div className="grid-container">
        <Header SP = {sp} onClick= {visulizeDik} onClickR= {handleCreateMaze} onClickC = {clearBoard}/>
       
    <div className="grid">
        <div className="row">
        {G.map((row, rowId) => {
            return (
                <div  key={rowId}>
                    {row.map((node, nodeId) => {
                        const {row, col, isFinish, isStart, isWall} = node;
                        return (
                            <Node   key={nodeId + " " +rowId}
                                    row={row}
                                    col={col}
                                    
                                    isFinish={isFinish}
                                    isStart={isStart}
                                    isWall={isWall}
                                    mouseIsPressed={mouseIsPressed}  
                                    onMouseDown={(row, col) =>handleMouseDown(row, col)}
                                    onMouseEnter={(row, col) =>
                                    handleMouseEnter(row, col)}
                                    onMouseUp={() => handleMouseUp(row,col)}     
                                >
                                
                            </Node>
                        );
                    })}
                </div>);
        })}
        </div>
    </div>
        

    </div>
    );
}

export default Grid;