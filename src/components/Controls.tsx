import { useState } from 'react'

interface Props {
    onSort:(sort: string) => void;
    onSearch:(search: string) => void;
    showCal: () => void;
    statusCal: boolean;
}

const Sort: React.FC<Props> = ({onSort, onSearch, showCal, statusCal}) => {

    const [sortBy, setSortBy] = useState('date');

    const sortData = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        onSort(value);
    };

    return (
    
        <div className="controls control-test-vercel">
            <div className='sort'>
                <select name="sortEvents" onChange={sortData} defaultValue={'default'}>
                    <option value="default" >Sort by</option>
                    <option value="start">Star</option>
                    <option value="end">End</option>
                    <option value="created">Created</option>
                    <option value="title">Title</option>
                </select>
            </div>
            <div className="search">
                <input 
                    type="text" 
                    name='search' 
                    placeholder='Search event' 
                    onChange={(e) => onSearch(e.target.value)} 
                    />
            </div>
            <div className="toggle">
                <button onClick={showCal}>{ statusCal ? 'Hide' : 'Show'} calendar</button>
            </div>
        </div>
    )

}

export default Sort