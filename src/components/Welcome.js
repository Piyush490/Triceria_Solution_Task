import React , {useState} from 'react';
import List from './List';

const Welcome=() => {
    const [games,setGames]=useState([]);
    const [value,setValue]=useState("");
    const [color,setColor]=useState("");
    const [index,setIndex]=useState(1);
    const [title,setTitle]=useState("");
        const change=(e)=>{
            setValue(e);   
        }
        const submit=(e)=>{
            const rand=Math.floor(Math.random() * 100*index) + 1;
            console.log(index)
            e.preventDefault()
            if(Math.abs(value-rand)>=1&&Math.abs(value-rand)<=4){
                setColor("red")
                setTitle("Hot")
            }
            else if(Math.abs(value-rand)>=5&&Math.abs(value-rand)<=15){
            setColor("yellow");
            setTitle("Warm")
            }
            else if(Math.abs(value-rand)>15){
            setColor("blue");
            setTitle("Cold")
            }
            else if(Math.abs(value-rand)===0){
            setGames(games.concat({index:index,value:value,color:"green",title:"Correct"}));
            
            setColor();
            setTitle();
            setIndex((prevIndex)=>prevIndex+1);
            } 
    }
    const list=games.map(game=><List key={Math.random()} game={game}/>);
        return (
            <div>
                {list}
                <div className="container" style={{backgroundColor:color}}>
              <h1>{title}</h1>
              </div>
                <form className="form" onSubmit={submit}>
                    <p>Guess a number between 1 and {100*index} inclusive.</p>
                <input type="number" min={1} max={index*100} value={value} onChange={e=>change(e.target.value)}/>
                <input type="submit" value="Submit"/>
                </form>
            </div>
          );
    }
 
export default Welcome;