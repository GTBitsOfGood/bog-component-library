function fontStack(fonts) {
    return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

const baseColors = {
    midnight: ['#5A50B3', '#473F91', '#36306E', '#2D285C', '#1C1938'],
    orange: ['#FEBF98', '#FD9F66', '#FD904C', '#FD8033', '#E25702'],
    yellow: ['#FFE3B3', '#FFD17F', '#FFC766', '#FFBE4C', '#FFAB19'],
};

const midnightPalette = {
    100: baseColors.midnight[0],
    300: baseColors.midnight[1],
    400: baseColors.midnight[2],
    500: baseColors.midnight[3],
    700: baseColors.midnight[4],
}

const orangePalette = {
    100: baseColors.orange[0],
    300: baseColors.orange[1],
    400: baseColors.orange[2],
    500: baseColors.orange[3],
    700: baseColors.orange[4],
}

const yellowPalette = {
    100: baseColors.yellow[0],
    300: baseColors.yellow[1],
    400: baseColors.yellow[2],
    500: baseColors.yellow[3],
    700: baseColors.yellow[4],
}

const secondaryColors = {
    green: ['#53ED9D', '#17D874', '#17D874', '#13B461', '#0F904D'],
    red: ['#FF8E8E', '#FF7171', '#FF5555', '#FF3939', '#C63636'],
    blue: ['#5698FF', '#3484FF', '#126FFF', '#005EEF', '#0051CC']
}

const greenPalette = {
    100: secondaryColors.green[0],
    300: secondaryColors.green[1],
    400: secondaryColors.green[2],
    500: secondaryColors.green[3],
    700: secondaryColors.green[4],
}

const redPalette = {
    100: secondaryColors.red[0],
    300: secondaryColors.red[1],
    400: secondaryColors.red[2],
    500: secondaryColors.red[3],
    700: secondaryColors.red[4],
}

const bluePalette = {
    100: secondaryColors.blue[0],
    300: secondaryColors.blue[1],
    400: secondaryColors.blue[2],
    500: secondaryColors.blue[3],
    700: secondaryColors.blue[4],
}


const typographyColors = {
    light: ['#FFFFFF', '#F2F2F2', '#E5E5E5', '#D9D9D9', '#CCCCCC'],
    dark: ['#BFBFBF', '#8C8C8C', '#666666', '#3F3F3F', '#000000']
}

const lightPalette = {
    100: typographyColors.light[0],
    300: typographyColors.light[1],
    400: typographyColors.light[2],
    500: typographyColors.light[3],
    700: typographyColors.light[4],
}

const darkPalette = {
    100: typographyColors.dark[0],
    300: typographyColors.dark[1],
    400: typographyColors.dark[2],
    500: typographyColors.dark[3],
    700: typographyColors.dark[4],
}

const colors = {
    ...baseColors,
    ...secondaryColors,
    ...typographyColors,
    bluePalette,
    darkPalette,
    greenPalette,
    lightPalette,
    midnightPalette,
    orangePalette,
    redPalette,
    yellowPalette,
    text: {
        light: {
            main: typographyColors.light[4],
            secondary: typographyColors.light[3]
        },
        dark: {
            main: typographyColors.dark[4],
            secondary: typographyColors.dark[3]
        }
    },
    variants: {
        primary: midnightPalette,
        success: greenPalette,
        error: redPalette,
        warning: yellowPalette,
        secondary: orangePalette,
        tertiary: bluePalette,
    }
}