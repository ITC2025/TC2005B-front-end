import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineMoreVert} from 'react-icons/md';
import "../../styles/TableBadges.css"

function TableAdminDropdown() {

  return (
    <Dropdown>
      <Dropdown.Toggle >
        <MdOutlineMoreVert id='icon'  />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Ver</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TableAdminDropdown;