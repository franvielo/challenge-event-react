import { useState } from 'react'

interface Props {
    onSort:(sort: string) => void;
    onSearch:(search: string) => void;
}

const Sort: React.FC<Props> = ({onSort, onSearch}) => {

    const [sortBy, setSortBy] = useState('date');

    const sortData = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        onSort(value);
    };

    return (
    
        <div className="controls">
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
        </div>
    )

}

export default Sort