
import Sort from './Controls';

interface Props {
  onShow:() => void;
  statusAdd:boolean;
  onSort:(sort: string) => void;
  onSearch:(search: string) => void;
}

const Header: React.FC<Props> = ({onShow, statusAdd, onSort, onSearch}) => {
  
  return (
    <>
      <header>
          <h1>My calendar</h1>
          <button onClick={onShow}>{ statusAdd ? 'Close' : 'Add'}</button>
      </header>
      <Sort onSort={onSort} onSearch={onSearch} />
    </>
  )
}

export default Header