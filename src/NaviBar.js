import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';

const pages = ['동아리 목록', '캘린더', '커뮤니티'];
const settings = ['마이페이지', '로그아웃'];

function NaviBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navigatePage = (page) => {
    if(page === '로그아웃'){
      navigate('/');
    } else if(page === '동아리 목록'){
      navigate('/Main/ClubList');
    } else if(page === '캘린더'){
      navigate('/Main/Calendar');
    } else if(page === '커뮤니티'){
      navigate('/Main/Community');
    } else if(page === '마이페이지'){
      navigate('/Main/Mypage')
    }
  };

  return (
    <AppBar position="static" sx={{
        backgroundColor: '#fd7f5a'
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              fontSize: '30px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            동방와
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" onClick={() => navigatePage(page)}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              fontSize: '35px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            동방와
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigatePage(page)}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: '500', fontSize: '20px' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
          <FormControl sx={{ m: 1, minWidth: 120, marginRight: '50px' }} size="small">
            <InputLabel id="demo-select-small-label" sx={{
                '&.Mui-focused': {color: 'white',},
            }}>내 동아리</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="내 동아리"
                onChange={handleChange}
                sx={{ '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
            >
                <MenuItem value="">
                    <em>동아리를 선택해주세요</em>
                </MenuItem>
                <MenuItem value={10}>코딩 동아리</MenuItem>
                <MenuItem value={20}>사진 동아리</MenuItem>
            </Select>
          </FormControl>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="프로필">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => navigatePage(setting)}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NaviBar;