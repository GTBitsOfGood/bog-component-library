import { fontWeight } from 'styled-system';
import './assets/global.css';

function fontStack(fonts) {
    return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}

const baseColors = {
    midnight: ['#EAE6FF', '#5A50B3', '#473F91', '#36306E', '#2D285C', '#1C1938'],
    orange: ['#FEBF98', '#FD9F66', '#FD904C', '#FD8033', '#E25702'],
    yellow: ['#FFE3B3', '#FFD17F', '#FFC766', '#FFBE4C', '#FFAB19', '#59431B'],
};

const midnightPalette = {
    100: baseColors.midnight[0],
    200: baseColors.midnight[1],
    300: baseColors.midnight[2],
    400: baseColors.midnight[3],
    500: baseColors.midnight[4],
    700: baseColors.midnight[5],
};

const orangePalette = {
    100: baseColors.orange[0],
    300: baseColors.orange[1],
    400: baseColors.orange[2],
    500: baseColors.orange[3],
    700: baseColors.orange[4],
};

const yellowPalette = {
    100: baseColors.yellow[0],
    300: baseColors.yellow[1],
    400: baseColors.yellow[2],
    500: baseColors.yellow[3],
    700: baseColors.yellow[4],
    900: baseColors.yellow[5],
};

const secondaryColors = {
    green: ['#E3FCEF', '#9BF4C6', '#77F0B1', '#53ED9D', '#17D874', '#13B461', '#0F904D', '#084C29'],
    red: ['#FFE3E3', '#FFC6C6', '#FFAAAA', '#FF8E8E', '#FF5555', '#FF3939', '#C63636', '#592828'],
    blue: ['#DEEBFF', '#9AC2FF', '#78ADFF', '#5698FF', '#126FFF', '#005EEF', '#0051CC', '#122E59']
};

const greenPalette = {
    100: secondaryColors.green[0],
    200: secondaryColors.green[1],
    300: secondaryColors.green[2],
    400: secondaryColors.green[3],
    600: secondaryColors.green[4],
    700: secondaryColors.green[5],
    800: secondaryColors.green[6],
    900: secondaryColors.green[7],
};

const redPalette = {
    100: secondaryColors.red[0],
    200: secondaryColors.red[1],
    300: secondaryColors.red[2],
    400: secondaryColors.red[3],
    600: secondaryColors.red[4],
    700: secondaryColors.red[5],
    800: secondaryColors.red[6],
    900: secondaryColors.red[7],
};

const bluePalette = {
    100: secondaryColors.blue[0],
    200: secondaryColors.blue[1],
    300: secondaryColors.blue[2],
    400: secondaryColors.blue[3],
    600: secondaryColors.blue[4],
    700: secondaryColors.blue[5],
    800: secondaryColors.blue[6],
    900: secondaryColors.blue[7],
};


const typographyColors = {
    light: ['#FFFFFF', '#F2F2F2', '#E5E5E5', '#D9D9D9', '#CCCCCC'],
    dark: ['#BFBFBF', '#8C8C8C', '#666666', '#3F3F3F', '#000000']
};

const lightPalette = {
    100: typographyColors.light[0],
    300: typographyColors.light[1],
    400: typographyColors.light[2],
    500: typographyColors.light[3],
    700: typographyColors.light[4],
};

const darkPalette = {
    100: typographyColors.dark[0],
    300: typographyColors.dark[1],
    400: typographyColors.dark[2],
    500: typographyColors.dark[3],
    700: typographyColors.dark[4],
};

const colors = {
    ...baseColors,
    ...secondaryColors,
    ...typographyColors,
    black: '#000000',
    disabled: '#CCCCCC',
    white: '#FFFFFF',
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
};

const fonts = {
    main: fontStack(['VisbyCF']),
    secondary: fontStack(['OpenSans']),
};

const fontWeights = {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    heavy: 900,
};

const letterSpacings = {
    five: '0.05em',
    zero: '0',
    negOne: '-0.01em',
    negTwo: '-0.02em',
};

  
const typography = {
    // Display
    display: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.extrabold,
        fontSize: '64px',
        letterSpacing: letterSpacings.negOne,
        lineHeight: '76.8px',
    },
    display2: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.bold,
        fontSize: '56px',
        letterSpacing: letterSpacings.negOne,
        lineHeight: '67.2px',
    },
    
    // Heading
    h1: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.extrabold,
        fontSize: '40px',
        letterSpacing: letterSpacings.negOne,
        lineHeight: '48px',
    },
    h2: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.extrabold,
        fontSize: '32px',
        letterSpacing: letterSpacings.negOne,
        lineHeight: '38px',
    },
    h3: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.extrabold,
        fontSize: '24px',
        letterSpacing: letterSpacings.negOne,
        lineHeight: '29px',
    },
    h4: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.bold,
        fontSize: '24px',
        letterSpacing: letterSpacings.negOne,
        lineHeight: '36px',
    },
    
    // Lead
    lead: {
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.bold,
        fontSize: '16px',
        letterSpacing: letterSpacings.negTwo,
        lineHeight: '21.79px',
    },

    // Body
    body: {
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.regular,
        fontSize: '20px',
        lineHeight: '26px',
    },
    bodySmall: {
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.regular,
        fontSize: '16px',
        letterSpacing: letterSpacings.negTwo,
        lineHeight: '21px',
    },

    capitalized: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.extrabold,
        fontSize: '24px',
        letterSpacing: letterSpacings.five,
        lineHeight: '28.8px',
        textTransform: 'uppercase',
    },
    capitalizedSmall: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.extrabold,
        fontSize: '8px',
        letterSpacing: letterSpacings.five,
        lineHeight: '10px',
        textTransform: 'uppercase',
    },

    // Caption
    caption: {
        fontFamily: fonts.secondary,
        fontWeight: fontWeights.regular,
        fontSize: '12px',
        lineHeight: '16px',
    },

    // Label Text
    largeLabel: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.regular,
        fontSize: '16px',
        lineHeight: '24px',
    },
    mediumLabel: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.regular,
        fontSize: '14px',
        lineHeight: '20px',
    },
    smallLabel: {
        fontFamily: fonts.main,
        fontWeight: fontWeights.regular,
        fontSize: '12px',
        lineHeight: '16px',
    },

    // Button
    button: {
        fontFamily: fonts.main, 
        fontWeight: fontWeights.extrabold,
        fontSize: '16px',
        lineHeight: '23px',
    },
    buttonLarge: {
        fontFamily: fonts.main, 
        fontWeight: fontWeights.extrabold,
        fontSize: '18px',
        lineHeight: '25px',
    },
    buttonSmall: {
        fontFamily: fonts.main, 
        fontWeight: fontWeights.extrabold,
        fontSize: '14px',
        lineHeight: '19px',
    },
  
    //alert
    alert: {
        header: {
            fontFamily: fonts.main, 
            fontWeight: fontWeights.extrabold,
            fontSize: '12px',
            lineHeight: '16.8px',
        },
        text: {
            fontFamily: fonts.secondary, 
            fontWeight: fontWeights.regular,
            fontSize: '12px',
            lineHeight: '16px',
        },
        buttonText: {
            fontFamily: fonts.main, 
            fontWeight: fontWeights.extrabold,
            fontSize: '14px',
            lineHeight: '16px',
        },
    },

    //Scrolling Table of Contents
    ScrollNavigation: {
        fontFamily: fonts.secondary, 
        fontWeight: fontWeights.regular,
        fontSize: '16px',
        lineHeight: '24px',
    },
};

const button = {
    sizingAndTypography: {
        small: {
          ...typography.buttonSmall,
          padding: '6.5px 11px',
        },
        medium: {
          ...typography.button,
          padding: '6.5px 13px',
        },
        large: {
          ...typography.buttonLarge,
          padding: '7.5px 16px',
        },
    },

    default: (colorPalette) => ({
        bg: {
            default: colorPalette[500],
            hover: colorPalette[300],
            focussed: colorPalette[300],
            disabled: colors.disabled
        },
        border: {
            default: 'none',
            hover: 'none',
            focussed: 'none',
            disabled: 'none',
        },
        fontColor: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.disabled,
        },
        secondary: {
            bg: {
                default: colors.white,
                hover: colors.white,
                focussed: colors.white,
                disabled: colors.white,
            },
            border: {
                default: `1px solid ${colorPalette[500]}`,
                hover: `1px solid ${colorPalette[300]}`,
                focussed: `1px solid ${colorPalette[300]}`,
                disabled: `1px solid ${colors.disabled}`,
            },
            fontColor: {
                default: colorPalette[500],
                hover: colorPalette[300],
                focussed: colorPalette[300],
                disabled: colors.disabled,
            },
        },
        tertiary: {
            bg: {
                default: 'transparent',
                hover: 'transparent',
                focussed: 'transparent',
                disabled: 'transparent',
            },
            fontColor: {
                default: colorPalette[500],
                hover: colorPalette[300],
                focussed: colorPalette[300],
                disabled: colors.disabled,
            },
        },
    }), 
    primary: {
        fontColor: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.white,
        },
    },
    secondary: {
        bg: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.white,
        },
        border: {
            default: `1px solid ${midnightPalette[500]}`,
            hover: `1px solid ${midnightPalette[300]}`,
            focussed: `1px solid ${midnightPalette[300]}`,
            disabled: `1px solid ${colors.disabled}`,
        },
        fontColor: {
            default: midnightPalette[500],
            hover: midnightPalette[300],
            focussed: midnightPalette[300],
            disabled: colors.disabled,
        },
    },
    tertiary: {
        bg: {
            default: 'transparent',
            hover: 'transparent',
            focussed: 'transparent',
            disabled: 'transparent',
        },
        fontColor: {
            default: midnightPalette[500],
            hover: midnightPalette[300],
            focussed: midnightPalette[300],
            disabled: colors.disabled,
        },
    },
}

const ScrollNavigation = {

    default: (colorPalette) => ({
        left: {
            borderColor: {
                default: 'transparent',
                hover: lightPalette[500],
                active: colorPalette[400],
            },
            fontColor: {
                default: '#1A1A1A',
                hover: colorPalette[300],
                active: colorPalette[300],
            },
            borderWidth:'0px 0px 0px 2px',
        }
        ,
        right: {
            borderColor: {
                default: 'transparent',
                hover: lightPalette[500],
                active: colorPalette[400],
            },
            fontColor: {
                default: '#1A1A1A',
                hover: colorPalette[300],
                active: colorPalette[300],
            },
            borderWidth: '0px 2px 0px 0px'},
    }), 
    left: {
        borderColor: {
            default: 'transparent',
            hover: lightPalette[500],
            active: midnightPalette[400],
        },
        fontColor: {
            default: '#1A1A1A',
            hover: midnightPalette[300],
            active: midnightPalette[300],
        },
        borderWidth:'0px 0px 0px 2px',
    }
    ,
    right: {
        borderColor: {
            default: 'transparent',
            hover: '#D9D9D9',
            active: midnightPalette[400],
        },
        fontColor: {
            default: '#1A1A1A',
            hover: midnightPalette[300],
            active: midnightPalette[300],
        },
        borderWidth: '0px 2px 0px 0px'},
    }

const verticalTabList = {
    tabColor: {
        default: lightPalette[300],
        hover: lightPalette[300],
        selected: midnightPalette[100],
    },
    fontColor: {
        default: darkPalette[700],
        hover: midnightPalette[300],
        selected: midnightPalette[300],
    },
    lineColor: {
        default: lightPalette[500],
        hover: lightPalette[500],
        selected: midnightPalette[300],
    }
}

const tag = {
    variants: {
        info: {background: colors.bluePalette[100]},
        danger: {background: colors.redPalette[100]},
        success: {background: colors.greenPalette[100]},
        warning: {background: colors.yellowPalette[100]},
        archived: {background: colors.lightPalette[300]},
    },
    sizingAndTypography: {
        large: {
            fontSize: '16px',
            lineHeight: '24px',
        },
        medium: {
            fontSize: '14px',
            lineHeight: '20px',
        },
        small: {
            fontSize: '12px',
            lineHeight: '16px',
        },
    },

}
const alert = {
    default: (colorPalette) => ({
        bg: {
            default: colorPalette[700],
            hover: colorPalette[700],
            focussed: colorPalette[700],
            disabled: colors.disabled
        },
        border: {
            default: `1px solid transparent`,
            hover: `1px solid transparent`,
            focussed: `1px solid transparent`,
            disabled: `1px solid transparent`,
        },
        textColor: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.white,
        },
        headerColor: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.white,
        },
        buttonColor: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.white,
        },
        iconColor: {
            default: colors.white,
            hover: colors.white,
            focussed: colors.white,
            disabled: colors.white,
        }
    }),
    success: {
        false: {
            bg: {
                default: greenPalette[700],
                hover: greenPalette[700],
                focussed: greenPalette[700],
                disabled: greenPalette[700]
            },
        },
        true: {
            bg: {
                default: lightPalette[100],
                hover: lightPalette[100],
                focussed: lightPalette[100],
                disabled: lightPalette[100]
            },
            border: {
                default: `1px solid ${greenPalette[700]}`,
                hover: `1px solid ${greenPalette[700]}`,
                focussed: `1px solid ${greenPalette[700]}`,
                disabled: `1px solid ${greenPalette[700]}`,
            },
            textColor: {
                default: darkPalette[500],
                hover: darkPalette[500],
                focussed: darkPalette[500],
                disabled: darkPalette[500],
            },
            headerColor: {
                default: greenPalette[700],
                hover: greenPalette[700],
                focussed: greenPalette[700],
                disabled: greenPalette[700],
            },
            buttonColor: {
                default: greenPalette[500],
                hover: greenPalette[500],
                focussed: greenPalette[500],
                disabled: greenPalette[500],
            },
            iconColor: {
                default: greenPalette[700],
                hover: greenPalette[700],
                focussed: greenPalette[700],
                disabled: greenPalette[700],
            }
        }
    },
    error: {
        false: {
            bg: {
                default: redPalette[800],
                hover: redPalette[800],
                focussed: redPalette[800],
                disabled: redPalette[800]
            },
        },
        true: {
            bg: {
                default: lightPalette[100],
                hover: lightPalette[100],
                focussed: lightPalette[100],
                disabled: lightPalette[100]
            },
            border: {
                default: `1px solid ${redPalette[800]}`,
                hover: `1px solid ${redPalette[800]}`,
                focussed: `1px solid ${redPalette[800]}`,
                disabled: `1px solid ${redPalette[800]}`,
            },
            textColor: {
                default: darkPalette[500],
                hover: darkPalette[500],
                focussed: darkPalette[500],
                disabled: darkPalette[500],
            },
            headerColor: {
                default: redPalette[800],
                hover: redPalette[800],
                focussed: redPalette[800],
                disabled: redPalette[800],
            },
            buttonColor: {
                default: redPalette[800],
                hover: redPalette[800],
                focussed: redPalette[800],
                disabled: redPalette[800],
            },
            iconColor: {
                default: redPalette[800],
                hover: redPalette[800],
                focussed: redPalette[800],
                disabled: redPalette[800],
            }
        }
    },
    message: {
        false: {
            bg: {
                default: bluePalette[700],
                hover: bluePalette[700],
                focussed: bluePalette[700],
                disabled: bluePalette[700]
            },
        },
        true: {
            bg: {
                default: lightPalette[100],
                hover: lightPalette[100],
                focussed: lightPalette[100],
                disabled: lightPalette[100]
            },
            border: {
                default: `1px solid ${bluePalette[700]}`,
                hover: `1px solid ${bluePalette[700]}`,
                focussed: `1px solid ${bluePalette[700]}`,
                disabled: `1px solid ${bluePalette[700]}`,
            },
            textColor: {
                default: darkPalette[500],
                hover: darkPalette[500],
                focussed: darkPalette[500],
                disabled: darkPalette[500],
            },
            headerColor: {
                default: bluePalette[700],
                hover: bluePalette[700],
                focussed: bluePalette[700],
                disabled: bluePalette[700],
            },
            buttonColor: {
                default: bluePalette[700],
                hover: bluePalette[700],
                focussed: bluePalette[700],
                disabled:bluePalette[700],
            },
            iconColor: {
                default: bluePalette[700],
                hover: bluePalette[700],
                focussed: bluePalette[700],
                disabled: bluePalette[700],
            }
        }
    },
    brand:{
        false:{
            bg: {
                default: midnightPalette[400],
                hover: midnightPalette[400],
                focussed: midnightPalette[400],
                disabled: midnightPalette[400]
            },
        },
        true: {
            bg: {
                default: lightPalette[100],
                hover: lightPalette[100],
                focussed: lightPalette[100],
                disabled: lightPalette[100]
            },
            border: {
                default: `1px solid ${midnightPalette[400]}`,
                hover: `1px solid ${midnightPalette[400]}`,
                focussed: `1px solid ${midnightPalette[400]}`,
                disabled: `1px solid ${midnightPalette[400]}`,
            },
            textColor: {
                default: darkPalette[500],
                hover: darkPalette[500],
                focussed: darkPalette[500],
                disabled: darkPalette[500],
            },
            headerColor: {
                default: midnightPalette[400],
                hover: midnightPalette[400],
                focussed: midnightPalette[400],
                disabled: midnightPalette[400],
            },
            buttonColor: {
                default: midnightPalette[400],
                hover: midnightPalette[400],
                focussed: midnightPalette[400],
                disabled: midnightPalette[400],
            },
            iconColor: {
                default: midnightPalette[400],
                hover: midnightPalette[400],
                focussed: midnightPalette[400],
                disabled: midnightPalette[400],
            }
        }
    },
}

const theme = {
    colors,
    fonts,
    fontWeights,
    alert,
    button,
    ScrollNavigation,
    letterSpacings,
    typography,
    verticalTabList,
    tag
};

export default theme;
export { colors };
  
