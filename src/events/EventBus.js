export const setEvent = (name, action) => {
    window.addEventListener(name, action, false);
}

export const removeEvent = (name, action) => {
    window.removeEventListener(name, action);
}

export const fireEvent = (name, data) => {
    let event = new CustomEvent(name, { detail: data });
    window.dispatchEvent(event);
}
