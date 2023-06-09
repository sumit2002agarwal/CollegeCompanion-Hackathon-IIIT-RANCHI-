import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    IconButton,
  } from "@mui/material";
  
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import * as React from "react";
  import { useState } from "react";
  
  function Login() {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (eve) => {
      console.log(user);
      setUser({ ...user, [eve.target.name]: eve.target.value });
    };

    const PostData = async (e) => {
      e.preventDefault();
      const {  email, password} = user;
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:email,
          password:password,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === 400 || !data || data.error) {
         console.log("not Logged In");
      
      } else {
    
        console.log("Successfully Logged In");
      }
    };
  
    return (
      <div>
        <Typography
          style={{ fontWeight: "700", margin: "5% auto" }}
          variant="h3"
          align="Center"
        >
          Login
        </Typography>
        <Card style={{ maxWidth: 400, margin: "5% auto", padding: "25px 6px" }}>
          <CardContent>
            <form>
              <Grid container spacing={2}>
                
                <Grid xs={12} item>
                  <TextField
                    size="small"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              
                <Grid xs={12} item>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      required
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12} item>
                  <Button
  
                    sx={{ borderRadius: 6 }}
                    type="submit"
                    variant="contained"
                    fullWidth
                    onClick={PostData}
                  >
                    Submit

                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default Login;
  