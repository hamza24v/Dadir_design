import { createTheme } from "@mui/material";

export let theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
  });

theme = createTheme(theme, {
    palette: {
      salmon: theme.palette.augmentColor({
        color: {
          main: '#ADD8E6',
        },
        name: 'salmon',
      }),
    },
  });
  