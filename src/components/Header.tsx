
import Sort from './Controls';

interface Props {
  onShow:() => void;
  statusAdd:boolean;
  onSort:(sort: string) => void;
  onSearch:(search: string) => void;
  showCal: () => void;
  statusCal:boolean;
}

const Header: React.FC<Props> = ({onShow, statusAdd, onSort, onSearch, showCal, statusCal}) => {
  
  return (
    <>
      <header>
          <h1>My calendar app view</h1>
          <button onClick={onShow}>{ statusAdd ? 'Close' : 'Add'}</button>
      </header>
      <Sort onSort={onSort} onSearch={onSearch} showCal={showCal} statusCal={statusCal} />
    </>
  )
}

export default Header