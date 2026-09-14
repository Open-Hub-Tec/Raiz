import React from 'react';
import { NavigationTab } from '../types';

interface BottomNavBarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 py-2 bg-[#fcf9f3] border-t border-[#c1c8c2]/40 shadow-lg">
      {/* Tab 1: Chat */}
      <button
        type="button"
        onClick={() => onSelectTab('chat')}
        className={`flex flex-col items-center justify-center min-w-[76px] py-1.5 px-3 rounded-2xl transition-all duration-200 active:scale-95 ${
          currentTab === 'chat'
            ? 'bg-[#fe7952] text-[#6c1900] shadow-xs'
            : 'text-[#424843] hover:bg-[#f0eee8]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={currentTab === 'chat' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          chat
        </span>
        <span className={`text-[13px] mt-0.5 ${currentTab === 'chat' ? 'font-bold' : 'font-medium'}`}>
          Chat
        </span>
      </button>

      {/* Tab 2: Menú */}
      <button
        type="button"
        onClick={() => onSelectTab('menu')}
        className={`flex flex-col items-center justify-center min-w-[76px] py-1.5 px-3 rounded-2xl transition-all duration-200 active:scale-95 ${
          currentTab === 'menu'
            ? 'bg-[#fe7952] text-[#6c1900] shadow-xs'
            : 'text-[#424843] hover:bg-[#f0eee8]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={currentTab === 'menu' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          menu_book
        </span>
        <span className={`text-[13px] mt-0.5 ${currentTab === 'menu' ? 'font-bold' : 'font-medium'}`}>
          Menú
        </span>
      </button>

      {/* Tab 3: Productos */}
      <button
        type="button"
        onClick={() => onSelectTab('productos')}
        className={`flex flex-col items-center justify-center min-w-[76px] py-1.5 px-3 rounded-2xl transition-all duration-200 active:scale-95 ${
          currentTab === 'productos'
            ? 'bg-[#fe7952] text-[#6c1900] shadow-xs'
            : 'text-[#424843] hover:bg-[#f0eee8]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          style={currentTab === 'productos' ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          storefront
        </span>
        <span className={`text-[13px] mt-0.5 ${currentTab === 'productos' ? 'font-bold' : 'font-medium'}`}>
          Productos
        </span>
      </button>
    </nav>
  );
};
