import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import { useAuth } from '../firebase/auth';
import styles from '../styles/navbar.module.scss';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { authUser, signOut } = useAuth();
  const router = useRouter();

  const mapApi = () => {
    router.push('/map');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <Container className={styles.container}>
            <Typography variant="h3" sx={{ flexGrow: 1, alignSelf: "center" }}>
              CASH TRACKER
            </Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Button variant="text" color="secondary" onClick={mapApi}> Map </Button>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {authUser?.email}
              </Typography>
              <Button variant="text" color="secondary" onClick={signOut}>
                Logout
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
