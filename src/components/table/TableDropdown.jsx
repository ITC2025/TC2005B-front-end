import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineMoreVert} from 'react-icons/md';
import "../../styles/TableBadges.css"

function TableDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle >
        <MdOutlineMoreVert id='icon'  />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TableDropdown;