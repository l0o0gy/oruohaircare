import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Button,
  Typography,
  Fade,
  Zoom,
  Chip,
  Avatar,
  useScrollTrigger,
  Slide,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import logo from '../assets/img/IMG_20251017_220510.png';

const drawerWidth = 280;

const navItems = [
  { label: 'Home', icon: <HomeIcon />, arabicLabel: 'الرئيسية' },
  { label: 'About', icon: <InfoIcon />, arabicLabel: 'عن المنتج' },
  { label: 'Contact', icon: <ContactMailIcon />, arabicLabel: 'تواصل معنا' },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [logoLoaded, setLogoLoaded] = React.useState(false);
  const scrolled = useScrollTrigger({ threshold: 50 });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ height: '100%', background: '#ffffff' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #c49840ff 0%, #8d6e31ff 100%)',
          p: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.3)',
              transform: 'rotate(90deg)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Logo and Brand */}
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 2,
              background: 'white',
              p: 1,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src={logo}
              alt="oruo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Avatar>
        </Box>

        {/* Decorative Wave */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            right: 0,
            height: 30,
            background: 'white',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 5,
              left: 0,
              right: 0,
              height: 30,
              background: 'linear-gradient(135deg, #c49840ff 0%, #8d6e31ff 100%)',
              borderRadius: '0 0 50% 50%',
            }
          }}
        />
      </Box>

      {/* Navigation Items */}
      <List sx={{ mt: 2, px: 2 }}>
        {navItems.map((item, index) => (
          <Zoom in timeout={300 + index * 100} key={item.label}>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    background: 'linear-gradient(135deg, rgba(196, 152, 64, 0.1) 0%, rgba(141, 110, 49, 0.1) 100%)',
                    transform: 'translateX(-5px)',
                    '&::before': {
                      width: '4px',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 0,
                    background: 'linear-gradient(180deg, #c49840ff, #8d6e31ff)',
                    transition: 'width 0.3s ease',
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#c49840ff', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  secondary={item.arabicLabel}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: '#333',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.75rem',
                    color: '#666',
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Zoom>
        ))}
      </List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          component="nav"
          elevation={scrolled ? 3 : 0}
          sx={{
            bgcolor: '#ffffff',
            color: 'black',
            borderBottom: scrolled ? 'none' : '1px solid rgba(221, 221, 221, 0.5)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.98)',
            transition: 'all 0.3s ease',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #c49840ff, transparent)',
              opacity: scrolled ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }
          }}
        >
          <Toolbar 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              px: { xs: 2, md: 4 },
              py: 1.5,
            }}
          >
            {/* Logo Section */}
            <Fade in timeout={500}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 2,
                  cursor: 'pointer',
               
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {!logoLoaded && (
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',

                      }}
                    />
                  )}
                  <img
                    src={logo}
                    alt="PV Cosmetic Logo"
                    onLoad={() => setLogoLoaded(true)}
                    style={{ 
                      height: 50, 
                      objectFit: 'contain',
                      display: logoLoaded ? 'block' : 'none',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                    }}
                  />
                </Box>
                
              </Box>
            </Fade>

            {/* Navigation Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
                {navItems.map((item, index) => (
                  <Zoom in timeout={700 + index * 100} key={item.label}>
                    <Button
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                      sx={{
                        color: '#333',
                        px: 2,
                        py: 1,
                        borderRadius: 50,
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        fontWeight: 600,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: hoveredItem === item.label ? '80%' : '0',
                          height: '3px',
                          background: 'linear-gradient(90deg, #c49840ff, #8d6e31ff)',
                          transform: 'translateX(-50%)',
                          transition: 'width 0.3s ease',
                          borderRadius: 2,
                        },
                        '&:hover': {
                          color: '#c49840ff',
                          background: 'rgba(196, 152, 64, 0.08)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  </Zoom>
                ))}
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { sm: 'none' },
                  background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(90deg)',
                    background: 'linear-gradient(135deg, #8d6e31ff, #c49840ff)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          anchor="right"
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;