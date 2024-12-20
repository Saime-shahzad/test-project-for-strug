import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cards({key, description ,style,onClick, title , image}) {


  return (
    <Card key={key}  sx={{ maxWidth: 345 }} style={style}  className='p-3' 
    onClick={onClick} >
      <CardMedia
        sx={{ height: 140 , borderRadius:"10px"}}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
        </Typography>
      </CardContent>
      <CardActions className='d-flex justify-content-between'>
        <Typography fontSize="10px">Cuisine:<span style={{fontSize:"12px"  , fontWeight:"bold"}} >
            Italian
            </span>
            </Typography>
        <Typography fontSize="10px">
          
            <span style={{fontSize:"12px"  , fontWeight:"bold"}} >
            Ratings:
            </span>
            4.6 </Typography>
      </CardActions>
    </Card>
  );
}