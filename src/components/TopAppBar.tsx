import React from 'react';
import { NavigationTab, ScreenView } from '../types';

interface TopAppBarProps {
  currentTab: NavigationTab;
  currentScreen: ScreenView;
  onNavigateScreen: (screen: ScreenView) => void;
  onOpenCart?: () => void;
  onOpenMicDiagnostic?: () => void;
  cartCount: number;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  currentTab,
  currentScreen,
  onNavigateScreen,
  onOpenCart,
  onOpenMicDiagnostic,
  cartCount
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcf9f3] border-b border-[#c1c8c2]/30 px-4 py-2 flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-2">
        {currentScreen === 'registrar_lote_cafe' ? (
          <button
            type="button"
            onClick={() => onNavigateScreen('catalogo_producto')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#032517] hover:bg-[#ebe8e2] transition-colors active:scale-95"
            title="Volver a seleccionar producto"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        ) : currentScreen === 'catalogo_producto' ? (
          <button
            type="button"
            onClick={() => onNavigateScreen('menu_principal')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#032517] hover:bg-[#ebe8e2] transition-colors active:scale-95"
            title="Volver al Menú Principal"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        ) : currentScreen === 'pasaporte_digital' ? (
          <button
            type="button"
            onClick={() => onNavigateScreen('menu_principal')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#032517] hover:bg-[#ebe8e2] transition-colors active:scale-95"
            title="Volver al Menú Principal"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => onNavigateScreen('menu_principal')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#032517] hover:bg-[#ebe8e2] transition-colors active:scale-95"
            title="Ir al Menú Principal"
          >
            <span className="material-symbols-outlined text-[24px]">signal_cellular_alt</span>
          </button>
        )}

        <div>
          <h1 className="text-[19px] font-bold text-[#032517] tracking-tight leading-tight">
            Raíz
          </h1>
          <div className="flex items-center gap-1.5 -mt-0.5">
            {currentTab === 'menu' && (
              <>
                <span className="w-2.5 h-2.5 rounded-full bg-[#abcfb8] border border-[#032517] animate-pulse"></span>
                <span className="text-[12px] font-bold text-[#032517]">🟢 Conectado</span>
              </>
            )}
            {currentTab === 'chat' && (
              <>
                <span className="w-2 h-2 rounded-full bg-[#fe7952] animate-pulse"></span>
                <span className="text-[12px] text-[#424843] font-medium">Raíz • En línea</span>
              </>
            )}
            {currentTab === 'productos' && (
              <>
                <span className="w-2 h-2 rounded-full bg-[#fe7952]"></span>
                <span className="text-[12px] text-[#424843] font-medium">Conexión Directa • Raíz</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Step indicator badge if in registration funnel */}
        {currentScreen === 'catalogo_producto' && (
          <span className="text-[13px] font-semibold text-[#424843] bg-[#ebe8e2] px-3 py-1 rounded-full">
            Paso 2 de 4
          </span>
        )}
        {currentScreen === 'registrar_lote_cafe' && (
          <span className="text-[13px] font-semibold text-[#a73918] bg-[#ffdbd1] px-3 py-1 rounded-full">
            Paso 3 de 4
          </span>
        )}
        {currentScreen === 'pasaporte_digital' && (
          <span className="text-[12px] font-bold text-[#032517] bg-[#c7ebd4] px-2.5 py-1 rounded-full">
            Hub Tec v5
          </span>
        )}

        {/* Mic Test / Diagnostics button */}
        {onOpenMicDiagnostic && (
          <button
            type="button"
            onClick={onOpenMicDiagnostic}
            className="w-10 h-10 rounded-full bg-[#f0eee8] text-[#032517] hover:bg-[#e0ded8] flex items-center justify-center transition-all active:scale-95 border border-[#c1c8c2]/40"
            title="Probar y Diagnosticar Micrófono"
            aria-label="Probar y Diagnosticar Micrófono"
          >
            <span className="material-symbols-outlined text-[20px]">mic</span>
          </button>
        )}

        {/* Shopping Cart button (especially for Productos tab or any tab) */}
        <button
          type="button"
          onClick={onOpenCart}
          className="relative w-10 h-10 rounded-full bg-[#1b3b2b] text-white flex items-center justify-center shadow-sm hover:bg-[#032517] transition-all active:scale-95"
          aria-label="Ver bolsa de productos"
        >
          <span className="material-symbols-outlined text-[20px]">local_mall</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#a73918] text-white text-[11px] font-bold flex items-center justify-center border-2 border-[#fcf9f3]">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
