import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectCard from 'main/components/ProjectCard';

import projects from '@/data/content/projects';
import Header from 'main/layout/Header';
import Heading from 'main/components/Heading';
import Footer from 'main/layout/Footer';

const theme = createTheme();

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        <Heading title="Projects" />
        <Container sx={{ py: 8 }}>
          {/* End hero unit */}
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {projects.map((project) => (
              <Grid item key={project.id} xs={2} sm={4} md={4}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
