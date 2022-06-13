import Item from './Item';
import { useState } from 'react'
import { Event } from '../models/event';

interface Props {
    events: Array<Event>;
    id: number;
    title: string;
    start: string;
    end: string;
    created: string;
    onDelete:(id: number) => void;
    onSearch:string;
}

const Events: React.FC<Props> = ({events, onDelete, onSearch}) => {

    const [hasError, setHasError] = useState(false);
    let itemsFound:number = events.length;
    return (
        <>
        <div className='events'>
            <ul>
            {events?.map((event, index) => {
                if (onSearch == "") { itemsFound = events.length}
                if (onSearch == "" || event.title.toLowerCase().includes(onSearch.toLowerCase())) {
                    return (
                        <Item 
                            key={event.ID}
                            events={[]}
                            onDelete={onDelete} 
                            id={event.ID}
                            title={event.title}
                            start={event.start}
                            end={event.end}
                            created={event.created}        
                        /> 
                    )} else {
                        itemsFound -= 1
                    }
                    
                    return null;
                })
            } 
            </ul>

        {!itemsFound && <p>Nothing found {onSearch}</p>}
    </div>
    </>
    )}



export default Events