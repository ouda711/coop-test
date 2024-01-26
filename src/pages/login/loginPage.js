import './login-styles.css';
import * as React from 'react';

// ** MUI Imports
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { Grid } from '@mui/material';

import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';
import { useHistory } from 'react-router-dom';



import bg from '../../assets/img/bgimg/bgimg.png';
import logo from '../../assets/img/logo.svg'
import watchIcon from '../../assets/img/Watch banking icon.svg'
import diamond from '../../assets/img/icon1.svg'

import lock from '../../assets/img/Paddlock.svg'
import user from '../../assets/img/User.svg'

// ** Icon Imports
import Icon from '../../core/components/icon/index'

// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',

  // For V1 Blank layout pages
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },

  // For V2 Blank layout pages
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative'
  }
}))



const LoginPage = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const [loading, setLoading] = React.useState(false)

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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true)  
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', values);
        const token = response.data.token;
        localStorage.setItem('token', token);
        <Navigate to="/home" replace={true} />
        setLoading(false)
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error.message);
        setLoading(false)
      }
    },
  });


    return (
        <BlankLayoutWrapper className='layout-wrapper'>
            <Box className='app-content' sx={{ overflow: 'hidden', minHeight: '100vh', position: 'relative' }}>
                <Box style={{backgroundImage: `url(${bg})`, width: '100vw', height: '100vh'}}>
                    <Box style={{backgroundColor: '#00513B', opacity: 0.83, width: '100vw', height: '100vh'}}>
                        <Box style={{width: '939px', height: '939px', backgroundColor: '#80B927', borderRadius: '50%', margin: 'auto', opacity: '0.12'}}></Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{top: 0, width: '100vw', height: '100vh', backgroundColor: 'transparent', position: 'absolute',minWidth: '100vw', minHeight: '100vh', zIndex: 1000}}>
                `<AppBar position="static" style={{backgroundColor: 'transparent', width: '80vw', margin: 'auto'}} elevation={0}> 
                    <Toolbar>
                        <Link to="/link1" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'inherit' }}>
                            <Typography variant="h6" style={{ marginRight: '20px', font: 'normal normal normal 16px/19px Montserrat', letterSpacing: 0, color: '#fff', textTransform: 'uppercase', opacity: 1 }}>
                            Home
                            </Typography>
                        </Link>

                        <Link to="/link2" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="h6" style={{ marginRight: '20px', font: 'normal normal normal 16px/19px Montserrat', letterSpacing: 0, color: '#fff', textTransform: 'uppercase', opacity: 1  }}>
                            Personal
                            </Typography>
                        </Link>

                        <Link to="/link2" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Typography variant="h6" style={{ marginRight: '20px', font: 'normal normal normal 16px/19px Montserrat', letterSpacing: 0, color: '#fff', textTransform: 'uppercase', opacity: 1  }}>
                            Business
                            </Typography>
                        </Link>

                        <Typography variant="h6" style={{ flex: 1, textAlign: 'center' }}>
                            <img src={logo} alt="Logo" style={{ maxHeight: '50px', backgroundColor: 'white', padding: '0.5rem 5rem', borderRadius: '0 0 5px 5px', marginLeft: '-5rem' }} />
                        </Typography>
                    </Toolbar>
                </AppBar>`

                <div container style={{marginTop: '5rem', display: 'flex', alignItems:'center', flexDirection: 'row'}}>
                    <div flex={0.75}>
                        <Grid item xs={12} m={6}>
                            <Typography variant='h1' style={{left: '85px', textAlign: 'left', font: 'normal normal bold 40px/49px Montserrat', letterSpacing: '0', color: '#fff', textTransform: 'capitalize', opacity: 1}}>
                                Online banking that makes a statement
                            </Typography>
                            <div style={{width: '35%', textAlign: 'center', marginTop: '1rem'}}>
                                <Typography variant='p' style={{font: 'normal normal normal 14px/18px Montserrat', color: '#fff', marginTop: '1rem', textAlign: 'center', width: '1rem'}}>
                                    Full financial visibility of all your bank accounts and credit cards all in one place. Get interest on ypur money, personalised budgeting and much more.
                                </Typography>
                            </div>

                            <div style={{display: 'flex', width: '50%', justifyContent: 'space-around', alignItems: 'center', margin: '4rem 0 0 0'}} >
                                <Box flex={0.35} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
                                    <img src={watchIcon} alt='watch' style={{marginBottom: '1rem'}}/>
                                    <Typography variant='h6' style={{color: '#fff', font: 'normal normal bold 15px/19px Montserrat'}}>Watch Banking</Typography>
                                    <Typography variant='p' style={{textAlign: 'center', marginTop: '0.75rem', color: '#fff'}}>
                                        Send money to your saved beneficiaries and pay bills from your saved bills straight from your smart watch
                                    </Typography>
                                </Box>

                                <Box flex={0.35} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}> 
                                    <img src={diamond} alt='watch' style={{marginBottom: '1rem'}}/>
                                    <Typography variant='h6' style={{color: '#fff', font: 'normal normal bold 15px/19px Montserrat'}}>Quality</Typography>
                                    <Typography variant='p' style={{textAlign: 'center', marginTop: '0.75rem', color: '#fff'}}>
                                        Cutting-edge technology, FSCS protection and 24/7 support. Just a few of the reasons over 10 million customers trust us to keep thier money safe.
                                    </Typography>
                                </Box>
                            </div>
                        </Grid>
                    </div>
                    
                    <div flex={0.5}>
                        <Grid item xs={12} m={6}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30rem', backgroundColor: 'white', padding: '1rem', borderRadius: '5px' }}>
                                <form onSubmit={formik.handleSubmit} style={{ textAlign: 'center' }}>
                                    <Typography variant='h5' style={{margin: '2rem 0 2rem 0', font: 'normal normal bold 20px/24px Montserrat'}}>Login to Proceed</Typography>
                                    <div style={{ marginBottom: '20px' }}>
                                    <TextField
                                        style={{width: '28rem'}}
                                        name="username"
                                        label="Username"
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        required
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.username && Boolean(formik.errors.username)}
                                        helperText={formik.touched.username && formik.errors.username}
                                        InputProps={{
                                        startAdornment: (
                                            <user style={{ marginRight: '8px', color: '#757575' }} />
                                        ),
                                        }}
                                    />
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                    <TextField
                                        style={{width: '28rem'}}
                                        name="password"
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        required
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        InputProps={{
                                        startAdornment: <lock style={{ marginRight: '8px', color: '#757575' }} />,
                                        }}
                                    />
                                    </div>
                                    <Button style={{backgroundColor: '#80BA27', textTransform: 'capitalize', width: '12rem', marginBottom: '2rem', marginTop: '1.5rem'}}variant="contained" color="primary" type="submit" disabled={loading}>
                                    {loading? 'Please wait...' : 'Login'}
                                    </Button>
                                </form>
                            </div>
                        </Grid>
                    </div>
                </div>
            </Box>
        </BlankLayoutWrapper>
    )
}

export default LoginPage