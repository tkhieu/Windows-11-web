import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// define the base component styles
const baseStyle = {
	borderRadius: 'base',
};

// define custom sizes
const sizes = {
	sm: defineStyle({
		fontSize: 'sm',
		py: '1',
		px: '2',
		maxW: '320px',
	}),
	md: defineStyle({
		fontSize: 'md',
		py: '2',
		px: '3',
		maxW: '320px',
	}),
	lg: defineStyle({
		fontSize: 'lg',
		py: '2',
		px: '4',
		maxW: '350px',
	}),
};

const ghostVariant = defineStyle((props) => ({
	border: '1px solid',
	borderColor: mode(`transparent`, `whiteAlpha.300`)(props),
	bg: mode('whiteAlpha.600', 'whiteAlpha.100')(props),
	color: mode(`inherit`, `gray.300`)(props),
	boxShadow: 'subtle',
	backdropFilter: 'blur(20.5px) saturate(180%)',
}));

// define custom variants
const variants = {
	ghost: ghostVariant,
};

// export the component theme
export const tooltipTheme = defineStyleConfig({
	baseStyle,
	sizes,
	variants,
	defaultProps: {
		size: 'sm',
		variant: 'ghost',
	},
});
