import { Event } from '../models/event';

interface Props {
  events: Array<Event>;
  id: number;
  title: string;
  start: string;
  end: string;
  created: string;
  onDelete:(id: number) => void;
}


const Item: React.FC<Props> = ({id,title,start,end,created,onDelete}) => {
    return (
    <li>
        <div>
          <h3>{title}</h3>
          <small>Ends: {end}</small>
        </div>
        <b>{start}</b>
        {/* <p>{created}</p>
        <small>{id}</small> */}
        <button onClick={() => onDelete(id)}>x</button>
    </li>
  )
}

export default Item