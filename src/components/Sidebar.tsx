import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<DrawerProps> = ({ children, isOpen, onClose }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [drawerRoot, setDrawerRoot] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setDrawerRoot(document.getElementById("drawer-root"));
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      const timeoutId = setTimeout(() => setIsAnimated(true), 50);
      return () => clearTimeout(timeoutId);
    } else {
      setIsAnimated(false);
      const timeoutId = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  const handleClickSidebar = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleClickOverlay = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  if (!drawerRoot || !isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex justify-end`}
      onClick={handleClickOverlay}
    >
      <div className="fixed inset-0 bg-black opacity-50" />
      <div
        className={`fixed top-0 right-0 w-auto h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isAnimated ? "translate-x-0" : "translate-x-full"
        }`}
        ref={nodeRef}
        onClick={handleClickSidebar}
      >
        {children}
      </div>
    </div>,
    drawerRoot
  );
};

export default Sidebar;
