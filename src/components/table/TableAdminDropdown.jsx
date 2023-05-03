import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineMoreVert} from 'react-icons/md';
import "../../styles/TableBadges.css"

function TableAdminDropdown({travelToId}) {

  return (
    
    <Dropdown>
      <Dropdown.Toggle id="basic-button">
        <MdOutlineMoreVert id='icon'  />
      </Dropdown.Toggle>

      <Dropdown.Menu id="basic-menu" MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <Dropdown.Item href={"http://localhost:3000/admin/expediente/"+travelToId}>Ver</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TableAdminDropdown;