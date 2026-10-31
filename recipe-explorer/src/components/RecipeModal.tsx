import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { ReactNode } from "react";
import "./RecipeModal.css";

type RecipeModalProps = {
  children: ReactNode;
};

export const RecipeModal = ({ children }: RecipeModalProps) => {
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="recipe-modal-backdrop" onClick={closeModal}>
      <section
        className="recipe-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Recipe details"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="recipe-modal-close"
          onClick={closeModal}
          aria-label="Close recipe details"
        >
          ×
        </button>

        {children}
      </section>
    </div>
  );
};
