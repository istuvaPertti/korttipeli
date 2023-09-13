import Card from'./components/Card';
import './App.css'
const playerCard ={
  image: 'https://www.dessertfortwo.com/wp-content/uploads/2023/04/Single-Serve-Chocolate-Chip-Cookie-5-735x1103.jpg'
  ,stats: [{name:'Cookieness',value:6}]
};
export default function App(){
  return(
    <>

<Card card = {playerCard}/>
</>
  );
}