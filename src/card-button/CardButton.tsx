import React from "react";
import { useProvidedTrello } from "@optro/ui-react";
import "./styles.css";

function CardButton() {
  const t = useProvidedTrello();

  const onCopy = () => {
    navigator.clipboard.writeText(t.card.name);
  };

  return (
    <div id="container">
      <p>Copy the suggested branch name.</p>
      <label htmlFor="branch">Branch</label>
      <input
        className="branch-field"
        value={t.card.name}
        disabled
        id="branch"
        name="branch"
      />
      <button title="Copy branch name" className="mod-primary" onClick={onCopy}>
        Copy
      </button>
    </div>
  );
}

export default CardButton;
