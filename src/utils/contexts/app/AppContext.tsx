import React, { createContext, useState, ReactNode } from "react";

// Define the type for SidebarContext
export interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

// Create the SidebarContext
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Define the SidebarProvider component
interface SidebarProviderProps {
  children: ReactNode;
}





export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const value: SidebarContextType = {
    isOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};


