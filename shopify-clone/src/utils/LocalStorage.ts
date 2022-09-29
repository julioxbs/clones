export function SaveToLocal(dark: boolean) {
    localStorage.setItem('darkTheme', JSON.stringify(dark));
}

export function ToggleTheme(theme: boolean) {
    if (theme) {
        document.querySelector('body')?.classList.add('dark');
    } else {
        document.querySelector('body')?.classList.remove('dark');
    }
}