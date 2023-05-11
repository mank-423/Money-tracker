import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');

  function addNewTransaction(e){
      e.preventDefault();
      const url  = process.env.REACT_APP_API_URL+'/transaction';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type':'application/json',
        },
        body: JSON.stringify({name, description, datetime})
      }).then(response => {
        response.json().then((json)=>{
          console.log('result', json);
        })
      })
  }

  return (
    <main className=''>
      <h1> $300 <span>.00</span></h1>

      <form onSubmit={addNewTransaction}>

        <div className='basic'>
          <input 
            type="text" 
            value = {name}
            onChange={e => setName(e.target.value)}
            placeholder={'+200 new Samsun tv'} 
          />
          <input 
            value={datetime}
            onChange={e => setDatetime(e.target.value)}
            type="datetime-local" />
        </div>

        <div className='description'>
          <input 
            type="text" 
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder={'description'} />
        </div>

        <button type='submit'>
          Add new transaction
        </button>

      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It was time for new TV</div>
          </div>

          <div className="right">
            <div className="price red">- $500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>


        <div className="transaction">
          <div className="left">
            <div className="name">Gig Job new website</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price green">+ $400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>


        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">It was time for new TV</div>
          </div>
          <div className="right">
            <div className="price red">- $900</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>


      </div>
    </main>
  );
}

export default App;
