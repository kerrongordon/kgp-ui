const Colors = {
    'primary': '#2798ee',
    'secondary': '#7cb342',
    'danger': '#f44336',
    'background': '#ecf0f1',
    'fontPrimary': '#6b7c93',
    'fontSecondary': '#999999',
    'light': '#ffffff'
}

export default Colors


export const HextoRgba = (hex, alpha) => {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        // return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        return `rgba(${r},${g},${b}, ${alpha})`;
    } else {
        // return "rgb(" + r + ", " + g + ", " + b + ")";
        return `rgb(${r},${g},${b})`;
    }
}

export const btnShadow = (color) => {
    return `0 1px 6px ${HextoRgba(color, '.3')}, 0 1px 4px ${HextoRgba(color, '.4')}`
}

export const btnShadowHover = (color) => {
    return `0 15px 35px ${HextoRgba(color, '.3')}, 0 5px 15px ${HextoRgba(color, '.4')}`
}