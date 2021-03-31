import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../schemas/userSchemas';
import { useDispatch, useSelector } from 'react-redux';
import { resetError } from '../../redux/slices/userSlice';
// import { resetError, startLogin } from '../../redux/slices/userSlice';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  marginBottom: {
    marginBottom: 16,
  },
});

const FormRegister = () => {
  const classes = useStyles();

  const { error: errorLoginFailed, loading: logging } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const isLoading = logging === 'pending' ? true : false;

  const handleLogin = (credentials) => {
    // It's already validated
    console.log(credentials);
    // dispatch(startLogin({ ...credentials }));
  };

  return (
    <>
      <Box mb={3}>
        <Typography color="textPrimary" variant="h4" align="center">
          Sign Up
        </Typography>
      </Box>

      <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
        <Box display="flex" flexDirection="column">
          <TextField
            name="name"
            inputRef={register}
            id="name"
            label="Full Name"
            type="text"
            variant="outlined"
            className={classes.marginBottom}
            placeholder="Justin Bieber"
            error={errors.name && errors.name?.message !== ''}
            helperText={errors.name?.message}
            disabled={isLoading}
          />
          <TextField
            name="email"
            inputRef={register}
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            className={classes.marginBottom}
            placeholder="ejemplo@gmail.com"
            error={errors.email && errors.email?.message !== ''}
            helperText={errors.email?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon />
                </InputAdornment>
              ),
            }}
            disabled={isLoading}
          />
          <FormControl
            className={classes.marginBottom}
            variant="outlined"
            disabled={isLoading}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              labelWidth={85}
              type={showPassword ? 'text' : 'password'}
              inputRef={register}
              placeholder="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              error={errors.password && errors.password?.message !== ''}
            />
            <FormHelperText disabled={false} error>
              {errors.password?.message}
            </FormHelperText>
          </FormControl>
          <Snackbar
            open={errorLoginFailed !== null}
            autoHideDuration={6000}
            onClose={() => dispatch(resetError(null))}
          >
            <Alert onClose={() => dispatch(resetError(null))} severity="error">
              {errorLoginFailed}
            </Alert>
          </Snackbar>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={isLoading}
            className={classes.marginBottom}
            endIcon={<Send />}
          >
            Sign Up
          </Button>
          <Typography align="center">
            <Link to="/login">
                Sign In
            </Link>
          </Typography>
        </Box>
      </form>
    </>
  );
};

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export default FormRegister;
