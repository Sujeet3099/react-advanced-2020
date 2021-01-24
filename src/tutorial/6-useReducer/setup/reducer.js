export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Item Added',
            people: newPeople,
        };
    }
    if (action.type === 'NO_ITEM') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please Enter a Value',
        };
    }
    if (action.type === 'FADE_OUT') {
        return {
            ...state,
            isModalOpen: false,
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload,
        );
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'Item Removed',
        };
    }
    return state;
};
