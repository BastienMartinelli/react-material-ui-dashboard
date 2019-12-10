import React from "react";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, TextField, Fade } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

import AppStore from "store/AppStore";
import { MuiFIeld, SubmitButton } from "components/form";
import teamImage from "img/team.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${teamImage})`,
    backgroundRepeat: "no-repeat",

    backgroundSize: "contain",
    backgroundPosition: "center",
    margin: 36
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: "white"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  rememberMe: {
    marginTop: 16
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { user, setUser } = AppStore.useContainer();

  async function handleSubmit(values) {
    await new Promise(res => setTimeout(() => res(), 2000));
    setUser(values);
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("signin.invalid.email"))
      .required(t("required")),
    password: Yup.string().required(t("required")),
    remember: Yup.boolean()
  });

  return (
    <Grid container component="main" className={classes.root}>
      {user && <Redirect exact to="/private" />}
      <CssBaseline />
      <Slide in direction="right">
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon color="inherit" />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("signin.title")}
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
                remember: ""
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
            >
              <Form className={classes.form} noValidate>
                <MuiFIeld
                  comp={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t("signin.email")}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <MuiFIeld
                  comp={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t("signin.password")}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="remember"
                      value="remember"
                      color="primary"
                    />
                  }
                  label={t("signin.remember")}
                  className={classes.rememberMe}
                />
                <SubmitButton
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {t("signin.submit")}
                </SubmitButton>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      {t("signin.forgotpassword")}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {t("signin.signup")}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </Form>
            </Formik>
          </div>
        </Grid>
      </Slide>
      <Fade timeout={200} in>
        <Grid item xs={false} sm={3} md={7} className={classes.image} />
      </Fade>
    </Grid>
  );
}
