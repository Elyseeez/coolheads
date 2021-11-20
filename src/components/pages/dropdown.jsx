import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Dropserv ()  {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return( 
        <div className="dropserv">  
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className="dropserv__main text-muted"light expand="md" text-muted>
                Services
            </DropdownToggle>
            <DropdownMenu>
        
                <DropdownItem className="dropdown-item">Mechanucal Repair</DropdownItem>
                <DropdownItem className="dropdown-item">Body/collision Repair</DropdownItem>
                <DropdownItem className="dropdown-item">Hybrid Rapair</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            
        </div>
    )
}


export default Dropserv;