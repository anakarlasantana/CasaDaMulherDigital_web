import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
  } from "@mui/material";
  
  interface PolicyCardProps {
    title: string;
    description: string;
    image?: string;
    date?: string
  }
  
  const PolicyCard: React.FC<PolicyCardProps> = ({
    title,
    image,
    description,
    date
  }) => {
    return (
      <Card variant="elevation" sx={{  }}>
        {image && (
          <CardMedia
            component="img"
            image={image}
          />
        )}
        <CardContent sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography fontSize={"12px"} component="div" color={"primary"}>
            {date}
          </Typography>
          <Typography fontSize={"14px"} component="div" gutterBottom>
          {description.length > 100 ? `${description.substring(0, 150)}...` : description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Saiba mais</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default PolicyCard;
  