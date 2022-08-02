import * as React from 'react';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { Grid, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Project {}

interface ProjectCardProps {}

export default function ProjectCard({ project }) {
  return (
    <a href={project.link || project.github} target="_blank">
      <CardActionArea
        sx={{
          height: '100%',
        }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            borderRadius: 2,
          }}
        >
          <CardMedia component="img" image={project.img} alt="random" />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography>{project.desc}</Typography>
          </CardContent>
          <CardActions>
            <Grid container direction="row" spacing={2}>
              {project.tags.map((tag: string) => (
                <Grid item key={tag}>
                  <Chip label={tag} />
                </Grid>
              ))}
            </Grid>
          </CardActions>
        </Card>
      </CardActionArea>
    </a>
  );
}
