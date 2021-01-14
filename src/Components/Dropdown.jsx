/**
 * Dropdown component.
 * React, React-Route, Redux Test project.
 */

 // Dropdown item component.
import React, { useCallback, useState } from "react";

const Item = ({ onClick, children }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="dropdown-item" href="#" onClick={onClick}>
      {children}
    </a>
  );
};

// Dropdown component.
const Dropdown = ({ onChange, title, children }) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleHandle = useCallback(
    e => {
      e.preventDefault();
      setListOpen(!listOpen);
    },
    [listOpen]
  );

  const changeHandler = useCallback(
    (e, value) => {
      e.stopPropagation();
      onChange && onChange(e, value);
      setListOpen(false);
    },
    [onChange]
  );

  const items = [];
  React.Children.forEach(children, (item, index) => {
    if (React.isValidElement(item)) {
      items.push(
        React.cloneElement(item, {
          key: `item-${index}`,
          onClick: e => changeHandler(e, item.props.value)
        })
      );
    }
  });

  return (
    <div className="dropdown">
      <button type="button" className="btn btn-light dropdown-toggle" onClick={toggleHandle}>
        {title}
      </button>
      {listOpen && (
        <div role="list" className="dropdown-menu show" aria-labelledby="dropdownMenuButton" onClick={changeHandler}>
          {items}
        </div>
      )}
    </div>
  );
};

Dropdown.Item = Item;
export default Dropdown;
