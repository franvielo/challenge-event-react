import { useState } from 'react'

interface Props {
    onAdd:(newEvent: object) => void;
    onShow:() => void;
}

const AddEvent: React.FC<Props> = ({onAdd, onShow}) => {

    const [title, setTitle] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const onSubmit = (e: React.FormEvent) =>  {
        e.preventDefault();
        if(!title && !start && !end) {
            alert("Please enter a title, start and end date.");
            return
        }
        onAdd({title,start,end});

        setTitle('');
        setStart('');
        setEnd('');
        onShow();
    }

    return (
        <div className="add">
            <div className="add-header">
                <h2>Add new event</h2>
                <button onClick={onShow}>x</button>
            </div>  
            <form className='input' onSubmit={onSubmit}>
                <div className="field">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div className="field">
                    <label htmlFor="start">Start</label>
                    <input 
                        type="date" 
                        name="start" 
                        value={start}
                        onChange={(e) => setStart(e.target.value)} 
                    />
                </div>
                <div className="field">
                    <label htmlFor="end">End</label>
                    <input 
                        type="date" 
                        name="end" 
                        value={end}
                        onChange={(e) => setEnd(e.target.value)} 
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddEvent