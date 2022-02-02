
import React, { useState,useEffect } from 'react'
import './Sort.css';

import Slider from '@mui/material/Slider';
import Button from "@mui/material/Button";



const PRIMARY_COLOR = '#37AA9C';
const SECONDARY_COLOR = '#DA0037';
const COMPLETION_COLOR = 'green'
const BAR_SIZE = 580;


const Sort = () => {
    const a = [];
    
    const [isrunning, setIsrunning] = useState(false);
    const [arr,setarr] = useState(a);
    const [arrswap,setArrswap]=useState([]);
    const [completed,setCompleted]=useState([]);
    const [NoOfBars,setNoOfBars] = useState(30);
    const [ANIMATION_SPEED_MS,setANIMATION_SPEED_MS] = useState(66);

    useEffect(()=>{
      
      
      initialize();
    },[NoOfBars])
    
    for(let i=0; i<NoOfBars; i++){
            a.push(randomIntFromInterval(10, BAR_SIZE));
    }

    function initialize(){
        setCompleted([]);
        setArrswap([]);
        const bars = document.getElementsByClassName("bar")
        for(let i=0; i<bars.length; i++){
          bars[i].style.backgroundColor = PRIMARY_COLOR;
        }
        const a = [];
        for(let i=0; i<NoOfBars; i++){
            a.push(randomIntFromInterval(10, BAR_SIZE));
        }
        setarr(a);
    }





// QUICK SORT AHEAD





    function quickSort(){
      setIsrunning(true);
      const tell = arr.slice();
      const com = [];
      const a = [];
      const animations = getQuickSortAnimationsArr(tell,com);
      
      
      const temp = arr.slice();
      for(let i=0; i<animations.length ;i++){
       
        
        if(animations[i][3] === true){
          setTimeout(() => {
             
          
          let t = temp[animations[i][0]];
          temp[animations[i][0]] = temp[animations[i][1]];
          temp[animations[i][1]] = t;
          setarr([...temp]);
          }, ANIMATION_SPEED_MS*i);
          
        }else if(animations[i][3] === false){
          setTimeout(() => {
          
           
            const b = [];
            b.push(animations[i][1]);
            b.push(animations[i][2]);
            setArrswap([...b]);
            
          }, ANIMATION_SPEED_MS*i);
        }
    
        if(animations[i][1] === animations[i][2]){
          setTimeout(() => {
          
            a.push(animations[i][0]);
            setCompleted([...a]);
            
          }, ANIMATION_SPEED_MS*i);
        }
        
        setTimeout(() => {
          
          setArrswap([]);
          
        }, ANIMATION_SPEED_MS*i*10);
    
        
      }
      setTimeout(()=>{
        for(let i=0; i<NoOfBars; i++){
          setTimeout(() => {
            a.push(i);
            setCompleted([...a]);
          }, ANIMATION_SPEED_MS*i);
        }

        setIsrunning(false);
      },ANIMATION_SPEED_MS*(animations.length))
      
      
    
    }
    
    function getQuickSortAnimationsArr(temp,auxiliaryArray){
      const low = 0;
      const high = temp.length - 1;
      
      const animations = [];
      QuickSort(temp,low,high,auxiliaryArray,animations);
    
      return animations;
    }
    
    
    function QuickSort(temp,low,high,auxiliaryArray,animations){
      if(low < high){
        let pivot = partition(temp,low,high,auxiliaryArray,animations);
        auxiliaryArray.push(pivot);
        QuickSort(temp,low,pivot - 1,auxiliaryArray,animations);
        
        QuickSort(temp,pivot+1 ,high,auxiliaryArray,animations);
        
      }
    }
    function partition(temp,low,high,auxiliaryArray,animations){
      
      let pivot = temp[high];
      let i = low-1;
      for(let j = low; j< high; j++){
        animations.push([i,j,high,false]);
        if(pivot > temp[j]){
          i++;
          let m = temp[i];
          temp[i] = temp[j];
          temp[j] = m;
          animations.push([i,j,high,true]);
        }
      }
      i = i + 1;
      let m = temp[i];
      temp[i] = temp[high];
      temp[high] = m;
      animations.push([i,high,high,true]);
     
      return i;
    }
    


    // Merge SORT AHEAD





    
  function mergeSort() {
    setIsrunning(true);
      const temp = arr.slice();

    
    const animations = getMergeSortAnimations(temp);
    const arrayBars = document.getElementsByClassName('bar');
    for (let i = 0; i < animations.length; i++) {
      
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(()=>{
      for(let i=0; i<NoOfBars; i++){
        setTimeout(() => {
          arrayBars[i].style.backgroundColor = COMPLETION_COLOR;
        }, ANIMATION_SPEED_MS*i);
      }
      setIsrunning(false);
    },ANIMATION_SPEED_MS*(animations.length))
  }


    function getMergeSortAnimations(array) {
        const animations = [];
        if (array.length <= 1) return array;
        const auxiliaryArray = array.slice();
        mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
        return animations;
      }

    
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      
      animations.push([i, j]);
      
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
        
      } else {
        
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      
      }
    }
    while (i <= middleIdx) {
     
      animations.push([i, i]);
      
      animations.push([i, i]);
     
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
     
    }
    while (j <= endIdx) {
      
      animations.push([j, j]);
     
      animations.push([j, j]);
      
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
     
    }
  }



// INSERTION SORT AHEAD


    


    
    function insertionSort(){
      setIsrunning(true);
        const temp = [...arr];
        
        let x = 0;
        for (let i = 1; i < temp.length; i++) {
            for (let j = i - 1; j >= 0; j--) {
                x++;
                setTimeout(()=>{
                    if (temp[j + 1] < temp[j]) {
                        
                        const b = [];
                        
                        b.push(j);
                        let m = temp[j];
                        temp[j] = temp[j+1];
                        temp[j+1] = m;
                        setArrswap([...b]);
                        setarr([...temp]);
                    } else return;

                },ANIMATION_SPEED_MS*x)
                setTimeout(()=>{
                    let com=[]
                    for(let k= 0;k <= i;k++)
                    {
                        com.push(k);
                    }
                    setCompleted([...com])
                   },ANIMATION_SPEED_MS*x)
                
            }
            setTimeout(()=>{
                
                setArrswap([])
            },ANIMATION_SPEED_MS*x)
        }
        setCompleted([])
        setTimeout(() => {
          setIsrunning(false);
        }, ANIMATION_SPEED_MS*x);
    }




// BUBBLE SORT AHEAD





    function bubbleSort(){
      setIsrunning(true);
        let temp = arr.slice();
        let l = temp.length;
       let x = 0;
        
        for(let i=0; i<l; i++){

            for(let j= 0 ; j < (l - i); j++){
                x++;
                setTimeout(()=>{
                    const b = [];
                    b.push(j);
                    b.push(j+1);
                    if(temp[j] > temp[j+1]){
                        let m = temp[j];
                        temp[j] = temp[j+1];
                        temp[j+1] = m;
                    }
                    setArrswap([...b]);
                    setarr([...temp]);
                    
                }, ANIMATION_SPEED_MS*x)
                setTimeout(()=>{
                 let com=[]
                 for(let k= l;k>l-i-1;k--)
                 {
                     com.push(k);
                 }
                 setCompleted([...com])
                },ANIMATION_SPEED_MS*x)
                
            }
            setTimeout(()=>{
                
                setArrswap([]);
            },ANIMATION_SPEED_MS*x)
        }
        setCompleted([])
        setTimeout(() => {
          setIsrunning(false);
        }, ANIMATION_SPEED_MS*x);
    }
    /////// BSIC FUNCTIONS

    function valuetext(value) {
      
      return `${value}`;
    }
    function handelChange(v){
      let x = Math.floor(2000/v.target.value);
      setANIMATION_SPEED_MS(x)
      setNoOfBars(v.target.value);
      
    }


    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    return <div>
    <div className='slide'>
    <br />
    <br />
      <Slider
        className ='slider'
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={250}
        onChange={handelChange}
        disabled = {isrunning}
      />
    
    </div>
    <div className="array-container">
        {arr.map((bar,index)=>{
            return <div 
            id = {index}
            className='bar'
            style={{
              backgroundColor: arrswap.includes(index)? SECONDARY_COLOR : completed.includes(index)? COMPLETION_COLOR :  PRIMARY_COLOR,
                                
              height: `${bar}px`,
                
            }} 
            key={index}>
                
            </div>
        })}
        
    </div>
    <div className="btn-container">
    <Button variant="contained" className='btn con' onClick={initialize} disabled = {isrunning} >Generate Array</Button>
    <Button variant="outlined" className='btn out' onClick={bubbleSort} disabled = {isrunning} color='success'>Bubblesort</Button>
    <Button variant="outlined" className='btn out' onClick={insertionSort} disabled = {isrunning} color='success'>InsertionSort</Button>
    <Button variant="outlined" className='btn out' onClick={quickSort} disabled = {isrunning} color='success'>quickSort</Button>
    <Button  variant="outlined" className='btn out' onClick={mergeSort} disabled = {isrunning} color='success'>mergeSort</Button>
    </div>
    
    </div> 
}

export default Sort









   


    

