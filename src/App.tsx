import { useState } from 'react'
import Header from './components/Header';
import Events from './components/Events';
import AddEvent from './components/AddEvent';
import { Event } from './models/event';


interface Props {
  events?: Event;
  onAdd?:(newEvent: object) => void;
  onDelete?:(id: number) => void;
  onSort?:(sort: string) => void;
  onSearch?:string;
}

const App: React.FC<Props> = ({events}) => {

  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState<string>("");


  const [list, setList] = useState<Event[]>([
    {
        id: 1001,
        title: 'Tony Stark | Iron man suit design',
        start: '07/02/2022', 
        end: '07/03/2022',  
        created: '02/02/2022'     
    },
    {
        id: 2002,
        title: 'Elon Musk | Personal spacecraft',
        start: '08/02/2022', 
        end: '08/03/2022',  
        created: '01/02/2022'     
    },
    {
        id: 3003,
        title: 'Steve Wozniak | Grape computer',
        start: '09/02/2022', 
        end: '09/03/2022',  
        created: '12/02/2021'    
    }
  ])

  
  // Delete event
  const deleteEvent = (id:number) => {
    setList(list.filter((event)=>event.id !== id))
  }

  // Add Event
  // why the hack did I have to create an object instead of just using newEvent.description
  const addEvent = (newEvent:object) => {
    const id = Math.floor(Math.random()*10000)+1;
    const eventObj = Object.create(newEvent);

    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    const todaySt = mm + '/' + dd + '/' + yyyy;

    setList([...list,{id:id, title:eventObj.title, start:eventObj.start, end:eventObj.end, created:todaySt}]);
  }
  
  // sort events
  const sortEvents = (sort:string) => {
    if(sort=="start" || sort=="end" ||  sort=="created") {
      sortDate(sort);
      console.log(sort);
      
    } else {
      sortDesc();
    }
  }

  // sort by description/title
  const sortDesc = () => {
    const sorted = [...list].sort((a, b) => {
      const nameA = a.title.toUpperCase(); // ignore upper and lowercase
      const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {return -1;}
      if (nameA > nameB) {return 1;}
      return 0;
    }); 
    setList(sorted);
  }

  // sort by date
  const sortDate = (typeKey:string) => {
    const sorted = [...list].sort((a, b) => {
        const newA = (a[typeKey as keyof typeof a] as string).split('/').reverse().join('-');
        const newB = (b[typeKey as keyof typeof a] as string).split('/').reverse().join('-');
        type OnlyKeys = keyof typeof a;
        return +new Date(newA) - +new Date(newB)
      }
    );
    setList(sorted);
  };

  // search by description/title
  const searchItems = (searchValue:string) => {
    setSearch(searchValue);
  }

  return (
    
    <div className="App">
      <Header onShow={() => setShowAdd(!showAdd)} statusAdd={showAdd} onSort={sortEvents} onSearch={searchItems} />
      
      { showAdd && <AddEvent onShow={() => setShowAdd(!showAdd)} onAdd={addEvent} /> }
      
      {list.length > 0 ? 
        <Events 
          events={list} 
          id={0} 
          title="" 
          start="" 
          end=""
          created=""
          onDelete={deleteEvent} 
          onSearch={search}
        /> :
        'You have no events.'
      }


    </div>
  );
}

export default App;
