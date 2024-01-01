import {create} from 'zustand';

type State = {
    menuIsActive: boolean,
    changeMenuHandler: () => void
}

export const menuToggleCollapse = create<State>((set) => ({
    menuIsActive: false,
    changeMenuHandler: () => set((state) => ({menuIsActive: !state.menuIsActive}))
}))

