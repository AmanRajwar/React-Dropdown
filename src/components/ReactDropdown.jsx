import { useState } from 'react';
import Styles from './ReactDropdown.module.css';
const ReactDropdown = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleEnter = () => {
        setIsOpen(true);
    };
    const handleLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        setIsOpen(false);
        console.log(`Selected item: ${item}`);
    };

    return (
        <>
            <div className={Styles.background}>
                <h1>Should you use a dropdown?</h1>
                <div className={Styles.hover} onMouseLeave={handleLeave}>
                    <div className={Styles.dropdown} onMouseEnter={handleEnter}>
                        <p>Select Option</p>
                    </div>
                    {isOpen && (
                        <ul className={Styles.itemList}>
                            {items.map((item, index) => {
                                return (
                                    <li onClick={() => handleItemClick(item)} key={index}><p>{item}</p></li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default ReactDropdown;

