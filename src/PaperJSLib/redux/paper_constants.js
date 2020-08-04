export const COLORS = {
    Gray: 'gray',
    Red: 'red',
    Orange: 'orange',
    Yellow: 'yellow',
    Green: 'green',
    Teal: 'teal',
    Blue: 'blue',
    Indigo: 'indigo',
    Purple: 'purple',
    Pink: 'pink',
}
const Pink_Colors = {
    100: '#FFF5F7',
    200: '#FED7E2',
    300: '#FBB6CE',
    400: '#F687B3',
    500: '#ED64A6',
    600: '#D53F8C',
    700: '#B83280',
    800: '#97266D',
    900: '#702459',
};

const Purple_Colors = {
    100: '#FAF5FF',
    200: '#E9D8FD',
    300: '#D6BCFA',
    400: '#B794F4',
    500: '#9F7AEA',
    600: '#805AD5',
    700: '#6B46C1',
    800: '#553C9A',
    900: '#44337A',
}

const Indigo_Colors = {
    100: '#EBF4FF',
    200: '#C3DAFE',
    300: '#A3BFFA',
    400: '#7F9CF5',
    500: '#667EEA',
    600: '#5A67D8',
    700: '#4C51BF',
    800: '#434190',
    900: '#3C366B',
}

const Blue_Colors = {
    100: '#EBF8FF',
    200: '#BEE3F8',
    300: '#90CDF4',
    400: '#63B3ED',
    500: '#4299E1',
    600: '#3182CE',
    700: '#2B6CB0',
    800: '#2C5282',
    900: '#2A4365',
}

const Teal_Colors = {
    100: '#E6FFFA',
    200: '#B2F5EA',
    300: '#81E6D9',
    400: '#4FD1C5',
    500: '#38B2AC',
    600: '#319795',
    700: '#2C7A7B',
    800: '#285E61',
    900: '#234E52',
}

const Green_Colors = {
    100: '#F0FFF4',
    200: '#C6F6D5',
    300: '#9AE6B4',
    400: '#68D391',
    500: '#48BB78',
    600: '#38A169',
    700: '#2F855A',
    800: '#276749',
    900: '#22543D',
}

const Yellow_Colors = {
    100: '#FFFFF0',
    200: '#FEFCBF',
    300: '#FAF089',
    400: '#F6E05E',
    500: '#ECC94B',
    600: '#D69E2E',
    700: '#B7791F',
    800: '#975A16',
    900: '#744210',
}

const Orange_Colors = {
    100: '#FFFAF0',
    200: '#FEEBC8',
    300: '#FBD38D',
    400: '#F6AD55',
    500: '#ED8936',
    600: '#DD6B20',
    700: '#C05621',
    800: '#9C4221',
    900: '#7B341E',
}

const Red_Colors = {
    100: '#FFF5F5',
    200: '#FED7D7',
    300: '#FEB2B2',
    400: '#FC8181',
    500: '#F56565',
    600: '#E53E3E',
    700: '#C53030',
    800: '#9B2C2C',
    900: '#742A2A',
}

const Gray_Colors = {
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
}

/**
 *
 * @param name
 * @param color_scale 100, 200, 300, ... 900
 * @param opacity
 * @constructor
 */
const Colors = (name, color_scale, opacity = 1.0) => {

    let color;
    const scale = (color_scale in Gray_Colors) ? color_scale : 100;
    switch (name) {
        case COLORS.Pink:
            color = Pink_Colors[scale];
            break;
        case COLORS.Indigo:
            color = Indigo_Colors[scale];
            break;
        case COLORS.Purple:
            color = Purple_Colors[scale];
            break;
        case COLORS.Blue:
            color = Blue_Colors[scale];
            break;
        case COLORS.Teal:
            color = Teal_Colors[scale];
            break;
        case COLORS.Green:
            color = Green_Colors[scale];
            break;
        case COLORS.Yellow:
            color = Yellow_Colors[scale];
            break;
        case COLORS.Orange:
            color = Orange_Colors[scale];
            break;
        case COLORS.Red:
            color = Red_Colors[scale];
            break;
        case COLORS.Gray:
            color = Gray_Colors[scale];
            break;
        default:
            color = "#FFFFFF";
            break;
    }
    const red = parseInt(color.substr(1,2),16),
        green = parseInt(color.substr(3,2),16),
        blue = parseInt(color.substr(5,2), 16);
    return`rgba(${red},${green},${blue},${opacity})`;
}

const colors = [COLORS.Gray, COLORS.Pink, COLORS.Green, COLORS.Purple, COLORS.Orange, COLORS.Red, COLORS.Blue,
    COLORS.Indigo, COLORS.Teal, COLORS.Yellow];

const STENCIL_SHAPES = {
    FREE_DRAW: 'Free Hand Draw',
    SQUARE : 'Draw Square',
    ROUNDED_SQUARE : 'Draw Rounded Square',
    ROUNDED_RECTANGLE : 'Draw Rounded Rectangle',
    RECTANGLE: 'Draw a Rectangle',
    DRAW_LINE: 'Draw Line',
    CIRCLE: 'Draw a circle',
    TEXT: 'Write a text',
    POLYGON: 'Multi Sided Polygon',
    CONNECT: 'Connect two shapes',
    FILE: 'File Shape',
};

const PAPER_ACTIONS = {
    BRUSH_MODE_CHANGED : 'BRUSH MODE CHANGED',
    STROKE_WIDTH_CHANGED : 'STROKE WIDTH CHANGED',
    COLOR_BASE_CHANGED : 'COLOR BASE CHANGED',
    CHANGE_BRUSH_MODE : 'CHANGE BRUSH MODE',
    CHANGE_STROKE_WIDTH : 'CHANGE STROKE WIDTH ',
    CHANGE_COLOR_BASE : 'CHANGE COLOR BAS ',
    PAPER_CLEARED : 'PAPER CLEARED',
}

export {Colors, colors, STENCIL_SHAPES, PAPER_ACTIONS }