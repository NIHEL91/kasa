import { React, useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/style/components/accordion.scss";

function Accordion({ content, title }) {
  let contentClass = "accordion-content hide";

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    contentClass = "accordion-content show";
  }

  return (
    //finir le travail sur les classes
    <div className="accordion-item">
        <div className="accordion-header" onClick={toggleAccordion}>
          <span className="accordion-title">{title}</span>
          <span className="accordion-icon">
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </span>
        </div>
        <div className={contentClass}>{content}</div>
    </div>
  );
}

export default Accordion;
